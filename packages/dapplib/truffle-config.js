require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain minor good private flower that'; 
let testAccounts = [
"0x3c9f24d04450a2eaf72e4a59b322c64bf4ec3f622e5a14fa0f2c0c5fd8b7c316",
"0xc2e24abdadb32dd9aaddba5b687e0a18fdba6e97ff7f5147fd3d73004604b680",
"0xd88eb1224a3989acf4ca487d953c79f79959d1f28db0bdcfb09de3e7e8630e1e",
"0xb9a027702659e2930741de7463a072d845533fa3b7ba8f3a36594d8f19b6e8f6",
"0x1265bac53ffc7cb1484a5240bf1166072cffbfebc19f2425d9ba1f8f26594c2d",
"0xd7925d52b7bda3ef448b567e38d41ed3ae9b198a17cd0363e8f33060e7067a71",
"0x71779f1d18f466abf70e5ac70263f9ff2de0bdbc4597758fca1bb101d5aa7558",
"0xd895d0bb494b2db247d49225513f149bc19cd0d34e235fa3af0d9dcf8cdcf4f3",
"0xb9a9a09a7ecab4264f0c5dd43bbe0f282bd961e0c604727e4a76728ede019572",
"0x9908333c98cbf93ca0d01cd2258b43503b7c29d4efb19e100ac80b51a32674a3"
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
            version: '^0.5.11'
        }
    }
};
