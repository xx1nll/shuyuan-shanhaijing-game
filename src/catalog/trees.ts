import type { PlantId } from "./flora";

/** Reusable timber types — 「多桂」「多松」 grammar. */
export type TreeKind =
  | "gui"
  | "song"
  | "bai"
  | "zong"
  | "tan"
  | "sang"
  | "yan"
  | "tao"
  | "zi"
  | "liu"
  | "zhu"
  | "shan";

/** Explore-only extras on a 常木. 造島 always passes nothing. */
export interface TreeOverlay {
  glowSiZhao?: boolean;
  lacquer?: boolean;
  strange?: boolean;
}

export interface TreeKindRecord {
  id: TreeKind;
  name: string;
  analogue: string;
  floraId?: PlantId;
}

export const TREE_KINDS: Record<TreeKind, TreeKindRecord> = {
  gui: { id: "gui", name: "桂", analogue: "肉桂 Cinnamomum cassia", floraId: "gui" },
  song: { id: "song", name: "松", analogue: "馬尾松 Pinus massoniana" },
  bai: { id: "bai", name: "柏", analogue: "側柏 Platycladus orientalis" },
  zong: { id: "zong", name: "棕", analogue: "棕櫚 Trachycarpus fortunei" },
  tan: { id: "tan", name: "檀", analogue: "青檀 Pteroceltis tatarinowii" },
  sang: { id: "sang", name: "桑", analogue: "桑 / 構 Morus · Broussonetia" },
  yan: { id: "yan", name: "棪", analogue: "君遷子 Diospyros lotus", floraId: "yanmu" },
  tao: { id: "tao", name: "桃", analogue: "桃 Prunus persica" },
  zi: { id: "zi", name: "梓", analogue: "梓 Catalpa ovata" },
  liu: { id: "liu", name: "柳", analogue: "垂柳 Salix babylonica" },
  zhu: { id: "zhu", name: "竹", analogue: "毛竹 Phyllostachys edulis" },
  shan: { id: "shan", name: "杉", analogue: "杉木 Cunninghamia lanceolata" },
};

export const TREE_KIND_ORDER: TreeKind[] = [
  "gui",
  "song",
  "bai",
  "zong",
  "tan",
  "sang",
  "yan",
  "tao",
  "zi",
  "liu",
  "zhu",
  "shan",
];

export function floraIdForTree(kind: TreeKind, overlay?: TreeOverlay): PlantId | undefined {
  if (overlay?.glowSiZhao) return "migu";
  if (overlay?.lacquer) return "baigao";
  return TREE_KINDS[kind].floraId;
}

export interface CoverScatter {
  kind: TreeKind;
  overlay?: TreeOverlay;
  count: number;
  radius: number;
  /** Grove centre relative to the mountain peak. */
  xCenter?: number;
  zCenter?: number;
  zSpan?: number;
}

export interface CoverSpecimen {
  kind: TreeKind;
  overlay?: TreeOverlay;
  x: number;
  z: number;
  yaw?: number;
}

export interface CoverHerb {
  count: number;
  minX: number;
  spanX: number;
  minZ: number;
  spanZ: number;
}

export interface MountainCover {
  mountainId: string;
  scatter: CoverScatter[];
  specimens?: CoverSpecimen[];
  zhuyu?: CoverHerb;
}

export const MOUNTAIN_COVER: MountainCover[] = [
  {
    mountainId: "zhaoyao",
    scatter: [
      { kind: "gui", count: 22, radius: 28, xCenter: -22, zCenter: 20 },
      { kind: "gui", count: 18, radius: 24, xCenter: 38, zCenter: -10 },
    ],
    specimens: [
      { kind: "sang", overlay: { glowSiZhao: true }, x: 8, z: 4, yaw: 0.4 },
      { kind: "sang", overlay: { glowSiZhao: true }, x: 16, z: -6, yaw: 1.2 },
    ],
    zhuyu: { count: 28, minX: -72, spanX: 46, minZ: -18, spanZ: 40 },
  },
  {
    mountainId: "yuanyi",
    scatter: [
      { kind: "sang", overlay: { strange: true }, count: 12, radius: 18, xCenter: 44, zCenter: 46 },
      { kind: "sang", overlay: { strange: true }, count: 10, radius: 16, xCenter: 50, zCenter: -48 },
      { kind: "sang", overlay: { strange: true }, count: 8, radius: 14, xCenter: 38, zCenter: 6 },
    ],
  },
  {
    mountainId: "qingqiu",
    scatter: [],
  },
  {
    mountainId: "danxue",
    scatter: [],
  },
  {
    mountainId: "ji-nanshan",
    scatter: [],
  },
];
