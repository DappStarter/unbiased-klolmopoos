require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember horn hunt gloom forward three'; 
let testAccounts = [
"0x869ba498be12dd7e5b9b9f929c4428b2e420f52d1c08cf600617fd650bbe128d",
"0x8478c094ea1fba5d67836bea4131b8d5eb9a09c1bad985e354f4caa2a25ef491",
"0x73d765c81c994342a907c6e821900660f14c7b049629dfbcda61aa66751a5b87",
"0xc94953a1318bfb8cde932a5625af51e2358d012ee08b58346db4a90cd5a23b2f",
"0x41eab7c05fccdf5dd65b7e72a27e32ed4df7b7519e9fcdb8de8ecbb7ba189fcd",
"0xfb15475c51e35e104c7056aeaec39ecd90de5c1c0a8f7dae0e3bd42c0cef54c7",
"0x8b768d79f1092770a1306a2acb7d1cb8f55351dec8b2d0d30160b80031c07adf",
"0x77b71ae1e4c49bdc63eb5fa8a58d5da50fd826e66a94962286652d494681fc75",
"0x32990da33823bdc5c692131a1ea6b31ad99e7785952cc2d963713071c5089382",
"0x5cd9405de30df9541ad7d104af91f3b9cab610f9670a74d2006e2031fb81e24c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

