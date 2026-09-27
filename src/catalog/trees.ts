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
      { kind: "gui", count: 48, radius: 70, xCenter: -40, zCenter: -4 },
      { kind: "gui", count: 28, radius: 50, xCenter: 40, zCenter: 90 },
      { kind: "gui", count: 28, radius: 50, xCenter: 30, zCenter: -80 },
    ],
    specimens: [
      { kind: "sang", overlay: { glowSiZhao: true }, x: 70, z: 20, yaw: 0.4 },
      { kind: "sang", overlay: { glowSiZhao: true }, x: 76, z: 16, yaw: 1.1 },
      { kind: "sang", overlay: { glowSiZhao: true }, x: 64, z: 24, yaw: 2.0 },
      { kind: "sang", overlay: { glowSiZhao: true }, x: 72, z: 28, yaw: 2.6 },
      { kind: "sang", overlay: { glowSiZhao: true }, x: 68, z: 12, yaw: 3.2 },
    ],
    zhuyu: { count: 12, minX: -58, spanX: 16, minZ: 4, spanZ: 16 },
  },
  {
    mountainId: "yuanyi",
    scatter: [
      { kind: "sang", overlay: { strange: true }, count: 16, radius: 40, xCenter: 44, zCenter: -110 },
      { kind: "sang", overlay: { strange: true }, count: 16, radius: 40, xCenter: 50, zCenter: 110 },
    ],
  },
  {
    mountainId: "qingqiu",
    scatter: [{ kind: "bai", count: 8, radius: 30, xCenter: 36, zCenter: 110 }],
  },
  {
    mountainId: "danxue",
    scatter: [{ kind: "tan", count: 6, radius: 24, xCenter: 80, zCenter: 40 }],
  },
  {
    mountainId: "ji-nanshan",
    scatter: [{ kind: "song", count: 8, radius: 30, xCenter: 100, zCenter: -50 }],
  },
  {
    mountainId: "fajiu",
    scatter: [{ kind: "sang", count: 36, radius: 80, xCenter: 0, zCenter: 0 }],
  },
  { mountainId: "jingwei", scatter: [] },
  { mountainId: "zhurong", scatter: [] },
  { mountainId: "hundun", scatter: [] },
  {
    mountainId: "court",
    scatter: [],
    specimens: [
      { kind: "sang", x: 0, z: 30, yaw: 0.2 },
      { kind: "sang", x: -16, z: 32, yaw: 1.1 },
      { kind: "sang", x: 16, z: 32, yaw: 2.0 },
    ],
  },
  {
    mountainId: "buzhou",
    scatter: [{ kind: "tao", count: 8, radius: 22, xCenter: 40, zCenter: 50 }],
  },
  {
    mountainId: "kiln",
    scatter: [{ kind: "tan", count: 6, radius: 12, xCenter: -18, zCenter: 10 }],
  },
  {
    mountainId: "xiayi",
    scatter: [{ kind: "liu", count: 12, radius: 28, xCenter: 8, zCenter: -6 }],
  },
  {
    mountainId: "kunlun-qiu",
    scatter: [
      { kind: "tao", count: 22, radius: 45, xCenter: -8, zCenter: 50 },
      { kind: "tao", count: 22, radius: 40, xCenter: 22, zCenter: -40 },
    ],
  },
  {
    mountainId: "kunlun-xu",
    scatter: [{ kind: "bai", count: 10, radius: 24, xCenter: -24, zCenter: -50 }],
    specimens: [
      { kind: "yan", overlay: { lacquer: true }, x: -14, z: -60, yaw: 0.3 },
      { kind: "yan", overlay: { lacquer: true }, x: -20, z: -65, yaw: 1.1 },
      { kind: "yan", overlay: { glowSiZhao: true }, x: 10, z: -68, yaw: 2.0 },
      { kind: "sang", overlay: { strange: true }, x: -8, z: -75, yaw: 0.8 },
      { kind: "sang", overlay: { strange: true }, x: -10, z: -60, yaw: 1.6 },
      { kind: "bai", x: 12, z: 90, yaw: 0.2 },
      { kind: "bai", x: -12, z: 90, yaw: 1.1 },
      { kind: "yan", x: 0, z: 102, yaw: 2.0 },
      { kind: "yan", x: 0, z: 78, yaw: 2.8 },
    ],
  },
  { mountainId: "yushan", scatter: [] },
  { mountainId: "changyang", scatter: [] },
  {
    mountainId: "kuafu",
    scatter: [
      { kind: "tao", count: 40, radius: 70, xCenter: 62, zCenter: -42 },
      { kind: "tao", count: 20, radius: 40, xCenter: 380, zCenter: -340 },
    ],
  },
  {
    mountainId: "heichi",
    scatter: [{ kind: "yan", count: 4, radius: 12, xCenter: 16, zCenter: -24 }],
  },
  { mountainId: "tanggu", scatter: [] },
  { mountainId: "ganyuan", scatter: [] },
  {
    mountainId: "liubo",
    scatter: [{ kind: "sang", overlay: { strange: true }, count: 6, radius: 20, xCenter: -12, zCenter: 8 }],
  },
];
