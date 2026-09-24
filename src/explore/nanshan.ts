import {
  MARSH,
  TARNS,
  allLandforms,
  areaRelief,
  blackGorge,
  danStream,
  featureCuts,
  slopeDetail,
  tarnFloor,
  yingStream,
} from "./landforms";
import { sampleSculpt } from "./sculpt";

export const SEA_LEVEL = 0.55;
export const X_WEST = -180;
export const X_EAST = 1180;
export const Z_SOUTH = -280;
export const Z_NORTH = 220;
export const Z_HALF = 280;

export type Biome =
  | "cassia"
  | "yan"
  | "forbidden"
  | "barren"
  | "strange"
  | "jade"
  | "sand"
  | "sea"
  | "ore"
  | "foothill"
  | "shade"
  | "gorge"
  | "scree"
  | "quarry"
  | "crown"
  | "hollow"
  | "clearing"
  | "shelf";

export interface Mountain {
  id: string;
  name: string;
  x: number;
  z: number;
  peak: number;
  radius: number;
  biome: Biome;
  padX: number;
  padZ: number;
  quote: string;
  modern: string;
}

export const MOUNTAINS: Mountain[] = [
  {
    id: "zhaoyao",
    name: "招搖之山",
    x: 0,
    z: 40,
    peak: 78,
    radius: 150,
    biome: "cassia",
    padX: -62,
    padZ: 36,
    quote: "其首曰招搖之山，臨于西海之上，多桂，多金玉。",
    modern: "南山首山，西臨大海，桂樹林立。",
  },
  {
    id: "yuanyi",
    name: "猨翼之山",
    x: 260,
    z: 10,
    peak: 92,
    radius: 128,
    biome: "forbidden",
    padX: 308,
    padZ: 8,
    quote: "又東三百八十里，曰猨翼之山……多怪木，不可以上。",
    modern: "怪木怪蛇，山霧濃重，難以攀登。",
  },
  {
    id: "qingqiu",
    name: "青丘之山",
    x: 520,
    z: 40,
    peak: 70,
    radius: 155,
    biome: "jade",
    padX: 526,
    padZ: 12,
    quote: "又東三百里，曰青丘之山……有獸焉，其狀如狐而九尾。",
    modern: "青雘之陰，九尾狐與灌灌鳥。",
  },
  {
    id: "danxue",
    name: "丹穴之山",
    x: 780,
    z: -10,
    peak: 75,
    radius: 145,
    biome: "ore",
    padX: 780,
    padZ: 38,
    quote: "又東五百里，曰丹穴之山，其上多金玉。丹水出焉，而南流注于渤海。",
    modern: "金玉之山，丹水南注。",
  },
  {
    id: "ji-nanshan",
    name: "鷄山",
    x: 1020,
    z: 16,
    peak: 72,
    radius: 150,
    biome: "ore",
    padX: 1036,
    padZ: -78,
    quote: "又東五百里，曰鷄山，其上多金，其下多丹雘。黑水出焉，而南流注于海。",
    modern: "上金下丹雘，黑水南流。",
  },
];

export function mountainById(id: string): Mountain | undefined {
  return MOUNTAINS.find((m) => m.id === id);
}

function noise(x: number, z: number): number {
  return (
    Math.sin(x * 0.021 + z * 0.017) * 1.6 +
    Math.sin(x * 0.053 - z * 0.041) * 0.85 +
    Math.sin(x * 0.11 + z * 0.09) * 0.32 +
    Math.sin(x * 0.19 - z * 0.15) * 0.16
  );
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function landMask(x: number, z: number): number {
  const west = smoothstep(X_WEST + 8, X_WEST + 78, x);
  const east = 1 - smoothstep(X_EAST - 78, X_EAST - 8, x);
  const south = smoothstep(Z_SOUTH + 8, Z_SOUTH + 90, z);
  const north = 1 - smoothstep(Z_NORTH - 48, Z_NORTH - 6, z);
  return west * east * south * north;
}

export function heightNanshan(x: number, z: number): number {
  const mask = landMask(x, z);
  if (mask < 0.02) {
    return SEA_LEVEL - 1.7 + Math.sin(x * 0.08 + z * 0.05) * 0.12;
  }
  let h = 7.4 + noise(x, z) * 1.55 + slopeDetail(x, z);
  h += allLandforms(x, z);
  h += areaRelief(x, z);
  h -= featureCuts(x, z);
  h = tarnFloor(x, z, h);
  h += sampleSculpt(x, z);
  h = SEA_LEVEL - 1.4 + (h - (SEA_LEVEL - 1.4)) * mask;
  return Math.max(SEA_LEVEL - 2.4, h);
}

export function nearestMountain(x: number, z = 0): Mountain {
  let nearest = MOUNTAINS[0]!;
  let best = Infinity;
  for (const m of MOUNTAINS) {
    const d = Math.hypot(x - m.x, z - m.z);
    if (d < best) {
      best = d;
      nearest = m;
    }
  }
  return nearest;
}

export function biomeNanshan(x: number, z: number): Biome {
  const y = heightNanshan(x, z);
  if (y < SEA_LEVEL + 0.15) return "sea";
  for (const t of TARNS) {
    const d = Math.hypot(x - t.x, z - t.z);
    if (d < t.r * 0.92 && y < t.water + 0.85) return "sand";
  }
  if (blackGorge(x, z) > 3.6) return "gorge";
  if (danStream(x, z) > 2.0 || yingStream(x, z) > 1.6) return "sand";
  const m = nearestMountain(x, z);
  const lx = x - m.x;
  const lz = z - m.z;
  const d = Math.hypot(lx, lz);
  if (m.id === "zhaoyao") {
    if (x < m.x - 88) return "sand";
    if (Math.hypot(lx - 12, lz + 2) < 16) return "clearing";
    if (lx < -28) return "ore";
    if (d < m.radius * 0.92) return "cassia";
  }
  if (m.id === "yuanyi") {
    if (lx < -6) return "scree";
    if (lx > 18 && y < 38) return "shelf";
    if (d < m.radius * 0.95) return "forbidden";
  }
  if (m.id === "qingqiu" && d < m.radius * 1.05) {
    if (Math.hypot(x - MARSH.x, z - MARSH.z) < MARSH.r + 8) return "sand";
    if (Math.hypot(lx - 16, lz + 24) < 22) return "clearing";
    return lz > 6 ? "shade" : "jade";
  }
  if (m.id === "danxue") {
    const r = Math.hypot(lx / m.radius, lz / (m.radius * 0.92));
    if (r < 0.34) return "hollow";
    if (lz > 22) return "crown";
    if (d < m.radius * 0.95) return "ore";
  }
  if (m.id === "ji-nanshan") {
    if (Math.hypot(lx / 52, lz / 42) < 1.02) return "crown";
    if (lz < -18) return "quarry";
    if (d < m.radius * 0.92) return "ore";
  }
  if (d < m.radius * 0.92) return m.biome;
  return "foothill";
}
