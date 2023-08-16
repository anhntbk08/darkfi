(function() {var implementors = {
"aes":[["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes256Enc.html\" title=\"struct aes::Aes256Enc\">Aes256Enc</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes256Dec.html\" title=\"struct aes::Aes256Dec\">Aes256Dec</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes192Dec.html\" title=\"struct aes::Aes192Dec\">Aes192Dec</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes192Enc.html\" title=\"struct aes::Aes192Enc\">Aes192Enc</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes128Dec.html\" title=\"struct aes::Aes128Dec\">Aes128Dec</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes192.html\" title=\"struct aes::Aes192\">Aes192</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes256.html\" title=\"struct aes::Aes256\">Aes256</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes128.html\" title=\"struct aes::Aes128\">Aes128</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"aes/struct.Aes128Enc.html\" title=\"struct aes::Aes128Enc\">Aes128Enc</a>"]],
"chacha20":[["impl&lt;R: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"chacha20/struct.ChaChaCore.html\" title=\"struct chacha20::ChaChaCore\">ChaChaCore</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"chacha20/struct.ChaCha20LegacyCore.html\" title=\"struct chacha20::ChaCha20LegacyCore\">ChaCha20LegacyCore</a>"],["impl&lt;R: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"chacha20/struct.XChaChaCore.html\" title=\"struct chacha20::XChaChaCore\">XChaChaCore</a>&lt;R&gt;"]],
"cipher":[],
"crypto_common":[],
"ctr":[["impl&lt;C, F&gt; <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"ctr/struct.CtrCore.html\" title=\"struct ctr::CtrCore\">CtrCore</a>&lt;C, F&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"cipher/block/trait.BlockEncryptMut.html\" title=\"trait cipher::block::BlockEncryptMut\">BlockEncryptMut</a> + <a class=\"trait\" href=\"cipher/block/trait.BlockCipher.html\" title=\"trait cipher::block::BlockCipher\">BlockCipher</a>,\n    F: <a class=\"trait\" href=\"ctr/flavors/trait.CtrFlavor.html\" title=\"trait ctr::flavors::CtrFlavor\">CtrFlavor</a>&lt;C::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>&gt;,</span>"]],
"digest":[["impl&lt;T, OutSize, O&gt; <a class=\"trait\" href=\"digest/core_api/trait.BlockSizeUser.html\" title=\"trait digest::core_api::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"digest/core_api/struct.CtVariableCoreWrapper.html\" title=\"struct digest::core_api::CtVariableCoreWrapper\">CtVariableCoreWrapper</a>&lt;T, OutSize, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"digest/core_api/trait.VariableOutputCore.html\" title=\"trait digest::core_api::VariableOutputCore\">VariableOutputCore</a>,\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;T::<a class=\"associatedtype\" href=\"digest/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type digest::OutputSizeUser::OutputSize\">OutputSize</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, T::<a class=\"associatedtype\" href=\"digest/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type digest::OutputSizeUser::OutputSize\">OutputSize</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,\n    T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"digest/core_api/trait.BlockSizeUser.html\" title=\"trait digest::core_api::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"digest/core_api/struct.CoreWrapper.html\" title=\"struct digest::core_api::CoreWrapper\">CoreWrapper</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> + <a class=\"trait\" href=\"digest/trait.HashMarker.html\" title=\"trait digest::HashMarker\">HashMarker</a>,\n    T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</span>"]],
"hmac":[["impl&lt;D&gt; <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"hmac/struct.HmacCore.html\" title=\"struct hmac::HmacCore\">HmacCore</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"digest/core_api/wrapper/trait.CoreProxy.html\" title=\"trait digest::core_api::wrapper::CoreProxy\">CoreProxy</a>,\n    D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a>: <a class=\"trait\" href=\"digest/digest/trait.HashMarker.html\" title=\"trait digest::digest::HashMarker\">HashMarker</a> + <a class=\"trait\" href=\"digest/core_api/trait.UpdateCore.html\" title=\"trait digest::core_api::UpdateCore\">UpdateCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.FixedOutputCore.html\" title=\"trait digest::core_api::FixedOutputCore\">FixedOutputCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a>&lt;BufferKind = <a class=\"struct\" href=\"block_buffer/struct.Eager.html\" title=\"struct block_buffer::Eager\">Eager</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a> as <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U256.html\" title=\"type typenum::generated::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;&lt;D::<a class=\"associatedtype\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a> as <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"crypto_common/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type crypto_common::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"typenum/generated/consts/type.U256.html\" title=\"type typenum::generated::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</span>"]],
"poly1305":[["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"poly1305/struct.Poly1305.html\" title=\"struct poly1305::Poly1305\">Poly1305</a>"]],
"salsa20":[["impl&lt;R: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"salsa20/struct.XSalsaCore.html\" title=\"struct salsa20::XSalsaCore\">XSalsaCore</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"salsa20/struct.SalsaCore.html\" title=\"struct salsa20::SalsaCore\">SalsaCore</a>&lt;R&gt;"]],
"sha1":[["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha1/struct.Sha1Core.html\" title=\"struct sha1::Sha1Core\">Sha1Core</a>"]],
"sha2":[["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha2/struct.Sha256VarCore.html\" title=\"struct sha2::Sha256VarCore\">Sha256VarCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha2/struct.Sha512VarCore.html\" title=\"struct sha2::Sha512VarCore\">Sha512VarCore</a>"]],
"sha3":[["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Shake128Core.html\" title=\"struct sha3::Shake128Core\">Shake128Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_256Core.html\" title=\"struct sha3::Sha3_256Core\">Sha3_256Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.TurboShake128Core.html\" title=\"struct sha3::TurboShake128Core\">TurboShake128Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak256FullCore.html\" title=\"struct sha3::Keccak256FullCore\">Keccak256FullCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.CShake256Core.html\" title=\"struct sha3::CShake256Core\">CShake256Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.CShake256ReaderCore.html\" title=\"struct sha3::CShake256ReaderCore\">CShake256ReaderCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak384Core.html\" title=\"struct sha3::Keccak384Core\">Keccak384Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.CShake128ReaderCore.html\" title=\"struct sha3::CShake128ReaderCore\">CShake128ReaderCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Shake256Core.html\" title=\"struct sha3::Shake256Core\">Shake256Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_224Core.html\" title=\"struct sha3::Sha3_224Core\">Sha3_224Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.TurboShake256ReaderCore.html\" title=\"struct sha3::TurboShake256ReaderCore\">TurboShake256ReaderCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak224Core.html\" title=\"struct sha3::Keccak224Core\">Keccak224Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_512Core.html\" title=\"struct sha3::Sha3_512Core\">Sha3_512Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_384Core.html\" title=\"struct sha3::Sha3_384Core\">Sha3_384Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.TurboShake128ReaderCore.html\" title=\"struct sha3::TurboShake128ReaderCore\">TurboShake128ReaderCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Shake256ReaderCore.html\" title=\"struct sha3::Shake256ReaderCore\">Shake256ReaderCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Shake128ReaderCore.html\" title=\"struct sha3::Shake128ReaderCore\">Shake128ReaderCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak256Core.html\" title=\"struct sha3::Keccak256Core\">Keccak256Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.Keccak512Core.html\" title=\"struct sha3::Keccak512Core\">Keccak512Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.CShake128Core.html\" title=\"struct sha3::CShake128Core\">CShake128Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.BlockSizeUser.html\" title=\"trait crypto_common::BlockSizeUser\">BlockSizeUser</a> for <a class=\"struct\" href=\"sha3/struct.TurboShake256Core.html\" title=\"struct sha3::TurboShake256Core\">TurboShake256Core</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()