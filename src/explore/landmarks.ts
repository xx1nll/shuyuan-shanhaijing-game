import { Group } from "three";
import { MARSH, TARNS } from "./landforms";
import { mountainById } from "./nanshan";
import { addFacet, box, flatMat, hexPrism, octahedron } from "../style/facets";
import { C } from "../style/palette";

export const NEST_ROCK = { x: 536, z: 16 };

const gold = () => flatMat(C.gold);
const jade = () => flatMat(C.jade);
const sand = () => flatMat(C.sand);
const lacquer = () => flatMat(C.lacquer);
const pale = () => flatMat("#e8e0d4");
const water = () => flatMat(C.sea, { transparent: true, opacity: 0.7, depthWrite: false });

function sit(ground: (x: number, z: number) => number, x: number, z: number, yOff = 0): number {
  return ground(x, z) + yOff;
}

function zhaoyaoLandmarks(root: Group, ground: (x: number, z: number) => number): void {
  const m = mountainById("zhaoyao")!;
  const g = new Group();
  g.name = "望海石";
  const ox = m.padX;
  const oz = m.padZ;
  const y = sit(ground, ox, oz);
  addFacet(g, hexPrism(2.4, 1.1, 6), sand(), ox, y, oz);
  addFacet(g, box(3.6, 4.8, 1.8), sand(), ox + 0.4, y + 1.05, oz - 0.2);
  addFacet(g, box(2.2, 1.6, 2.8), gold(), ox - 0.6, y + 5.7, oz);
  addFacet(g, octahedron(0.55), gold(), ox - 0.4, y + 7.5, oz + 0.3);
  const slabs: [number, number, number, number, number][] = [
    [-38, 48, 3.2, 0.55, 2.4],
    [-22, 52, 2.6, 0.42, 1.8],
    [-48, 28, 2.8, 0.5, 2.1],
    [-12, 44, 2.2, 0.38, 1.6],
    [-30, 22, 3.4, 0.48, 2.6],
  ];
  for (const [lx, lz, w, h, d] of slabs) {
    const sx = m.x + lx;
    const sz = m.z + lz;
    addFacet(g, box(w, h, d), gold(), sx, sit(ground, sx, sz), sz);
  }
  root.add(g);
}

function yuanyiLandmarks(root: Group, ground: (x: number, z: number) => number): void {
  const m = mountainById("yuanyi")!;
  const g = new Group();
  g.name = "白玉崩壁";
  const shards: [number, number, number, number, number][] = [
    [-28, 8, 2.8, 1.1, 1.6],
    [-36, -6, 3.4, 0.9, 2.2],
    [-22, 22, 2.2, 1.4, 1.3],
    [-42, 14, 2.6, 0.8, 1.8],
    [-31, -18, 3.1, 1.2, 1.5],
    [-48, 2, 2.4, 0.7, 2.0],
    [-18, 36, 1.8, 1.6, 1.1],
    [-26, -32, 2.9, 1.0, 1.7],
  ];
  for (const [lx, lz, w, h, d] of shards) {
    const sx = m.x + lx;
    const sz = m.z + lz;
    const mesh = addFacet(g, box(w, h, d), pale(), sx, sit(ground, sx, sz), sz);
    mesh.rotation.y = lx * 0.08;
    mesh.rotation.z = 0.18;
  }
  for (let i = -5; i <= 5; i += 1) {
    const sx = m.x + 8;
    const sz = m.z + i * 16;
    addFacet(g, octahedron(0.85 + (i & 1) * 0.25), pale(), sx, sit(ground, sx, sz) + 0.2, sz);
  }
  root.add(g);
}

