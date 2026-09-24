import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  Mesh,
  MeshLambertMaterial,
  Object3D,
  OctahedronGeometry,
  Vector3,
} from "three";
import { C } from "./palette";

const mats = new Map<string, MeshLambertMaterial>();

export function flatMat(
  hex: string,
  extras: ConstructorParameters<typeof MeshLambertMaterial>[0] = {},
): MeshLambertMaterial {
  const key = hex + JSON.stringify(extras);
  const hit = mats.get(key);
  if (hit) return hit;
  const mat = new MeshLambertMaterial({
    color: hex,
    flatShading: true,
    ...extras,
  });
  mats.set(key, mat);
  return mat;
}

export function flatMatSide(hex: string): MeshLambertMaterial {
  return flatMat(hex, { side: DoubleSide });
}

export function hexPrism(radius: number, height: number, sides = 6): CylinderGeometry {
  const geo = new CylinderGeometry(radius, radius, height, sides, 1);
  geo.translate(0, height / 2, 0);
  return geo;
}

export function taperHex(rBottom: number, rTop: number, height: number, sides = 6): CylinderGeometry {
  const geo = new CylinderGeometry(rTop, rBottom, height, sides, 1);
  geo.translate(0, height / 2, 0);
  return geo;
}

export function pyramid(radius: number, height: number, sides = 6): ConeGeometry {
  const geo = new ConeGeometry(radius, height, sides, 1);
  geo.translate(0, height / 2, 0);
  return geo;
}

export function octahedron(radius: number): OctahedronGeometry {
  return new OctahedronGeometry(radius, 0);
}

export function box(w: number, h: number, d: number): BoxGeometry {
  const geo = new BoxGeometry(w, h, d);
  geo.translate(0, h / 2, 0);
  return geo;
}

