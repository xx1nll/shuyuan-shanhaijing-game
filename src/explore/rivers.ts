export type RiverKind = "line" | "disk" | "sheet";

export interface River {
  id: string;
  name: string;
  kind: RiverKind;
  color: string;
  width: number;
  depth: number;
  points: [number, number][];
  /** disk / sheet */
  r?: number;
  sheetW?: number;
  sheetD?: number;
}

export const RIVERS: River[] = [
  {
    id: "liji",
    name: "麗𪊨之水",
    kind: "line",
    color: "#6a8aaa",
    width: 12,
    depth: 8,
    points: [
      [20, 60],
      [-40, 48],
      [-100, 40],
      [-180, 36],
    ],
  },
  {
    id: "ying",
    name: "英水",
    kind: "line",
    color: "#5a7a6a",
    width: 11,
    depth: 6.5,
    points: [
      [1036, 56],
      [1048, 132],
    ],
  },
  {
    id: "jiyi",
    name: "即翼之澤",
    kind: "disk",
    color: "#4a6a58",
    width: 48,
    depth: 6,
    points: [[1048, 132]],
    r: 48,
  },
  {
    id: "dan",
    name: "丹水",
    kind: "line",
    color: "#6a2018",
    width: 12,
    depth: 10,
    points: [
      [1560, -2],
      [1560, 200],
      [1560, 280],
    ],
  },
  {
    id: "ji-hei",
    name: "鷄山黑水",
    kind: "line",
    color: "#1a1410",
    width: 14,
    depth: 16,
    points: [
      [2072, 24],
      [2072, 80],
      [2092, 156],
      [2100, 240],
    ],
  },
  {
    id: "zhang",
    name: "漳水",
    kind: "line",
    color: "#4a6a7a",
    width: 8,
    depth: 6,
    points: [
      [420, -980],
      [620, -980],
      [720, -980],
    ],
  },
  {
    id: "he",
    name: "河",
    kind: "disk",
    color: "#5a7a8a",
    width: 24,
    depth: 8,
    points: [[320, -720]],
    r: 24,
  },
  {
    id: "wei",
    name: "渭",
    kind: "disk",
    color: "#5a7a8a",
    width: 22,
    depth: 8,
    points: [[620, -980]],
    r: 22,
  },
  {
    id: "daze",
    name: "大澤",
    kind: "disk",
    color: "#3a5a6a",
    width: 40,
    depth: 6,
    points: [[500, -1320]],
    r: 40,
  },
  {
    id: "fengyuan",
    name: "封淵",
    kind: "disk",
    color: "#7a2418",
    width: 18,
    depth: 8,
    points: [[-1720, -300]],
    r: 18,
  },
  {
    id: "shenyuan",
    name: "沈淵",
    kind: "disk",
    color: "#3a4a58",
    width: 14,
    depth: 7,
    points: [[-1780, -340]],
    r: 14,
  },
  {
    id: "youze",
    name: "泑澤",
    kind: "disk",
    color: "#4a6a78",
    width: 22,
    depth: 8,
    points: [[-1600, 36]],
    r: 22,
  },
  {
    id: "hanshu",
    name: "寒暑之水",
    kind: "line",
    color: "#5a7080",
    width: 8,
    depth: 6,
    points: [
      [-1700, 20],
      [-1660, 20],
    ],
  },
  {
    id: "yinshui",
    name: "淫水殘",
    kind: "disk",
    color: "#6a6860",
    width: 16,
    depth: 5,
    points: [[-1440, 100]],
    r: 16,
  },
  {
    id: "xiayi-wa",
    name: "下邑窪水",
    kind: "disk",
    color: "#6a6458",
    width: 20,
    depth: 5,
    points: [[-1224, 280]],
    r: 20,
  },
  {
    id: "kunlun-he",
    name: "崑崙河水",
    kind: "line",
    color: "#c4b48a",
    width: 16,
    depth: 10,
    points: [
      [-2940, -240],
      [-2940, -80],
      [-2940, 80],
    ],
  },
  {
    id: "kunlun-chi",
    name: "崑崙赤水",
    kind: "line",
    color: "#7a2418",
    width: 16,
    depth: 10,
    points: [
      [-2940, 60],
      [-2800, 140],
      [-2600, 220],
    ],
  },
  {
    id: "kunlun-yang",
    name: "崑崙洋水",
    kind: "line",
    color: "#7aa0b0",
    width: 14,
    depth: 8,
    points: [
      [-3300, -240],
      [-3400, -120],
      [-3480, 20],
    ],
  },
  {
    id: "kunlun-hei",
    name: "崑崙黑水",
    kind: "line",
    color: "#0a0a0c",
    width: 22,
    depth: 14,
    points: [
      [-3300, -240],
      [-3420, -240],
      [-3560, -250],
    ],
  },
  {
    id: "ruo",
    name: "弱水",
    kind: "sheet",
    color: "#3a4a40",
    width: 40,
    depth: 4,
    points: [[-2990, -250]],
    sheetW: 40,
    sheetD: 80,
  },
  {
    id: "qing",
    name: "青水",
    kind: "line",
    color: "#3a6a58",
    width: 12,
    depth: 7,
    points: [
      [-2960, -240],
      [-2860, -280],
      [-2780, -340],
    ],
  },
  {
    id: "nanyuan",
    name: "南淵",
    kind: "disk",
    color: "#0c1418",
    width: 28,
    depth: 18,
    points: [[-2840, -310]],
    r: 28,
  },
  {
    id: "ganshui",
    name: "甘水",
    kind: "disk",
    color: "#7aa090",
    width: 6,
    depth: 4,
    points: [[-2830, -435]],
    r: 6,
  },
  {
    id: "biaochi",
    name: "表池",
    kind: "disk",
    color: "#4a6860",
    width: 12,
    depth: 5,
    points: [[-2840, -290]],
    r: 12,
  },
  {
    id: "yuanyi-tarn",
    name: "怪魚潭",
    kind: "disk",
    color: "#2a3830",
    width: 10,
    depth: 7,
    points: [[500, 60]],
    r: 10,
  },
  {
    id: "dan-pool",
    name: "丹池",
    kind: "disk",
    color: "#6a2018",
    width: 22,
    depth: 8,
    points: [[1560, 8]],
    r: 22,
  },
  {
    id: "wenyuan",
    name: "湯谷溫源",
    kind: "disk",
    color: "#8a5040",
    width: 40,
    depth: 3,
    points: [[3520, 4]],
    r: 40,
  },
];

