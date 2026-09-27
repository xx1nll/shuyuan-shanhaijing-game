/** Jing-scale pads. −Z is north, +Z south, −X west, +X east. */

export const SITE = {
  hundun: { x: -1080, z: 8 },
  buzhou: { x: -1680, z: 36 },
  court: { x: -1720, z: -340 },
  gongTai: { x: -1660, z: -150 },
  kiln: { x: -1440, z: 70 },
  xiaYi: { x: -1260, z: 260 },
  kunlunQiu: { x: -3120, z: -90 },
  kunlunXu: { x: -2840, z: -380 },
  yushan: { x: -2540, z: -660 },
  changyang: { x: -1880, z: 380 },
  kuafuStart: { x: 80, z: -560 },
  kuafuEnd: { x: 920, z: -1320 },
  jingwei: { x: 2240, z: 480 },
  zhurong: { x: 1560, z: 520 },
  yiCamp: { x: 3080, z: 48 },
  heichi: { x: 3200, z: 90 },
  moonTai: { x: 2980, z: -70 },
  fusang: { x: 3520, z: 4 },
  ganyuan: { x: 3780, z: 260 },
  liubo: { x: 3960, z: -420 },
  fajiu: { x: 420, z: -980 },
} as const;

export const STORY_TARNS = [
  { id: "hundun-floor", x: SITE.hundun.x, z: SITE.hundun.z, r: 28, floor: 6.2, water: 7.4 },
  { id: "he-pool", x: 320, z: -720, r: 24, floor: 4.2, water: 5.6 },
  { id: "wei-pool", x: 620, z: -980, r: 22, floor: 4.0, water: 5.4 },
  { id: "ganyuan", x: SITE.ganyuan.x, z: SITE.ganyuan.z, r: 32, floor: 3.8, water: 5.2 },
] as const;

function gauss(x: number, z: number, rx: number, rz: number): number {
  const gx = x / rx;
  const gz = z / rz;
  return Math.exp(-(gx * gx + gz * gz));
}

function hump(x: number, z: number, ox: number, oz: number, rx: number, rz: number, h: number): number {
  return gauss(x - ox, z - oz, rx, rz) * h;
}

function terrace(h: number, start: number, step: number, flat = 0.18): number {
  if (h < start) return h;
  const t = Math.floor((h - start) / step) * step + start;
  return t + (h - t) * flat;
}

function shapeHundun(x: number, z: number): number {
  const lx = x - SITE.hundun.x;
  const lz = z - SITE.hundun.z;
  const rim = gauss(lx, lz, 110, 96) * 58;
  const bowl = gauss(lx, lz, 48, 42) * 64;
  return Math.max(0, rim - bowl + 10 * gauss(lx, lz, 58, 50));
}

function shapeCourt(x: number, z: number): number {
  const lx = x - SITE.court.x;
  const lz = z - SITE.court.z;
  let h = gauss(lx, lz, 160, 120) * 52;
  h = terrace(h, 14, 5.5, 0.14);
  h += hump(lx, lz, 0, -40, 60, 40, 14);
  h += hump(lx, lz, -70, 10, 48, 36, 10);
  h += hump(lx, lz, 70, 10, 48, 36, 10);
  h += hump(lx, lz, 0, 18, 40, 28, 8);
  h += hump(lx, lz, 16, 36, 36, 30, 10);
  return h;
}

function shapeBuzhou(x: number, z: number): number {
  const lx = x - SITE.buzhou.x;
  const lz = z - SITE.buzhou.z;
  const rx = Math.hypot(lx / 42, lz / 52);
  let h = gauss(lx, lz, 42, 52) * 100;
  if (rx < 1) h += (1 - rx) * (1 - rx) * 18;
  h += hump(lx, lz, 70, 80, 90, 70, 28);
  h += hump(lx, lz, -50, -90, 64, 52, 22);
  h += hump(x, z, -1740, 20, 40, 28, 18);
  h += hump(x, z, -1620, 20, 36, 26, 16);
  h += hump(x, z, -1760, 10, 48, 36, 22);
  const spiral = Math.atan2(lz, lx);
  if (rx > 0.35 && rx < 1.15) h += Math.sin(spiral * 5 + rx * 8) * 2.2;
  const tilt = (lx * 0.02 - lz * 0.012) * gauss(lx, lz, 110, 96);
  if (lx < -10 && lz < -8) h -= 18;
  return Math.max(0, h + tilt);
}

