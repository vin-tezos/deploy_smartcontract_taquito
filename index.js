
import fs from "fs";
import { TezosToolkit, MichelsonMap  } from '@taquito/taquito';
import { InMemorySigner, importKey } from '@taquito/signer';
import contractCode from './code.js';

const Tezos = new TezosToolkit('https://florencenet.smartpy.io/');

function stringToHex(str) {

    //converting string into buffer
     let bufStr = Buffer.from(str, 'utf8');
  
    //with buffer, you can convert it into hex with following code
     return bufStr.toString('hex');
  
}

Tezos.setProvider({
    signer: new InMemorySigner('YOUR_PRIVATEKEY_HERE'),
  });

const empty_map = new MichelsonMap();
const token_metadata = new MichelsonMap();
const token_map = new MichelsonMap();
const contract_metadata = new MichelsonMap();

token_metadata.set(
        '0', {
            token_id : 0 ,
            token_info : MichelsonMap.fromLiteral({
            decimals: stringToHex("18"),
            icon: stringToHex("My Great Token"),
            name: stringToHex("MGT"),
            symbol: stringToHex("https://smartpy.io/static/img/logo-only.svg")
            })
        }
);

contract_metadata.set(
    '' , stringToHex("ipfs://QmaiAUj1FFNGYTu8rLBjc3eeN9cSKwaF8EGMBNDmhzPNFd")
);
    

Tezos.contract
  .originate({
    code: contractCode,
    // init: {
    //     "prim": "Pair",
    //     "args": [
    //       {
    //         "prim": "Pair",
    //         "args": [
    //           { "string": "tz1hdQscorfqMzFqYxnrApuS5i6QSTuoAp3w" },
    //           {
    //             "prim": "Pair",
    //             "args": [
    //               [],
    //               [
    //                 {
    //                   "prim": "Elt",
    //                   "args": [ { "string": "" }, { "bytes": "697066733a2f2f516d616941556a3146464e4759547538724c426a633365654e3963534b7761463845474d424e446d687a504e4664" } ]
    //                 }
    //               ]
    //             ]
    //           }
    //         ]
    //       },
    //       {
    //         "prim": "Pair",
    //         "args": [
    //           { "prim": "False" },
    //           {
    //             "prim": "Pair",
    //             "args": [
    //               [
    //                 {
    //                   "prim": "Elt",
    //                   "args": [
    //                     { "int": "0" },
    //                     {
    //                       "prim": "Pair",
    //                       "args": [
    //                         { "int": "0" },
    //                         [
    //                           { "prim": "Elt", "args": [ { "string": "decimals" }, { "bytes": "3138" } ] },
    //                           { "prim": "Elt", "args": [ { "string": "icon" }, { "bytes": "68747470733a2f2f736d61727470792e696f2f7374617469632f696d672f6c6f676f2d6f6e6c792e737667" } ] },
    //                           { "prim": "Elt", "args": [ { "string": "name" }, { "bytes": "4d7920477265617420546f6b656e" } ] },
    //                           { "prim": "Elt", "args": [ { "string": "symbol" }, { "bytes": "4d4754" } ] }
    //                         ]
    //                       ]
    //                     }
    //                   ]
    //                 }
    //               ],
    //               { "int": "0" }
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    //   },
    storage: {
        administrator: "tz1Up2c7eqzQbfyimqq6aa8dq3jZnsfXpDG5",
        balances: empty_map,
        metadata: contract_metadata,
        puased: false,
        token_metadata: token_metadata,
        totalSupply: 0
    }  
  })
  .then((originationOp) => {
    console.log(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);
    return originationOp.contract();
  })
  .then((contract) => {
    console.log(`Origination completed.`);
  })
  .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));