function qingqiuLandmarks(root: Group, ground: (x: number, z: number) => number): void {
  const m = mountainById("qingqiu")!;
  const g = new Group();
  g.name = "即翼之澤";
  const pond = addFacet(g, hexPrism(MARSH.r * 0.78, 0.38, 6), water(), MARSH.x, MARSH.water - 0.38, MARSH.z);
  pond.castShadow = false;
  const nx = NEST_ROCK.x;
  const nz = NEST_ROCK.z;
  const ny = sit(ground, nx, nz);
  addFacet(g, hexPrism(3.2, 2.4, 6), jade(), nx, ny, nz);
  addFacet(g, box(1.6, 3.1, 1.4), jade(), nx + 0.4, ny + 2.3, nz - 0.3);
  const hollows: [number, number][] = [
    [-18, 38],
    [-8, 48],
    [12, 42],
  ];
  for (const [lx, lz] of hollows) {
    const sx = m.x + lx;
    const sz = m.z + lz;
    const y = sit(ground, sx, sz);
    addFacet(g, box(4.2, 1.6, 3.4), jade(), sx, y, sz);
    addFacet(g, box(2.4, 2.2, 1.8), jade(), sx - 1.2, y + 1.5, sz + 0.4);
  }
  root.add(g);
}

function danxueLandmarks(root: Group, ground: (x: number, z: number) => number): void {
  const m = mountainById("danxue")!;
  const g = new Group();
  g.name = "丹穴門";
  const ax = m.x;
  const az = m.z - 14;
  const ay = sit(ground, ax, az);
  addFacet(g, box(1.6, 7.2, 1.6), lacquer(), ax - 4.2, ay, az);
  addFacet(g, box(1.6, 7.2, 1.6), lacquer(), ax + 4.2, ay, az);
  addFacet(g, box(10.2, 1.5, 1.8), gold(), ax, ay + 7.1, az);
  addFacet(g, octahedron(0.7), gold(), ax, ay + 8.8, az);
  const crystals: [number, number][] = [
    [-16, -6],
    [18, -10],
    [-10, 8],
    [12, 6],
    [0, -22],
    [22, 2],
  ];
  for (const [lx, lz] of crystals) {
    const sx = m.x + lx;
    const sz = m.z + lz;
    addFacet(g, octahedron(1.1 + Math.abs(lx) * 0.02), gold(), sx, sit(ground, sx, sz) + 0.4, sz);
  }
  const px = m.x + 28;
  const pz = m.z + 36;
  const py = sit(ground, px, pz);
  addFacet(g, hexPrism(3.6, 1.2, 6), gold(), px, py, pz);
  addFacet(g, box(1.8, 2.4, 1.8), lacquer(), px, py + 1.15, pz);
  addFacet(g, hexPrism(1.1, 0.35, 6), gold(), px, py + 3.5, pz);
  root.add(g);
}

function jishanLandmarks(root: Group, ground: (x: number, z: number) => number): void {
  const m = mountainById("ji-nanshan")!;
  const g = new Group();
  g.name = "金冠";
  const pavement: [number, number][] = [
    [0, 0],
    [8, 4],
    [-7, 6],
    [5, -8],
    [-10, -4],
    [12, -2],
    [-4, 10],
  ];
  for (const [lx, lz] of pavement) {
    const sx = m.x + lx;
    const sz = m.z + lz;
    addFacet(g, box(3.4, 0.42, 2.8), gold(), sx, sit(ground, sx, sz), sz);
  }
  const benches: [number, number, number][] = [
    [-18, -36, 5.5],
    [6, -44, 6.2],
    [22, -32, 4.8],
    [-8, -52, 5.8],
  ];
  for (const [lx, lz, w] of benches) {
    const sx = m.x + lx;
    const sz = m.z + lz;
    addFacet(g, box(w, 1.1, 2.4), lacquer(), sx, sit(ground, sx, sz), sz);
    addFacet(g, box(w * 0.7, 0.7, 1.8), lacquer(), sx + 0.4, sit(ground, sx, sz) + 1.05, sz + 0.3);
  }
  root.add(g);
}

export function createLandmarks(ground: (x: number, z: number) => number): Group {
  const root = new Group();
  root.name = "landmarks";
  zhaoyaoLandmarks(root, ground);
  yuanyiLandmarks(root, ground);
  qingqiuLandmarks(root, ground);
  danxueLandmarks(root, ground);
  jishanLandmarks(root, ground);
  for (const t of TARNS) {
    if (t === MARSH) continue;
    const pond = addFacet(root, hexPrism(t.r * 0.78, 0.32, 6), water(), t.x, t.water - 0.32, t.z);
    pond.castShadow = false;
  }
  return root;
}