function shapeKiln(x: number, z: number): number {
  const lx = x - SITE.kiln.x;
  const lz = z - SITE.kiln.z;
  let h = gauss(lx, lz, 140, 110) * 38;
  h = terrace(h, 10, 4.5, 0.16);
  h += hump(lx, lz, 28, 18, 48, 36, 12);
  h += hump(lx, lz, -40, -20, 40, 32, 8);
  return h;
}

function shapeXiaYi(x: number, z: number): number {
  const lx = x - SITE.xiaYi.x;
  const lz = z - SITE.xiaYi.z;
  return gauss(lx, lz, 160, 120) * 16 + hump(lx, lz, 36, 20, 56, 42, 6);
}

function shapeKunlunQiu(x: number, z: number): number {
  const lx = x - SITE.kunlunQiu.x;
  const lz = z - SITE.kunlunQiu.z;
  let h = gauss(lx, lz, 180, 150) * 130;
  h = terrace(h, 18, 8, 0.16);
  h += hump(lx, lz, 70, -40, 70, 55, 24);
  h += hump(lx, lz, -60, 50, 60, 48, 18);
  h += hump(lx, lz, 20, 80, 48, 40, 12);
  return h;
}

function shapeKunlunXu(x: number, z: number): number {
  const lx = x - SITE.kunlunXu.x;
  const lz = z - SITE.kunlunXu.z;
  let h = gauss(lx, lz, 150, 130) * 150;
  if (Math.abs(lx) < 70 && Math.abs(lz) < 70) h = Math.max(h, 96);
  if (lx > 12) h += (1 - Math.min(1, Math.abs(lz) / 55)) * 18;
  h = terrace(h, 24, 7, 0.14);
  h += hump(lx, lz, 40, 20, 50, 40, 14);
  return h;
}

function shapeYushan(x: number, z: number): number {
  const lx = x - SITE.yushan.x;
  const lz = z - SITE.yushan.z;
  let h = gauss(lx, lz, 120, 100) * 110;
  const r = Math.hypot(lx / 36, lz / 30);
  if (r < 1) h -= (1 - r) * (1 - r) * 22;
  h = terrace(h, 26, 6, 0.2);
  return Math.max(0, h);
}

function shapeChangyang(x: number, z: number): number {
  const lx = x - SITE.changyang.x;
  const lz = z - SITE.changyang.z;
  let h = gauss(lx, lz, 140, 110) * 48;
  h += hump(lx, lz, 0, 40, 50, 40, 12);
  return h;
}

function shapeKuafu(x: number, z: number): number {
  const along = (x - SITE.kuafuStart.x) / (SITE.kuafuEnd.x - SITE.kuafuStart.x);
  if (along < -0.06 || along > 1.08) return 0;
  const zMid = SITE.kuafuStart.z + along * (SITE.kuafuEnd.z - SITE.kuafuStart.z);
  const walls = gauss(0, z - zMid, 22, 80) * 28;
  const floor = gauss(x - (SITE.kuafuStart.x + SITE.kuafuEnd.x) * 0.5, z - zMid, 420, 48) * 8;
  return Math.max(walls, floor);
}

function shapeHeichi(x: number, z: number): number {
  const lx = x - SITE.heichi.x;
  const lz = z - SITE.heichi.z;
  let h = gauss(lx, lz, 200, 150) * 28;
  h = terrace(h, 8, 4, 0.2);
  h += hump(x, z, SITE.yiCamp.x, SITE.yiCamp.z, 90, 70, 14);
  h += hump(x, z, SITE.moonTai.x, SITE.moonTai.z, 60, 44, 18);
  return h;
}

function shapeFusangShoal(x: number, z: number): number {
  const lx = x - SITE.fusang.x;
  const lz = z - SITE.fusang.z;
  let h = gauss(lx, lz, 90, 70) * 8;
  if (lx < -16) h *= 0.78;
  h += gauss(lx - 40, lz, 28, 22) * 4;
  h += gauss(lx + 36, lz + 24, 22, 18) * 3.5;
  h += gauss(lx + 20, lz - 30, 20, 16) * 3.2;
  return h;
}

function shapeGanyuan(x: number, z: number): number {
  const lx = x - SITE.ganyuan.x;
  const lz = z - SITE.ganyuan.z;
  const rim = gauss(lx, lz, 100, 80) * 26;
  const bowl = gauss(lx, lz, 40, 34) * 28;
  return Math.max(0, rim - bowl + 6 * gauss(lx, lz, 50, 42));
}

