import { BufferAttribute, BufferGeometry, Color, Mesh, MeshLambertMaterial } from "three";
import { C } from "../style/palette";
import { SEA_LEVEL, type Biome } from "../explore/nanshan";

export type HeightSampler = (x: number, z: number) => number;
export type BiomeSampler = (x: number, z: number) => Biome | "island";

const TMP = new Color();
const SAND = new Color(C.sand);
const GOLD = new Color(C.gold);
const RIDGE = new Color(C.ridge);
const LACQUER = new Color(C.lacquer);
const PALE = new Color("#d8d0c4");
const SHADE = new Color("#1e4a40");
const GORGE = new Color("#2a221c");

function hash01(x: number, z: number): number {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

function colorAt(x: number, y: number, z: number, biomeAt?: BiomeSampler): Color {
  if (biomeAt) {
    const b = biomeAt(x, z);
    switch (b) {
      case "cassia":
        TMP.set(C.grass);
        if (x < 48) TMP.lerp(SAND, 0.45);
        if (y > 28) TMP.lerp(GOLD, 0.35);
        if (y > 48) TMP.lerp(RIDGE, 0.32);
        break;
      case "yan":
        TMP.set(C.ridge);
        break;
      case "sand":
        TMP.set(C.sand);
        break;
      case "jade":
        TMP.set(C.jade);
        if (y > 40) TMP.lerp(GOLD, 0.22);
        break;
      case "strange":
        TMP.set(C.moss);
        break;
      case "barren":
        TMP.set(C.rock);
        break;
      case "forbidden":
        TMP.set(C.shadow);
        if (x < 268) TMP.lerp(PALE, 0.55);
        if (y > 50) TMP.lerp(RIDGE, 0.35);
        break;
      case "ore":
        TMP.set(C.ridge);
        TMP.lerp(GOLD, 0.45 + hash01(x, z) * 0.2);
        if (y < 28) TMP.lerp(LACQUER, 0.28);
        if (y > 48) TMP.lerp(GOLD, 0.35);
        break;
      case "shade":
        TMP.set(C.jade);
        TMP.lerp(SHADE, 0.55);
        break;
      case "gorge":
        TMP.set(GORGE);
        TMP.lerp(LACQUER, 0.35);
        break;
      case "scree":
        TMP.set(PALE);
        TMP.lerp(SAND, 0.2);
        break;
      case "quarry":
        TMP.set(LACQUER);
        TMP.lerp(RIDGE, 0.4);
        break;
      case "crown":
        TMP.set(GOLD);
        TMP.lerp(RIDGE, 0.22);
        break;
      case "hollow":
        TMP.set(LACQUER);
        TMP.lerp(GORGE, 0.35);
        break;
      case "clearing":
        TMP.set(C.grass);
        TMP.lerp(SAND, 0.22);
        break;
      case "shelf":
        TMP.set(C.moss);
        TMP.lerp(PALE, 0.2);
        break;
      case "foothill":
        TMP.set(C.grass);
        TMP.lerp(SAND, 0.12);
        break;
      case "sea":
        TMP.set(C.sand);
        break;
      default:
        TMP.set(C.grass);
        break;
    }
  } else if (y < SEA_LEVEL + 0.45) {
    TMP.set(C.sand);
  } else if (y > 7.5) {
    TMP.set(C.ridge);
  } else {
    TMP.set(C.grass);
  }
  const n = (hash01(x, z) - 0.5) * 0.08;
  TMP.offsetHSL(0, 0, n);
  if (y > 10) TMP.lerp(GOLD, 0.18);
  return TMP;
}

function fillHeights(
  verts: Float32Array,
  colors: Float32Array,
  minX: number,
  maxX: number,
  minZ: number,
  maxZ: number,
  segX: number,
  segZ: number,
  sample: HeightSampler,
  biomeAt: BiomeSampler | undefined,
  jitter: number,
): void {
  const width = maxX - minX;
  const depth = maxZ - minZ;
  let i = 0;
  for (let iz = 0; iz <= segZ; iz += 1) {
    for (let ix = 0; ix <= segX; ix += 1) {
      const x = minX + (ix / segX) * width;
      const z = minZ + (iz / segZ) * depth;
      let y = sample(x, z);
      y += (hash01(x * 0.37, z * 0.41) - 0.5) * jitter;
      verts[i * 3] = x;
      verts[i * 3 + 1] = y;
      verts[i * 3 + 2] = z;
      const c = colorAt(x, y, z, biomeAt);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      i += 1;
    }
  }
}

export function buildHeightMesh(opts: {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  segX: number;
  segZ: number;
  sample: HeightSampler;
  receiveShadow?: boolean;
  biomeAt?: BiomeSampler;
  jitter?: number;
}): Mesh {
  const { minX, maxX, minZ, maxZ, segX, segZ, sample } = opts;
  const jitter = opts.jitter ?? 0.12;
  const geo = new BufferGeometry();
  const count = (segX + 1) * (segZ + 1);
  const verts = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  fillHeights(verts, colors, minX, maxX, minZ, maxZ, segX, segZ, sample, opts.biomeAt, jitter);
  const idx: number[] = [];
  const row = segX + 1;
  for (let iz = 0; iz < segZ; iz += 1) {
    for (let ix = 0; ix < segX; ix += 1) {
      const a = iz * row + ix;
      const b = a + 1;
      const c = a + row;
      const d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  geo.setAttribute("position", new BufferAttribute(verts, 3));
  geo.setAttribute("color", new BufferAttribute(colors, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();

  const mat = new MeshLambertMaterial({
    color: 0xffffff,
    vertexColors: true,
    flatShading: true,
  });
  const mesh = new Mesh(geo, mat);
  mesh.receiveShadow = opts.receiveShadow ?? true;
  mesh.castShadow = false;
  mesh.frustumCulled = false;
  mesh.name = "terrain";
  mesh.userData.jitter = jitter;
  mesh.userData.biomeAt = opts.biomeAt;
  mesh.userData.minX = minX;
  mesh.userData.maxX = maxX;
  mesh.userData.minZ = minZ;
  mesh.userData.maxZ = maxZ;
  mesh.userData.segX = segX;
  mesh.userData.segZ = segZ;
  return mesh;
}

/** Interpolate Y on the same triangle the camera sees (includes baked jitter). */
export function surfaceY(mesh: Mesh, x: number, z: number, fallback: number): number {
  return surfaceAt(mesh, x, z, fallback).y;
}

export function surfaceAt(
  mesh: Mesh,
  x: number,
  z: number,
  fallback: number,
): { y: number; ny: number } {
  const minX = mesh.userData.minX as number | undefined;
  const maxX = mesh.userData.maxX as number | undefined;
  const minZ = mesh.userData.minZ as number | undefined;
  const maxZ = mesh.userData.maxZ as number | undefined;
  const segX = mesh.userData.segX as number | undefined;
  const segZ = mesh.userData.segZ as number | undefined;
  if (minX === undefined || maxX === undefined || minZ === undefined || maxZ === undefined || !segX || !segZ) {
    return { y: fallback, ny: 1 };
  }
  const width = maxX - minX;
  const depth = maxZ - minZ;
  if (width <= 0 || depth <= 0) return { y: fallback, ny: 1 };
  const fx = ((x - minX) / width) * segX;
  const fz = ((z - minZ) / depth) * segZ;
  const ix = Math.max(0, Math.min(segX - 1, Math.floor(fx)));
  const iz = Math.max(0, Math.min(segZ - 1, Math.floor(fz)));
  const u = fx - ix;
  const v = fz - iz;
  const pos = mesh.geometry.getAttribute("position");
  const row = segX + 1;
  const a = iz * row + ix;
  const b = a + 1;
  const c = a + row;
  const d = c + 1;
  const yAt = (i: number) => pos.getY(i);
  let y0: number;
  let y1: number;
  let y2: number;
  let x0: number;
  let z0: number;
  let x1: number;
  let z1: number;
  let x2: number;
  let z2: number;
  if (u + v < 1) {
    y0 = yAt(a);
    y1 = yAt(c);
    y2 = yAt(b);
    x0 = pos.getX(a);
    z0 = pos.getZ(a);
    x1 = pos.getX(c);
    z1 = pos.getZ(c);
    x2 = pos.getX(b);
    z2 = pos.getZ(b);
  } else {
    y0 = yAt(b);
    y1 = yAt(c);
    y2 = yAt(d);
    x0 = pos.getX(b);
    z0 = pos.getZ(b);
    x1 = pos.getX(c);
    z1 = pos.getZ(c);
    x2 = pos.getX(d);
    z2 = pos.getZ(d);
  }
  const det = (z1 - z2) * (x0 - x2) + (x2 - x1) * (z0 - z2);
  if (Math.abs(det) < 1e-8) return { y: fallback, ny: 1 };
  const w0 = ((z1 - z2) * (x - x2) + (x2 - x1) * (z - z2)) / det;
  const w1 = ((z2 - z0) * (x - x2) + (x0 - x2) * (z - z2)) / det;
  const w2 = 1 - w0 - w1;
  const yy = w0 * y0 + w1 * y1 + w2 * y2;
  const e1x = x1 - x0;
  const e1y = y1 - y0;
  const e1z = z1 - z0;
  const e2x = x2 - x0;
  const e2y = y2 - y0;
  const e2z = z2 - z0;
  const nx = e1y * e2z - e1z * e2y;
  const ny = e1z * e2x - e1x * e2z;
  const nz = e1x * e2y - e1y * e2x;
  const len = Math.hypot(nx, ny, nz) || 1;
  return { y: yy, ny: ny / len };
}

export function rebuildHeightAttribute(
  mesh: Mesh,
  minX: number,
  maxX: number,
  minZ: number,
  maxZ: number,
  segX: number,
  segZ: number,
  sample: HeightSampler,
): void {
  const pos = mesh.geometry.getAttribute("position");
  let col = mesh.geometry.getAttribute("color");
  if (!col) {
    col = new BufferAttribute(new Float32Array(pos.count * 3), 3);
    mesh.geometry.setAttribute("color", col);
  }
  const verts = pos.array as Float32Array;
  const colors = col.array as Float32Array;
  const jitter = (mesh.userData.jitter as number) ?? 0.12;
  const biomeAt = mesh.userData.biomeAt as BiomeSampler | undefined;
  fillHeights(verts, colors, minX, maxX, minZ, maxZ, segX, segZ, sample, biomeAt, jitter);
  pos.needsUpdate = true;
  col.needsUpdate = true;
  mesh.geometry.computeVertexNormals();
}
