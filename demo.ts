// npx tsx --watch ./demo.ts

import { readFile } from "node:fs/promises";
import { schemToSchematic } from "./schemToSchematic.js";

const DEMO = new URL("./small-lobby.schem",import.meta.url);

const buffer: Buffer = await readFile(DEMO);
console.log(buffer);

console.log(schemToSchematic,"\n");

const schematic: Uint8Array = Buffer.from((await schemToSchematic(buffer)).buffer);
console.log("\n",schematic);