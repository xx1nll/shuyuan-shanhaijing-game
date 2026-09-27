import { BufferGeometry, CylinderGeometry, Group, InstancedMesh, Mesh, MeshLambertMaterial, Object3D } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { addFacet, box, flatMat } from "../../style/facets";

export type Ground = (x: number, z: number) => number;

export const MAT = {
  stone: flatMat("#6a5c4c"),
  pale: flatMat("#d8d0c4"),
  thatch: flatMat("#7a6a40"),
  wood: flatMat("#5a4030"),
  rammed: flatMat("#6e5840"),
  bone: flatMat("#c8bca8"),
  jade: flatMat("#90b0a0"),
  lacquer: flatMat("#9c2b1a"),
  gold: flatMat("#c4a35a"),
  dark: flatMat("#2a221c"),
  water: flatMat("#1a2a28", { transparent: true, opacity: 0.62, depthWrite: false }),
};

export function sit(ground: Ground, x: number, z: number): number {
  return ground(x, z);
}

function bakeMesh(obj: Mesh): BufferGeometry {
  obj.updateMatrixWorld(true);
  const geo = obj.geometry.clone();
  const source = geo.index ? geo.toNonIndexed() : geo;
  if (geo.index) geo.dispose();
  source.applyMatrix4(obj.matrixWorld);
  source.deleteAttribute("uv");
  source.deleteAttribute("uv1");
  source.deleteAttribute("uv2");
  return source;
}

export function mergeGroup(group: Group): Group {
  group.updateMatrixWorld(true);
  const keep: Object3D[] = [];
  for (const child of [...group.children]) {
    if (child.userData.skipMerge) keep.push(child);
  }
  const originals: Mesh[] = [];
  const buckets = new Map<MeshLambertMaterial, BufferGeometry[]>();
  group.traverse((obj) => {
    if (!(obj instanceof Mesh) || obj instanceof InstancedMesh) return;
    let p: Object3D | null = obj;
    while (p) {
      if (p.userData.skipMerge) return;
      p = p.parent;
    }
    const raw = Array.isArray(obj.material) ? obj.material[0] : obj.material;
    if (!(raw instanceof MeshLambertMaterial)) return;
    originals.push(obj);
    const list = buckets.get(raw) ?? [];
    list.push(bakeMesh(obj));
    buckets.set(raw, list);
  });
  for (const node of keep) group.remove(node);
  while (group.children.length) group.remove(group.children[0]!);
  const leftovers: Mesh[] = [];
  for (const [matRef, geos] of buckets) {
    if (!geos.length) continue;
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!merged) continue;
    const mesh = new Mesh(merged, matRef);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    leftovers.push(mesh);
  }
  if (leftovers.length) leftovers.forEach((m) => group.add(m));
  else originals.forEach((m) => group.add(m));
  keep.forEach((n) => group.add(n));
  return group;
}

export function padStone(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(10, 0.5, 10), MAT.stone, x, y, z);
}

export function megalith(
  g: Group,
  ground: Ground,
  x: number,
  z: number,
  w: number,
  h: number,
  d: number,
  color?: string,
): void {
  const y = sit(ground, x, z);
  addFacet(g, box(w, h, d), color ? flatMat(color) : MAT.stone, x, y, z);
}

export function dolmen(g: Group, ground: Ground, x: number, z: number, yaw = 0): void {
  const y = sit(ground, x, z);
  const piece = new Group();
  addFacet(piece, box(2, 6, 1.2), MAT.stone, -1.6, 0, 0);
  addFacet(piece, box(2, 6, 1.2), MAT.stone, 1.6, 0, 0);
  addFacet(piece, box(5, 0.8, 2.2), MAT.pale, 0, 6, 0);
  piece.position.set(x, y, z);
  piece.rotation.y = yaw;
  g.add(piece);
}

export function rammedWall(g: Group, ground: Ground, x: number, z: number, len: number, h = 3.2): void {
  const y = sit(ground, x, z);
  addFacet(g, box(len, h, 0.8), MAT.rammed, x, y, z);
}

export function thatchHut(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(6, 2.6, 5), MAT.rammed, x, y, z);
  addFacet(g, box(7.2, 1.4, 6.2), MAT.thatch, x, y + 2.6, z);
  addFacet(g, box(1.2, 1.6, 0.2), MAT.dark, x, y + 0.4, z + 2.55);
}

export function thatchLean(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(4, 1.6, 3), MAT.rammed, x, y, z);
  addFacet(g, box(5, 0.7, 3.8), MAT.thatch, x, y + 1.6, z);
}

export function jadeWell(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  const rim = new CylinderGeometry(2.2, 2.4, 0.55, 8);
  rim.translate(0, 0.28, 0);
  addFacet(g, rim, MAT.jade, x, y, z);
  addFacet(g, box(3.2, 0.12, 3.2), MAT.water, x, y + 0.08, z);
}

export function godSlab(g: Group, ground: Ground, x: number, z: number, color?: string): void {
  const y = sit(ground, x, z);
  addFacet(g, box(4, 8, 0.6), color ? flatMat(color) : MAT.pale, x, y, z);
}

export function boneRib(g: Group, ground: Ground, x: number, z: number, yaw = 0): void {
  const y = sit(ground, x, z);
  const piece = new Group();
  addFacet(piece, box(12, 1, 0.8), MAT.bone, 0, 4, 0);
  piece.children[0]!.rotation.z = 0.35;
  addFacet(piece, box(1.4, 6, 1.2), MAT.bone, -5, 0, 0);
  piece.position.set(x, y, z);
  piece.rotation.y = yaw;
  g.add(piece);
}