function distToSeg(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const abx = bx - ax;
  const abz = bz - az;
  const t = Math.max(0, Math.min(1, ((px - ax) * abx + (pz - az) * abz) / (abx * abx + abz * abz || 1)));
  return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
}

function lineCut(x: number, z: number, river: River): number {
  const pts = river.points;
  let best = Infinity;
  for (let i = 0; i < pts.length - 1; i += 1) {
    const a = pts[i]!;
    const b = pts[i + 1]!;
    best = Math.min(best, distToSeg(x, z, a[0], a[1], b[0], b[1]));
  }
  if (best > river.width * 1.4) return 0;
  const w = river.width;
  return river.depth * Math.exp(-(best * best) / (2 * w * w));
}

function diskCut(x: number, z: number, river: River): number {
  const c = river.points[0];
  if (!c) return 0;
  const r = river.r ?? river.width;
  const d = Math.hypot(x - c[0], z - c[1]) / r;
  if (d >= 1) return 0;
  const bowl = (1 - d * d) * (1 - d * d);
  return river.depth * bowl;
}

function sheetCut(x: number, z: number, river: River): number {
  const c = river.points[0];
  if (!c) return 0;
  const hw = (river.sheetW ?? 40) * 0.5;
  const hd = (river.sheetD ?? 80) * 0.5;
  const dx = Math.abs(x - c[0]);
  const dz = Math.abs(z - c[1]);
  if (dx > hw || dz > hd) return 0;
  const tx = 1 - dx / hw;
  const tz = 1 - dz / hd;
  return river.depth * tx * tz;
}

/** Height subtracted from terrain. */
export function riverCuts(x: number, z: number): number {
  let cut = 0;
  for (const r of RIVERS) {
    if (r.kind === "line") cut = Math.max(cut, lineCut(x, z, r));
    else if (r.kind === "sheet") cut = Math.max(cut, sheetCut(x, z, r));
    else cut = Math.max(cut, diskCut(x, z, r));
  }
  return cut;
}

export function riverBedAt(x: number, z: number): River | undefined {
  let best: River | undefined;
  let score = 1.6;
  for (const r of RIVERS) {
    let s = 0;
    if (r.kind === "line") s = lineCut(x, z, r);
    else if (r.kind === "sheet") s = sheetCut(x, z, r);
    else s = diskCut(x, z, r);
    if (s > score) {
      score = s;
      best = r;
    }
  }
  return best;
}

export const MARSH = { x: 1048, z: 132, r: 48, floor: 3.4, water: 4.6 };
