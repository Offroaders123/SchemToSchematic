// npx tsx --watch ./demo.ts

import { readFile } from "node:fs/promises";
import schemtoschematic from "./schemtoschematic.js";

const DEMO = new URL("./small-lobby.schem",import.meta.url);

const buffer: Buffer = await readFile(DEMO);
console.log(buffer);

console.log(schemtoschematic,"\n");

const schematic: Uint8Array = await new Promise(resolve => schemtoschematic(buffer,resolve));
console.log("\n",schematic);