export function stoneCircle(g: Group, ground: Ground, x: number, z: number, r: number, n: number, color?: string): void {
  const mat = color ? flatMat(color) : MAT.stone;
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2;
    const sx = x + Math.cos(a) * r;
    const sz = z + Math.sin(a) * r;
    addFacet(g, box(1.6, 1.4, 1.1), mat, sx, sit(ground, sx, sz), sz);
  }
}

export function caveMouth(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(8, 6, 3), MAT.stone, x, y, z - 1.2);
  addFacet(g, box(4.2, 4.4, 2.4), MAT.dark, x, y + 0.4, z + 0.6);
}

export function flagSpine(g: Group, ground: Ground, points: [number, number][]): void {
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i]!;
    const b = points[i + 1]!;
    const steps = Math.max(4, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / 2.2));
    for (let k = 0; k <= steps; k += 1) {
      const t = k / steps;
      const x = a[0] + (b[0] - a[0]) * t;
      const z = a[1] + (b[1] - a[1]) * t;
      addFacet(g, box(2, 0.18, 1.4), MAT.stone, x, sit(ground, x, z) - 0.02, z);
    }
  }
}

export function waterDisk(g: Group, x: number, z: number, r: number, y: number, color: string): void {
  const geo = new CylinderGeometry(r, r, 0.2, 10);
  geo.translate(0, 0.1, 0);
  addFacet(g, geo, flatMat(color, { transparent: true, opacity: 0.7, depthWrite: false }), x, y, z);
}

export function waterStrip(g: Group, ax: number, az: number, bx: number, bz: number, width: number, y: number, color: string): void {
  const mx = (ax + bx) / 2;
  const mz = (az + bz) / 2;
  const len = Math.hypot(bx - ax, bz - az) || 1;
  const mesh = addFacet(g, box(width, 0.18, len), flatMat(color, { transparent: true, opacity: 0.7, depthWrite: false }), mx, y, mz);
  mesh.rotation.y = Math.atan2(bx - ax, bz - az);
}

export function figure(g: Group, ground: Ground, x: number, z: number, h: number, color: string): void {
  const y = sit(ground, x, z);
  addFacet(g, box(0.7, h * 0.55, 0.45), flatMat(color), x, y, z);
  addFacet(g, box(0.55, h * 0.28, 0.5), flatMat(color), x, y + h * 0.55, z);
}

export function logPile(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(4.2, 0.7, 1.1), MAT.wood, x, y, z);
  addFacet(g, box(3.6, 0.6, 1.0), MAT.wood, x, y + 0.7, z + 0.2);
  addFacet(g, box(1.8, 0.9, 1.6), MAT.stone, x + 1.4, y, z + 1.1);
}

export function crack(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(8, 0.4, 1.1), MAT.dark, x, y, z);
  addFacet(g, box(5, 2.2, 0.5), MAT.stone, x - 1.2, y, z - 0.4);
}

export function drum(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  const hide = new CylinderGeometry(2.4, 2.4, 1.4, 8);
  hide.translate(0, 0.7, 0);
  addFacet(g, hide, MAT.lacquer, x, y + 1.6, z);
  addFacet(g, box(12, 1, 0.8), MAT.bone, x, y + 2.2, z + 0.4);
}

export function tray(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(1.8, 0.2, 1.8), MAT.jade, x, y + 0.8, z);
  addFacet(g, box(0.4, 0.8, 0.4), MAT.pale, x, y, z);
}

export function basin(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  const rim = new CylinderGeometry(5, 5.4, 0.5, 8);
  rim.translate(0, 0.25, 0);
  addFacet(g, rim, MAT.pale, x, y, z);
  addFacet(g, box(8, 0.12, 8), MAT.gold, x, y + 0.12, z);
}

export function mound(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(6, 1.8, 5), MAT.rammed, x, y, z);
  addFacet(g, box(3.2, 1.1, 2.8), MAT.stone, x, y + 1.8, z);
}

export function staffPole(g: Group, ground: Ground, x: number, z: number, h: number, color?: string): void {
  const y = sit(ground, x, z);
  addFacet(g, box(0.28, h, 0.28), color ? flatMat(color) : MAT.wood, x, y, z);
}

export function flagStone(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(1.4, 2.8, 0.4), MAT.pale, x, y, z);
}

export function kilnBody(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  const body = new CylinderGeometry(6, 6.4, 8, 8);
  body.translate(0, 4, 0);
  addFacet(g, body, MAT.stone, x, y, z);
  addFacet(g, box(2.2, 2.4, 0.4), MAT.lacquer, x, y + 2, z + 6.1);
}

export function gravelPatch(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(8, 0.35, 6), MAT.stone, x, y, z);
  addFacet(g, box(3, 0.5, 2.2), MAT.pale, x + 2, y, z - 1);
}

export function twig(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z) - 0.4;
  addFacet(g, box(1.6, 0.18, 0.18), MAT.wood, x, y, z);
  addFacet(g, box(0.18, 0.18, 1.2), MAT.wood, x + 0.4, y, z + 0.3);
}

export function namingRock(g: Group, ground: Ground, x: number, z: number, color: string): void {
  const y = sit(ground, x, z);
  addFacet(g, box(1.5, 1.5, 1.5), flatMat(color), x, y, z);
}

export function oreRocks(g: Group, ground: Ground, x: number, z: number, color: string, w = 6, h = 3, d = 5): void {
  const y = sit(ground, x, z);
  addFacet(g, box(w, h, d), flatMat(color), x, y, z);
  addFacet(g, box(w * 0.5, h * 0.7, d * 0.5), MAT.gold, x + w * 0.3, y, z - d * 0.2);
}

export function caveFruit(g: Group, ground: Ground, x: number, z: number): void {
  const y = sit(ground, x, z);
  addFacet(g, box(0.5, 0.5, 0.5), MAT.gold, x, y + 1.2, z);
}