/** Diamond / kite in the XY plane, tip toward +Y. */
export function kite(width: number, height: number): BufferGeometry {
  const hw = width * 0.5;
  const top = height * 0.58;
  const bot = height * 0.42;
  const pos = new Float32Array([0, top, 0, hw, 0, 0, 0, -bot, 0, -hw, 0, 0, 0, 0, width * 0.04]);
  const idx = [0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4, 0, 3, 2, 0, 2, 1];
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/** 3–5 pointed polygonal fan (構 / paper-mulberry lobe) in XY. */
export function polyFan(radius: number, lobes = 5): BufferGeometry {
  const pos: number[] = [0, 0, radius * 0.05];
  const idx: number[] = [];
  const n = lobes * 2;
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? radius : radius * 0.38;
    pos.push(Math.cos(a) * r, Math.sin(a) * r, 0);
  }
  for (let i = 0; i < n; i += 1) {
    idx.push(0, i + 1, ((i + 1) % n) + 1);
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(pos), 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/** Tall isosceles blade (韭). */
export function blade(width: number, height: number): BufferGeometry {
  const hw = width * 0.5;
  const pos = new Float32Array([-hw, 0, 0, hw, 0, 0, 0, height, width * 0.08]);
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setIndex([0, 1, 2, 0, 2, 1]);
  geo.computeVertexNormals();
  return geo;
}

/** Vertical fish-tail / 華 / lacquer drip. */
export function chevron(width: number, height: number, thick = 0.04): BufferGeometry {
  const hw = width * 0.5;
  const t = thick * 0.5;
  const pos = new Float32Array([
    0, 0, t, hw, -height * 0.35, t, 0, -height, t, -hw, -height * 0.35, t, 0, 0, -t, hw, -height * 0.35, -t, 0, -height,
    -t, -hw, -height * 0.35, -t,
  ]);
  const idx = [0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6, 0, 4, 5, 0, 5, 1, 1, 5, 6, 1, 6, 2, 2, 6, 7, 2, 7, 3, 3, 7, 4, 3, 4, 0];
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

export function wedge(length: number, width: number, thick: number): BufferGeometry {
  const hl = length * 0.5;
  const hw = width * 0.5;
  const ht = thick * 0.5;
  const pos = new Float32Array([-hl, 0, 0, hl, 0, hw, hl, 0, -hw, -hl, ht, 0, hl, ht, hw, hl, ht, -hw]);
  const idx = [0, 1, 2, 3, 5, 4, 0, 3, 4, 0, 4, 1, 1, 4, 5, 1, 5, 2, 2, 5, 3, 2, 3, 0];
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

export function hexBarrel(length: number, rBack: number, rFront: number, flatten = 0.62, sides = 6): CylinderGeometry {
  const geo = new CylinderGeometry(rFront, rBack, length, sides, 1);
  geo.rotateX(Math.PI / 2);
  geo.scale(1, flatten, 1);
  geo.translate(0, Math.max(rBack, rFront) * flatten, 0);
  return geo;
}

export function addHexLimb(
  parent: Object3D,
  from: { x: number; y: number; z: number },
  to: { x: number; y: number; z: number },
  r0: number,
  r1: number,
  mat: MeshLambertMaterial,
): Mesh {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dz = to.z - from.z;
  const len = Math.hypot(dx, dy, dz) || 0.04;
  const mesh = new Mesh(taperHex(r0, r1, len, 6), mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  aimFromTo(mesh, from, to);
  parent.add(mesh);
  return mesh;
}

export function aimFromTo(
  mesh: Mesh,
  from: { x: number; y: number; z: number },
  to: { x: number; y: number; z: number },
): Mesh {
  const fx = from.x;
  const fy = from.y;
  const fz = from.z;
  mesh.position.set(fx, fy, fz);
  const dx = to.x - fx;
  const dy = to.y - fy;
  const dz = to.z - fz;
  const len = Math.hypot(dx, dy, dz) || 1;
  mesh.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), new Vector3(dx / len, dy / len, dz / len));
  return mesh;
}

export function addFacet(parent: Object3D, geo: BufferGeometry, mat: MeshLambertMaterial, x = 0, y = 0, z = 0): Mesh {
  const mesh = new Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export const barkGui = () => flatMat(C.guiBark);
export const barkMigu = () => flatMat(C.miguBark);
export const barkYan = () => flatMat(C.yanBark);
export const barkLacquer = () => flatMat(C.lacquerBark);
export const barkSong = () => flatMat(C.songBark);
export const barkBai = () => flatMat(C.baiBark);
export const barkZong = () => flatMat(C.zongBark);
export const barkTan = () => flatMat(C.tanBark);
export const barkTao = () => flatMat(C.taoBark);
export const barkZi = () => flatMat(C.ziBark);
export const barkLiu = () => flatMat(C.liuBark);
export const barkZhu = () => flatMat(C.zhuBark);
export const barkShan = () => flatMat(C.shanBark);
export const leafGui = () => flatMatSide(C.guiLeaf);
export const leafMigu = () => flatMatSide(C.miguLeaf);
export const leafYan = () => flatMatSide(C.yanLeaf);
export const leafSong = () => flatMatSide(C.songLeaf);
export const leafBai = () => flatMatSide(C.baiLeaf);
export const leafZong = () => flatMatSide(C.zongFrond);
export const leafTan = () => flatMatSide(C.tanLeaf);
export const leafTao = () => flatMatSide(C.taoLeaf);
export const leafZi = () => flatMatSide(C.ziLeaf);
export const leafLiu = () => flatMatSide(C.liuLeaf);
export const leafZhu = () => flatMatSide(C.zhuLeaf);
export const leafShan = () => flatMatSide(C.shanLeaf);
export const fruitYan = () => flatMat(C.yanFruit);
export const fruitTao = () => flatMat(C.taoFruit);
export const podZi = () => flatMat(C.ziPod);
export const glowRhomb = () =>
  flatMat(C.miguGlow, { emissive: C.miguGlow, emissiveIntensity: 0.45, side: DoubleSide });
export const lacquerMat = () => flatMat(C.lacquer);
export const bladeMat = () => flatMatSide(C.zhuyuBlade);
export const floretMat = () => flatMatSide(C.zhuyuFloret);
