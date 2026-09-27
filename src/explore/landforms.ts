import { MARSH as RIVER_MARSH } from "./rivers";

const ZHAO = { x: 0, z: 40, peak: 78 };
const YUAN = { x: 520, z: 20, peak: 92 };
const QING = { x: 1040, z: 40, peak: 70, radius: 430 };
const DAN = { x: 1560, z: -10, peak: 75, radius: 400 };
const JI = { x: 2080, z: 16, peak: 72 };

/** Marsh south of 青丘 (+Z). */
export const MARSH = RIVER_MARSH;

export const TARNS = [MARSH] as const;

function gauss(x: number, z: number, rx: number, rz: number): number {
  const gx = x / rx;
  const gz = z / rz;
  return Math.exp(-(gx * gx + gz * gz));
}

function hump(lx: number, lz: number, ox: number, oz: number, rx: number, rz: number, h: number): number {
  return gauss(lx - ox, lz - oz, rx, rz) * h;
}

function terrace(h: number, start: number, step: number, flat = 0.2): number {
  if (h < start) return h;
  const t = Math.floor((h - start) / step) * step + start;
  return t + (h - t) * flat;
}

/** 招搖: west sea cliffs, 桂台, north/south groves, east spur. */
export function shapeZhaoyao(x: number, z: number): number {
  const lx = x - ZHAO.x;
  const lz = z - ZHAO.z;
  const rx = lx < -8 ? 180 : 310;
  let h = gauss(lx, lz, rx, 240) * ZHAO.peak;
  h += hump(lx, lz, 90, -80, 90, 70, 28);
  h += hump(lx, lz, 40, 90, 80, 64, 26);
  h += hump(lx, lz, 70, 20, 56, 48, 18);
  h += hump(lx, lz, -70, 30, 70, 50, 16);
  h += hump(lx, lz, 20, 8, 48, 40, 14);
  h = terrace(h, 16, 5.5, 0.16);
  if (lx > -88 && lx < -36 && h > 18) h = 26 + (h - 26) * 0.14;
  if (lx < -130) h *= 0.38;
  return h;
}

/** 猨翼: blade ridge + north/south knuckles, mist corridor. */
export function shapeYuanyi(x: number, z: number): number {
  const lx = x - YUAN.x;
  const lz = z - YUAN.z;
  const rx = lx < 0 ? 36 : 90;
  let h = gauss(lx, lz, rx, 280) * YUAN.peak;
  const r = Math.hypot(lx / 42, lz / 70);
  if (r < 1) h += (1 - r) * (1 - r) * 22;
  h += hump(lx, lz, 40, -110, 60, 70, 36);
  h += hump(lx, lz, 36, 110, 56, 64, 32);
  h += hump(lx, lz, 80, 8, 48, 40, 16);
  h += hump(lx, lz, -70, 0, 50, 44, 14);
  return h;
}

/** 青丘: split hill, west jade, east shade, south meadow + marsh. */
export function shapeQingqiu(x: number, z: number): number {
  const lx = x - QING.x;
  const lz = z - QING.z;
  const rz = lz > 0 ? 280 : 180;
  let h = gauss(lx, lz, 240, rz) * QING.peak;
  h += hump(lx, lz, -90, 18, 80, 64, 28);
  h += hump(lx, lz, 90, 52, 76, 60, 26);
  h += hump(lx, lz, 36, 110, 70, 50, 16);
  h += hump(lx, lz, -20, -80, 64, 48, 14);
  if (lz > 4) h = terrace(h, 12, 5, 0.16);
  if (lz > 70) h *= 0.42;
  return h;
}

export function marshCut(x: number, z: number): number {
  const d = Math.hypot(x - MARSH.x, z - MARSH.z) / MARSH.r;
  if (d >= 1) return 0;
  const bowl = (1 - d * d) * (1 - d * d);
  return 18 * bowl;
}

/** 丹穴: broken caldera + south cape toward 祝融. */
export function shapeDanxue(x: number, z: number): number {
  const lx = x - DAN.x;
  const lz = z - DAN.z;
  const r = Math.hypot(lx / DAN.radius, lz / (DAN.radius * 0.92));
  const rim = Math.exp(-((r - 0.52) * (r - 0.52)) / 0.07) * DAN.peak;
  const cone = Math.exp(-r * r * 2.4) * 22;
  const hollow = Math.exp(-r * r * 7.5) * 36;
  let h = Math.max(0, rim + cone - hollow);
  h += hump(lx, lz, 80, 90, 70, 56, 28);
  h += hump(lx, lz, -90, 40, 64, 52, 22);
  h += hump(lx, lz, 18, 120, 80, 60, 26);
  h += hump(lx, lz, 0, -90, 70, 50, 18);
  return h;
}

