import type { ByteTag, ShortTag, IntTag, StringTag, ByteArrayTag } from "nbtify";

export interface Schematic {
  Width: ShortTag;
  Height: ShortTag;
  Length: ShortTag;
  Materials: SchematicMaterial;
  Blocks: ByteArrayTag;
  AddBlocks?: ByteArrayTag;
  /** @deprecated */
  Add?: ByteArrayTag;
  Data: ByteArrayTag;
  Entities: SchematicEntity[];
  TileEntities: SchematicTileEntity[];
  Icon: SchematicItem;
  SchematicaMapping: SchematicMapping;
  ExtendedMetadata?: SchematicExtendedMetadata;
  WEOriginX: IntTag;
  WEOriginY: IntTag;
  WEOriginZ: IntTag;
  WEOffsetX: IntTag;
  WEOffsetY: IntTag;
  WEOffsetZ: IntTag;
  itemStackVersion?: ByteTag<SchematicItemStackVersion>;
  BlockIDs?: SchematicBlockIDs;
  ItemIDs?: SchematicItemIDs;
  TileTicks?: TileTick[];
  Biomes?: ByteArrayTag;
}

export type SchematicMaterial = "Classic" | "Pocket" | "Alpha";

export interface SchematicEntity {
  id: StringTag;
  // Other fields are common to the regular Java Edition entity format
}

export interface SchematicTileEntity {
  id: StringTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
  // Other fields are common to the regular Java Edition tile entity format
}

export interface SchematicItem {
  id: StringTag;
  // Other fields are common to the regular Java Edition item format
}

export interface SchematicMapping {
  [id: string]: ShortTag;
}

export interface SchematicExtendedMetadata {
  [property: string]: any;
}

export type SchematicItemStackVersion = 17 | 18;

export interface SchematicBlockIDs {
  [id: `${number}`]: StringTag;
}

export interface SchematicItemIDs {
  [id: `${number}`]: StringTag;
}

export interface TileTick {
  // Same as the Tile Tick format for Java Edition
  i: StringTag;
  p: IntTag;
  t: IntTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}