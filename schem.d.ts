import type { ShortTag, IntTag, StringTag, ByteArrayTag, IntArrayTag } from "nbtify";

export interface Schem {
  Width: ShortTag;
  Height: ShortTag;
  Length: ShortTag;
  BlockData: ByteArrayTag;
  BlockEntities: SchemBlockEntity[];
  DataVersion: IntTag;
  Metadata: SchemMetadata;
  Offset: IntArrayTag;
  Palette: SchemPalette;
  PaletteMax: IntTag;
  Version: IntTag;
}

export interface SchemBlockEntity {
  Id: StringTag;
  Pos: IntArrayTag;
}

export interface SchemMetadata {
  WEOffsetX: IntTag;
  WEOffsetY: IntTag;
  WEOffsetZ: IntTag;
}

export interface SchemPalette {
  [blockState: string]: IntTag;
}