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

use std::time::Duration;

use arti_client::{config::BoolOrAuto, DataStream, StreamPrefs, TorClient};
use async_std::future;
use log::debug;

use crate::Result;

/// Tor Dialer implementation
#[derive(Debug, Clone)]
pub struct TorDialer;

impl TorDialer {
    /// Instantiate a new [`TorDialer`] object
    pub(crate) async fn new() -> Result<Self> {
        Ok(Self {})
    }

    /// Internal dial function
    pub(crate) async fn do_dial(
        &self,
        host: &str,
        port: u16,
        timeout: Option<Duration>,
    ) -> Result<DataStream> {
        debug!(target: "net::tor::do_dial", "Dialing {}:{} with Tor...", host, port);
        debug!(target: "net::tor::do_dial", "Bootstrapping...");
        let client = TorClient::builder().create_bootstrapped().await?;
        let mut stream_prefs = StreamPrefs::new();
        stream_prefs.connect_to_onion_services(BoolOrAuto::Explicit(true));

        if timeout.is_some() {
            let res = future::timeout(
                timeout.unwrap(),
                client.connect_with_prefs((host, port), &stream_prefs),
            )
            .await?;
            return Ok(res?)
        }

        Ok(client.connect_with_prefs((host, port), &stream_prefs).await?)
    }
}
