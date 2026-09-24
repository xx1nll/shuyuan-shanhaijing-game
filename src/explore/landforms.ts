const ZHAO = { x: 0, z: 40, peak: 78 };
const YUAN = { x: 260, z: 10, peak: 92 };
const QING = { x: 520, z: 40, peak: 70, radius: 155 };
const DAN = { x: 780, z: -10, peak: 75, radius: 145 };
const JI = { x: 1020, z: 16, peak: 72 };

export const MARSH = { x: QING.x + 6, z: QING.z - 78, r: 44, floor: 3.4, water: 4.6 };

export const TARNS = [
  { id: "gui-pool", x: -48, z: 22, r: 13, floor: 20.6, water: 22.1 },
  MARSH,
  { id: "dan-pool", x: DAN.x, z: DAN.z - 2, r: 20, floor: 7.6, water: 9.2 },
] as const;

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

/** 招搖: west sea cliffs, 桂台, east spur + north knoll. */
export function shapeZhaoyao(x: number, z: number): number {
  const lx = x - ZHAO.x;
  const lz = z - ZHAO.z;
  const rx = lx < -8 ? 72 : 118;
  let h = gauss(lx, lz, rx, 96) * ZHAO.peak;
  h += hump(lx, lz, 58, -42, 46, 38, 34);
  h += hump(lx, lz, 22, 64, 32, 28, 24);
  h += hump(lx, lz, -8, -70, 36, 30, 18);
  h = terrace(h, 16, 5.5, 0.16);
  if (lx > -78 && lx < -36 && h > 18) h = 26 + (h - 26) * 0.14;
  if (lx < -96) h *= 0.38;
  return h;
}

/** 猨翼: blade ridge + north/south knuckles. */
export function shapeYuanyi(x: number, z: number): number {
  const lx = x - YUAN.x;
  const lz = z - YUAN.z;
  const rx = lx < 0 ? 18 : 42;
  let h = gauss(lx, lz, rx, 132) * YUAN.peak;
  const r = Math.hypot(lx / 22, lz / 36);
  if (r < 1) h += (1 - r) * (1 - r) * 22;
  h += hump(lx, lz, 18, -96, 28, 36, 36);
  h += hump(lx, lz, 14, 92, 26, 32, 32);
  h += hump(lx, lz, 36, 8, 22, 20, 16);
  return h;
}

/** 青丘: split hill, west jade spur, east shade knoll, south meadow. */
export function shapeQingqiu(x: number, z: number): number {
  const lx = x - QING.x;
  const lz = z - QING.z;
  const rz = lz < 0 ? 72 : 118;
  let h = gauss(lx, lz, 96, rz) * QING.peak;
  h += hump(lx, lz, -62, 18, 40, 36, 28);
  h += hump(lx, lz, 58, 52, 38, 34, 26);
  h += hump(lx, lz, 36, -28, 32, 24, 16);
  if (lz < -4) h = terrace(h, 12, 5, 0.16);
  if (lz < -52) h *= 0.42;
  return h;
}

export function marshCut(x: number, z: number): number {
  const d = Math.hypot(x - MARSH.x, z - MARSH.z) / MARSH.r;
  if (d >= 1) return 0;
  const bowl = (1 - d * d) * (1 - d * d);
  return 18 * bowl;
}

/** 丹穴: broken caldera + outer cinder cone. */
export function shapeDanxue(x: number, z: number): number {
  const lx = x - DAN.x;
  const lz = z - DAN.z;
  const r = Math.hypot(lx / DAN.radius, lz / (DAN.radius * 0.92));
  const rim = Math.exp(-((r - 0.52) * (r - 0.52)) / 0.07) * DAN.peak;
  const cone = Math.exp(-r * r * 2.4) * 22;
  const hollow = Math.exp(-r * r * 7.5) * 36;
  let h = Math.max(0, rim + cone - hollow);
  h += hump(lx, lz, 48, 38, 34, 30, 28);
  h += hump(lx, lz, -52, 22, 30, 28, 22);
  h += hump(lx, lz, 18, -88, 40, 34, 26);
  return h;
}

/** 鷄山: gold crown + west 雘 shoulder + east knoll. */
export function shapeJishan(x: number, z: number): number {
  const lx = x - JI.x;
  const lz = z - JI.z;
  let h = gauss(lx, lz, 132, 108) * 46;
  const crown = Math.hypot(lx / 52, lz / 42);
  if (crown < 1) h = 58 + (1 - crown) * 3.5;
  else if (crown < 1.18) h = Math.max(h, 58 - (crown - 1) * 48);
  h += hump(lx, lz, -68, 12, 44, 36, 30);
  h += hump(lx, lz, 58, -38, 36, 32, 22);
  h += hump(lx, lz, 12, 72, 34, 30, 20);
  return h;
}

export function southStream(x: number, z: number, mx: number, mz: number, width: number, depth: number): number {
  if (z > mz + 10) return 0;
  const along = mz - z;
  const w = width + along * 0.04;
  const dx = x - mx;
  return depth * Math.exp(-(dx * dx) / (2 * w * w)) * Math.min(1, along / 28);
}

export function blackGorge(x: number, z: number): number {
  return southStream(x, z, JI.x - 8, JI.z - 8, 6.2, 16);
}

export function danStream(x: number, z: number): number {
  return southStream(x, z, DAN.x, DAN.z + 4, 10, 10);
}

export function yingStream(x: number, z: number): number {
  return southStream(x, z, QING.x - 4, QING.z - 12, 9, 6.5);
}

export function featureCuts(x: number, z: number): number {
  return marshCut(x, z) + yingStream(x, z) + danStream(x, z) + blackGorge(x, z);
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

/** Small rolling slopes so skirts are not one plane. */
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

/** Extra shelves / ripples per named sub-area. */
export function areaRelief(x: number, z: number): number {
  const zhao = x - ZHAO.x;
  const zhaoz = z - ZHAO.z;
  let extra = 0;
  if (zhao < -36 && zhao > -88) extra += Math.sin(zhaoz * 0.22) * 0.55;
  extra += gauss(x - YUAN.x + 10, z - YUAN.z, 16, 40) * Math.sin((z - YUAN.z) * 0.18) * 2.4;
  if (z < QING.z - 8 && z > QING.z - 70) extra += Math.sin(x * 0.12) * 0.7;
  if (z > QING.z + 10) extra -= gauss(x - QING.x, z - QING.z - 48, 28, 22) * 4.5;
  const dr = Math.hypot((x - DAN.x) / DAN.radius, (z - DAN.z) / (DAN.radius * 0.92));
  if (dr > 0.38 && dr < 0.62) extra += Math.sin(Math.atan2(z - DAN.z, x - DAN.x) * 6) * 1.4;
  if (z < JI.z - 18 && Math.abs(x - JI.x) < 70) extra += terrace(gauss(x - JI.x, z - JI.z + 40, 40, 28) * 10, 2, 2.2, 0.12);
  return extra;
}
