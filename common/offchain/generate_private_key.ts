import { Lucid, Crypto } from "https://deno.land/x/lucid/mod.ts";

const lucid = new Lucid(undefined, "Preview");

const privateKey = Crypto.generatePrivateKey();
await Deno.writeTextFile("key.sk", privateKey);
const address = await lucid
  .selectWalletFromPrivateKey(privateKey)
  .wallet.address();
await Deno.writeTextFile("key.addr", address);
