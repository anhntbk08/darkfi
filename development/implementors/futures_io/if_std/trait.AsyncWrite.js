(function() {var implementors = {
"async_compression":[["impl&lt;W: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_compression/futures/write/struct.ZlibDecoder.html\" title=\"struct async_compression::futures::write::ZlibDecoder\">ZlibDecoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_compression/futures/write/struct.ZlibEncoder.html\" title=\"struct async_compression::futures::write::ZlibEncoder\">ZlibEncoder</a>&lt;W&gt;"]],
"async_fs":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_fs/struct.File.html\" title=\"struct async_fs::File\">File</a>"]],
"async_io":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_io/struct.Async.html\" title=\"struct async_io::Async\">Async</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for &amp;<a class=\"struct\" href=\"async_io/struct.Async.html\" title=\"struct async_io::Async\">Async</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a T</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"]],
"async_net":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_net/unix/struct.UnixStream.html\" title=\"struct async_net::unix::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_net/struct.TcpStream.html\" title=\"struct async_net::TcpStream\">TcpStream</a>"]],
"async_process":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_process/struct.ChildStdin.html\" title=\"struct async_process::ChildStdin\">ChildStdin</a>"]],
"async_rustls":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"async_rustls/enum.TlsStream.html\" title=\"enum async_rustls::TlsStream\">TlsStream</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;IO&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_rustls/client/struct.TlsStream.html\" title=\"struct async_rustls::client::TlsStream\">TlsStream</a>&lt;IO&gt;<span class=\"where fmt-newline\">where\n    IO: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;IO&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_rustls/server/struct.TlsStream.html\" title=\"struct async_rustls::server::TlsStream\">TlsStream</a>&lt;IO&gt;<span class=\"where fmt-newline\">where\n    IO: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"async_std":[["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/net/struct.TcpStream.html\" title=\"struct async_std::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.Cursor.html\" title=\"struct async_std::io::Cursor\">Cursor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/fs/struct.File.html\" title=\"struct async_std::fs::File\">File</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.Sink.html\" title=\"struct async_std::io::Sink\">Sink</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.Cursor.html\" title=\"struct async_std::io::Cursor\">Cursor</a>&lt;&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.Stdout.html\" title=\"struct async_std::io::Stdout\">Stdout</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for &amp;<a class=\"struct\" href=\"async_std/os/unix/net/struct.UnixStream.html\" title=\"struct async_std::os::unix::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.Cursor.html\" title=\"struct async_std::io::Cursor\">Cursor</a>&lt;&amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for &amp;<a class=\"struct\" href=\"async_std/net/struct.TcpStream.html\" title=\"struct async_std::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.Stderr.html\" title=\"struct async_std::io::Stderr\">Stderr</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/os/unix/net/struct.UnixStream.html\" title=\"struct async_std::os::unix::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for &amp;<a class=\"struct\" href=\"async_std/fs/struct.File.html\" title=\"struct async_std::fs::File\">File</a>"],["impl&lt;W: <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.Write.html\" title=\"trait async_std::io::Write\">AsyncWrite</a> for <a class=\"struct\" href=\"async_std/io/struct.BufWriter.html\" title=\"struct async_std::io::BufWriter\">BufWriter</a>&lt;W&gt;"]],
"blocking":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"blocking/struct.Unblock.html\" title=\"struct blocking::Unblock\">Unblock</a>&lt;T&gt;"]],
"futures":[],
"futures_io":[],
"futures_lite":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Sink.html\" title=\"struct futures_lite::io::Sink\">Sink</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.AssertAsync.html\" title=\"struct futures_lite::io::AssertAsync\">AssertAsync</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.WriteHalf.html\" title=\"struct futures_lite::io::WriteHalf\">WriteHalf</a>&lt;T&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufReader.html\" title=\"struct futures_lite::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;&amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufWriter.html\" title=\"struct futures_lite::io::BufWriter\">BufWriter</a>&lt;W&gt;"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;"]],
"futures_util":[["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.WriteHalf.html\" title=\"struct futures_util::io::WriteHalf\">WriteHalf</a>&lt;W&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Sink.html\" title=\"struct futures_util::io::Sink\">Sink</a>"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;&amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.LineWriter.html\" title=\"struct futures_util::io::LineWriter\">LineWriter</a>&lt;W&gt;"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>,</span>"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;"]],
"smol":[],
"tor_async_utils":[["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>, W: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tor_async_utils/struct.JoinReadWrite.html\" title=\"struct tor_async_utils::JoinReadWrite\">JoinReadWrite</a>&lt;R, W&gt;"]],
"tor_proto":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tor_proto/stream/struct.DataStream.html\" title=\"struct tor_proto::stream::DataStream\">DataStream</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tor_proto/stream/struct.DataWriter.html\" title=\"struct tor_proto::stream::DataWriter\">DataWriter</a>"]],
"tor_rtmock":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tor_rtmock/net/struct.MockTlsStream.html\" title=\"struct tor_rtmock::net::MockTlsStream\">MockTlsStream</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tor_rtmock/io/struct.LocalStream.html\" title=\"struct tor_rtmock::io::LocalStream\">LocalStream</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()