function shapeLiubo(x: number, z: number): number {
  const lx = x - SITE.liubo.x;
  const lz = z - SITE.liubo.z;
  let h = gauss(lx, lz, 110, 90) * 62;
  h += hump(lx, lz, 36, 22, 48, 36, 16);
  h += hump(lx, lz, -30, -40, 40, 32, 12);
  return h;
}

function shapeJingwei(x: number, z: number): number {
  const h = gauss(x - SITE.jingwei.x, z - SITE.jingwei.z, 220, 90) * 10;
  return h + hump(x, z, SITE.jingwei.x + 90, SITE.jingwei.z + 10, 50, 28, 4);
}

function shapeZhurong(x: number, z: number): number {
  const lx = x - SITE.zhurong.x;
  const lz = z - SITE.zhurong.z;
  const r = Math.hypot(lx / 120, lz / 96);
  const rim = Math.exp(-((r - 0.5) * (r - 0.5)) / 0.08) * 52;
  const cone = Math.exp(-r * r * 2.2) * 22;
  const hollow = Math.exp(-r * r * 7) * 30;
  return Math.max(0, rim + cone - hollow);
}

function shapeFajiu(x: number, z: number): number {
  const lx = x - SITE.fajiu.x;
  const lz = z - SITE.fajiu.z;
  return gauss(lx, lz, 90, 70) * 36 + hump(x, z, SITE.fajiu.x + 18, SITE.fajiu.z - 12, 40, 32, 8);
}

function shapeStubHill(x: number, z: number, cx: number, cz: number, peak: number): number {
  return gauss(x - cx, z - cz, 70, 56) * peak;
}

export function storyShapeById(id: string, x: number, z: number): number {
  if (id === "hundun") return shapeHundun(x, z);
  if (id === "court") return shapeCourt(x, z);
  if (id === "buzhou") return shapeBuzhou(x, z);
  if (id === "kiln") return shapeKiln(x, z);
  if (id === "xiayi") return shapeXiaYi(x, z);
  if (id === "kunlun-qiu") return shapeKunlunQiu(x, z);
  if (id === "kunlun-xu") return shapeKunlunXu(x, z);
  if (id === "yushan") return shapeYushan(x, z);
  if (id === "changyang") return shapeChangyang(x, z);
  if (id === "kuafu") return shapeKuafu(x, z);
  if (id === "heichi") return shapeHeichi(x, z);
  if (id === "tanggu") return shapeFusangShoal(x, z);
  if (id === "ganyuan") return shapeGanyuan(x, z);
  if (id === "liubo") return shapeLiubo(x, z);
  if (id === "jingwei") return shapeJingwei(x, z);
  if (id === "zhurong") return shapeZhurong(x, z);
  if (id === "fajiu") return shapeFajiu(x, z);
  return 0;
}

export function storyLandforms(x: number, z: number): number {
  return (
    shapeHundun(x, z) +
    shapeCourt(x, z) +
    shapeBuzhou(x, z) +
    shapeKiln(x, z) +
    shapeXiaYi(x, z) +
    shapeKunlunQiu(x, z) +
    shapeKunlunXu(x, z) +
    shapeYushan(x, z) +
    shapeChangyang(x, z) +
    shapeKuafu(x, z) +
    shapeHeichi(x, z) +
    shapeFusangShoal(x, z) +
    shapeGanyuan(x, z) +
    shapeLiubo(x, z) +
    shapeJingwei(x, z) +
    shapeZhurong(x, z) +
    shapeFajiu(x, z) +
    shapeStubHill(x, z, -2360, -180, 28) +
    shapeStubHill(x, z, -2580, -520, 22) +
    shapeStubHill(x, z, 180, -1120, 26) +
    shapeStubHill(x, z, 640, -1220, 28) +
    shapeStubHill(x, z, 920, -1080, 27) +
    shapeStubHill(x, z, 2760, -920, 32) +
    shapeStubHill(x, z, 3020, -180, 26) +
    shapeStubHill(x, z, 380, 720, 34) +
    shapeStubHill(x, z, -180, -1420, 30) +
    shapeStubHill(x, z, -3040, -820, 36) +
    shapeStubHill(x, z, 520, -1480, 32)
  );
}

export function storyTarnFloor(x: number, z: number, h: number): number {
  let out = h;
  for (const t of STORY_TARNS) {
    const d = Math.hypot(x - t.x, z - t.z) / t.r;
    if (d >= 1) continue;
    const floor = t.floor + d * d * 5.5;
    out = Math.min(out, floor);
  }
  return out;
}
