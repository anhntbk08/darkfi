/* This file is part of DarkFi (https://dark.fi)
 *
 * Copyright (C) 2020-2023 Dyne.org foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

//! Manual connections session. Manages the creation of manual sessions.
//! Used to create a manual session and to stop and start the session.
//!
//! A manual session is a type of outbound session in which we attempt
//! connection to a predefined set of peers.
//!
//! Class consists of a weak pointer to the p2p interface and a vector of
//! outbound connection slots. Using a weak pointer to p2p allows us to
//! avoid circular dependencies. The vector of slots is wrapped in a mutex
//! lock. This is switched on every time we instantiate a connection slot
//! and insures that no other part of the program uses the slots at the
//! same time.

use async_std::sync::{Arc, Mutex, Weak};
use async_trait::async_trait;
use log::{info, warn};
use smol::Executor;
use url::Url;

use super::{
    super::{
        channel::ChannelPtr,
        connector::Connector,
        p2p::{DnetInfo, P2p, P2pPtr},
    },
    Session, SessionBitFlag, SESSION_MANUAL,
};
use crate::{
    system::{StoppableTask, StoppableTaskPtr, Subscriber, SubscriberPtr},
    util::async_util::sleep,
    Error, Result,
};

pub type ManualSessionPtr = Arc<ManualSession>;

/// Defines manual connections session.
pub struct ManualSession {
    p2p: Weak<P2p>,
    connect_slots: Mutex<Vec<StoppableTaskPtr>>,
    /// Subscriber used to signal channels processing
    channel_subscriber: SubscriberPtr<Result<ChannelPtr>>,
    /// Flag to toggle channel_subscriber notifications
    notify: Mutex<bool>,
}

impl ManualSession {
    /// Create a new manual session.
    pub fn new(p2p: Weak<P2p>) -> ManualSessionPtr {
        Arc::new(Self {
            p2p,
            connect_slots: Mutex::new(vec![]),
            channel_subscriber: Subscriber::new(),
            notify: Mutex::new(false),
        })
    }

    /// Stops the manual session.
    pub async fn stop(&self) {
        let connect_slots = &*self.connect_slots.lock().await;

        for slot in connect_slots {
            slot.stop().await;
        }
    }

    /// Connect the manual session to the given address
    pub async fn connect(self: Arc<Self>, addr: Url, ex: Arc<Executor<'_>>) {
        let task = StoppableTask::new();

        task.clone().start(
            self.clone().channel_connect_loop(addr, ex.clone()),
            // Ignore stop handler
            |_| async {},
            Error::NetworkServiceStopped,
            ex,
        );

        self.connect_slots.lock().await.push(task);
    }

    /// Creates a connector object and tries to connect using it
    pub async fn channel_connect_loop(
        self: Arc<Self>,
        addr: Url,
        ex: Arc<Executor<'_>>,
    ) -> Result<()> {
        let parent = Arc::downgrade(&self);
        let settings = self.p2p().settings();
        let connector = Connector::new(settings.clone(), Arc::new(parent));

        let attempts = settings.manual_attempt_limit;
        let mut remaining = attempts;

        // Add the peer to list of pending channels
        self.p2p().add_pending(&addr).await;

        // Loop forever if attempts==0, otherwise loop attempts number of times.
        let mut tried_attempts = 0;
        loop {
            tried_attempts += 1;
            info!(
                target: "net::manual_session",
                "[P2P] Connecting to manual outbound [{}] (attempt #{})",
                addr, tried_attempts,
            );
            match connector.connect(&addr).await {
                Ok((url, channel)) => {
                    info!(
                        target: "net::manual_session",
                        "[P2P] Manual outbound connected [{}]", url,
                    );

                    let stop_sub =
                        channel.subscribe_stop().await.expect("Channel should not be stopped");

                    // Register the new channel
                    self.register_channel(channel.clone(), ex.clone()).await?;

                    // Channel is now connected but not yet setup
                    // Remove pending lock since register_channel will add the channel to p2p
                    self.p2p().remove_pending(&addr).await;

                    // Notify that channel processing has finished
                    if *self.notify.lock().await {
                        self.channel_subscriber.notify(Ok(channel)).await;
                    }

                    // Wait for channel to close
                    stop_sub.receive().await;
                    info!(
                        target: "net::manual_session",
                        "[P2P] Manual outbound disconnected [{}]", url,
                    );
                    // DEV NOTE: Here we can choose to attempt reconnection again
                    return Ok(())
                }
                Err(e) => {
                    warn!(
                        target: "net::manual_session",
                        "[P2P] Unable to connect to manual outbound [{}]: {}",
                        addr, e,
                    );
                }
            }

            // Wait and try again.
            // TODO: Should we notify about the failure now, or after all attempts
            // have failed?
            if *self.notify.lock().await {
                self.channel_subscriber.notify(Err(Error::ConnectFailed)).await;
            }

            remaining = if attempts == 0 { 1 } else { remaining - 1 };
            if remaining == 0 {
                break
            }

            info!(
                target: "net::manual_session",
                "[P2P] Waiting {} seconds until next manual outbound connection attempt [{}]",
                settings.outbound_connect_timeout, addr,
            );
            sleep(settings.outbound_connect_timeout).await;
        }

        warn!(
            target: "net::manual_session",
            "[P2P] Suspending manual connection to {} after {} failed attempts",
            addr, attempts,
        );

        self.p2p().remove_pending(&addr).await;

        Ok(())
    }

    /// Enable channel_subscriber notifications.
    pub async fn enable_notify(self: Arc<Self>) {
        *self.notify.lock().await = true;
    }

    /// Disable channel_subscriber notifications.
    pub async fn disable_notify(self: Arc<Self>) {
        *self.notify.lock().await = false;
    }
}

#[async_trait]
impl Session for ManualSession {
    fn p2p(&self) -> P2pPtr {
        self.p2p.upgrade().unwrap()
    }

    fn type_id(&self) -> SessionBitFlag {
        SESSION_MANUAL
    }

    async fn dnet_info(&self) -> DnetInfo {
        todo!()
    }
}
