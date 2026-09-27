import { MARSH, riverBedAt, riverCuts } from "./rivers";
import { CANON, type Biome, type CanonMountain } from "./canon";
import {
  areaRelief,
  shapeDanxue,
  shapeJishan,
  shapeQingqiu,
  shapeYuanyi,
  shapeZhaoyao,
  slopeDetail,
} from "./landforms";
import { sampleSculpt } from "./sculpt";
import { storyShapeById, storyTarnFloor } from "./storyLand";
import { STUB_HILLS } from "./stubs";

export type { Biome };
export const SEA_LEVEL = 0.55;
export const X_WEST = -3700;
export const X_EAST = 4400;
export const Z_SOUTH = -1650;
export const Z_NORTH = 900;
export const Z_HALF = 410;

export type Mountain = CanonMountain;

export const MOUNTAINS: Mountain[] = CANON;

export function mountainById(id: string): Mountain | undefined {
  return MOUNTAINS.find((m) => m.id === id);
}

let activeMountain: Mountain | null = null;

export function setActiveMountain(id: string | null): void {
  activeMountain = id ? mountainById(id) ?? null : null;
}

export function getActiveMountain(): Mountain | null {
  return activeMountain;
}

function shapeFor(id: string, x: number, z: number): number {
  if (id === "zhaoyao") return shapeZhaoyao(x, z);
  if (id === "yuanyi") return shapeYuanyi(x, z);
  if (id === "qingqiu") return shapeQingqiu(x, z);
  if (id === "danxue") return shapeDanxue(x, z);
  if (id === "ji-nanshan") return shapeJishan(x, z);
  const story = storyShapeById(id, x, z);
  if (story !== 0) return story;
  const m = mountainById(id);
  if (!m) return 0;
  const gx = (x - m.x) / (m.rx * 0.55);
  const gz = (z - m.z) / (m.rz * 0.55);
  return Math.exp(-(gx * gx + gz * gz)) * m.peak;
}

function stubShape(x: number, z: number): number {
  let h = 0;
  for (const s of STUB_HILLS) {
    const gx = (x - s.x) / 70;
    const gz = (z - s.z) / 56;
    const local = Math.exp(-(gx * gx + gz * gz)) * s.peak;
    if (local > h) h = local;
  }
  return h;
}

function noise(x: number, z: number): number {
  return (
    Math.sin(x * 0.021 + z * 0.017) * 1.6 +
    Math.sin(x * 0.053 - z * 0.041) * 0.85 +
    Math.sin(x * 0.11 + z * 0.09) * 0.32
  );
}

const NANSHAN_CHAIN = new Set(["zhaoyao", "yuanyi", "qingqiu", "danxue", "ji-nanshan"]);

export function heightNanshan(x: number, z: number): number {
  let h = SEA_LEVEL - 1.7 + Math.sin(x * 0.08 + z * 0.05) * 0.12;
  let hit = false;
  for (const m of MOUNTAINS) {
    const dx = x - m.x;
    const dz = z - m.z;
    const gx = dx / (m.rx * 1.45);
    const gz = dz / (m.rz * 1.45);
    const mask = Math.exp(-(gx * gx + gz * gz));
    if (mask < 0.015) continue;
    hit = true;
    let local = 7.4 + noise(x, z) * 1.55 + slopeDetail(x, z);
    local += shapeFor(m.id, x, z);
    if (NANSHAN_CHAIN.has(m.id)) local += areaRelief(x, z);
    local = storyTarnFloor(x, z, local);
    local += sampleSculpt(x, z);
    local = SEA_LEVEL - 1.4 + (local - (SEA_LEVEL - 1.4)) * mask;
    if (local > h) h = local;
  }
  const stub = stubShape(x, z);
  if (stub > 0.4) {
    hit = true;
    if (SEA_LEVEL - 1.2 + stub > h) h = SEA_LEVEL - 1.2 + stub;
  }
  if (!hit) return h;
  h -= riverCuts(x, z);
  if (z > 590 && x > 1400) {
    const t = Math.min(1, (z - 590) / 80);
    h = h * (1 - t) + (SEA_LEVEL - 0.4) * t;
  }
  return Math.max(SEA_LEVEL - 2.4, h);
}

export function nearestMountain(x: number, z = 0): Mountain {
  let nearest = MOUNTAINS[0]!;
  let best = Infinity;
  for (const m of MOUNTAINS) {
    const d = Math.hypot((x - m.x) / m.rx, (z - m.z) / m.rz);
    if (d < best) {
      best = d;
      nearest = m;
    }
  }
  return nearest;
}

export function biomeNanshan(x: number, z: number, y = heightNanshan(x, z)): Biome {
  if (y < SEA_LEVEL + 0.15) return "sea";
  const bed = riverBedAt(x, z);
  if (bed) {
    if (bed.id === "ji-hei" || bed.id === "kunlun-hei") return "gorge";
    if (bed.id === "dan" || bed.id === "kunlun-chi" || bed.id === "fengyuan" || bed.id === "wenyuan") return "quarry";
    if (bed.id === "ruo") return "shade";
    return "sand";
  }
  const m = nearestMountain(x, z);
  const lx = x - m.x;
  const lz = z - m.z;
  const d = Math.hypot(lx / m.rx, lz / m.rz);
  if (m.id === "zhaoyao") {
    if (x < -180) return "sand";
    if (lx < -28) return "ore";
    if (d < 1.05) return "cassia";
  }
  if (m.id === "yuanyi") {
    if (lx < -6) return "scree";
    if (d < 1.1) return "forbidden";
  }
  if (m.id === "qingqiu" && d < 1.15) {
    if (Math.hypot(x - MARSH.x, z - MARSH.z) < MARSH.r + 8) return "sand";
    return lz > 6 ? "jade" : "shade";
  }
  if (m.id === "danxue") {
    const r = Math.hypot(lx / m.rx, lz / m.rz);
    if (r < 0.34) return "hollow";
    if (d < 1.05) return "ore";
  }
  if (m.id === "ji-nanshan") {
    if (Math.hypot(lx / 52, lz / 42) < 1.02) return "crown";
    if (d < 1.05) return "ore";
  }
  if (d < 1.08) return m.biome;
  return "foothill";
}