/** 鷄山: gold crown + west 雘 + east fusang view. */
export function shapeJishan(x: number, z: number): number {
  const lx = x - JI.x;
  const lz = z - JI.z;
  let h = gauss(lx, lz, 300, 240) * 46;
  const crown = Math.hypot(lx / 90, lz / 72);
  if (crown < 1) h = 58 + (1 - crown) * 3.5;
  else if (crown < 1.18) h = Math.max(h, 58 - (crown - 1) * 48);
  h += hump(lx, lz, -110, 20, 90, 70, 30);
  h += hump(lx, lz, 100, -50, 80, 64, 22);
  h += hump(lx, lz, 20, 110, 76, 60, 20);
  h += hump(lx, lz, -40, -90, 70, 50, 16);
  return h;
}

/** 丹水 / 黑水 南流 = +Z. */
export function southStream(x: number, z: number, mx: number, mz: number, width: number, depth: number): number {
  if (z < mz - 10) return 0;
  const along = z - mz;
  const w = width + along * 0.04;
  const dx = x - mx;
  return depth * Math.exp(-(dx * dx) / (2 * w * w)) * Math.min(1, along / 28);
}

export function blackGorge(x: number, z: number): number {
  return southStream(x, z, JI.x - 8, JI.z + 8, 8.2, 16);
}

export function danStream(x: number, z: number): number {
  return southStream(x, z, DAN.x, DAN.z + 8, 12, 10);
}

export function yingStream(x: number, z: number): number {
  return southStream(x, z, QING.x - 4, QING.z + 16, 11, 6.5);
}

export function featureCuts(_x: number, _z: number): number {
  return 0;
}

export function allLandforms(x: number, z: number): number {
  return (
    shapeZhaoyao(x, z) +
    shapeYuanyi(x, z) +
    shapeQingqiu(x, z) +
    shapeDanxue(x, z) +
    shapeJishan(x, z)
  );
}

export function slopeDetail(x: number, z: number): number {
  const ridges =
    Math.abs(Math.sin(x * 0.062 + z * 0.018)) * 1.7 +
    Math.abs(Math.cos(x * 0.029 - z * 0.071)) * 1.3;
  const bumps =
    Math.sin(x * 0.14 + z * 0.11) * 0.85 +
    Math.sin(x * 0.21 - z * 0.16) * 0.42 +
    Math.sin(x * 0.33 + z * 0.27) * 0.22;
  return ridges + bumps;
}

export function tarnFloor(x: number, z: number, h: number): number {
  let out = h;
  for (const t of TARNS) {
    const d = Math.hypot(x - t.x, z - t.z) / t.r;
    if (d >= 1) continue;
    const floor = t.floor + d * d * (t.r > 30 ? 6.5 : 4.2);
    out = Math.min(out, floor);
  }
  return out;
}

export function areaRelief(x: number, z: number): number {
  const zhao = x - ZHAO.x;
  const zhaoz = z - ZHAO.z;
  let extra = 0;
  if (zhao < -36 && zhao > -88) extra += Math.sin(zhaoz * 0.22) * 0.55;
  extra += gauss(x - YUAN.x + 10, z - YUAN.z, 28, 70) * Math.sin((z - YUAN.z) * 0.18) * 2.4;
  if (z > QING.z + 8 && z < QING.z + 90) extra += Math.sin(x * 0.12) * 0.7;
  if (z > QING.z + 16) extra -= gauss(x - QING.x, z - QING.z - 70, 40, 28) * 4.5;
  const dr = Math.hypot((x - DAN.x) / DAN.radius, (z - DAN.z) / (DAN.radius * 0.92));
  if (dr > 0.38 && dr < 0.62) extra += Math.sin(Math.atan2(z - DAN.z, x - DAN.x) * 6) * 1.4;
  if (z > JI.z + 18 && Math.abs(x - JI.x) < 90) extra += terrace(gauss(x - JI.x, z - JI.z - 50, 50, 36) * 10, 2, 2.2, 0.12);
  return extra;
}
