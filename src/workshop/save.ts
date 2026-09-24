import type { CreatureRecipe } from "../catalog/recipes";

export type Brush = "raise" | "lower" | "smooth" | "flatten";
export type StampId =
  | "gui"
  | "song"
  | "bai"
  | "zong"
  | "tan"
  | "sang"
  | "yanmu"
  | "tao"
  | "zi"
  | "liu"
  | "zhu"
  | "shan"
  | "zhuyu"
  | "rock"
  | "shengsheng"
  | "baiyuan"
  | "lushu"
  | "jiweihu"
  | "chimera";

const LEGACY_STAMP: Record<string, StampId> = {
  migu: "sang",
  baigao: "sang",
  strange: "sang",
};

function migrateStamp(id: string): StampId {
  return LEGACY_STAMP[id] ?? (id as StampId);
}

export interface Placement {
  id: StampId;
  x: number;
  z: number;
  rot: number;
  scale: number;
  recipe?: CreatureRecipe;
}

export interface IslandSave {
  version: 1 | 2;
  res: number;
  size: number;
  heights: number[];
  grass: number[];
  placements: Placement[];
}

const KEY = "kunlun-island-v1";

export function loadIsland(): IslandSave | null {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as IslandSave;
    if (!data.placements) data.placements = [];
    data.placements = data.placements.map((p) => ({ ...p, id: migrateStamp(p.id) }));
    return data;
  } catch {
    return null;
  }
}

export function saveIsland(data: IslandSave): void {
  localStorage.setItem(KEY, JSON.stringify({ ...data, version: 2 }));
}

export function defaultIsland(res = 80, size = 72): IslandSave {
  const heights = new Array(res * res).fill(0);
  const grass = new Array(res * res).fill(0);
  const cx = (res - 1) / 2;
  for (let z = 0; z < res; z += 1) {
    for (let x = 0; x < res; x += 1) {
      const dx = (x - cx) / (res * 0.38);
      const dz = (z - cx) / (res * 0.38);
      const r = Math.sqrt(dx * dx + dz * dz);
      const dome = Math.max(0, 1 - r);
      heights[z * res + x] = dome * dome * 6.5;
      grass[z * res + x] = dome > 0.15 ? dome * 0.6 : 0;
    }
  }
  return { version: 2, res, size, heights, grass, placements: [] };
}
