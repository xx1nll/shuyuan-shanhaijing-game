import {
  Group,
  InstancedMesh,
  MeshLambertMaterial,
  Object3D,
  Quaternion,
  Vector3,
} from "three";
import type { PlantId } from "./flora";
import type { Quality } from "../quality";
import { readQuality } from "../quality";
import {
  addFacet,
  barkBai,
  barkGui,
  barkLacquer,
  barkLiu,
  barkMigu,
  barkShan,
  barkSong,
  barkTan,
  barkTao,
  barkYan,
  barkZhu,
  barkZi,
  barkZong,
  blade,
  box,
  chevron,
  flatMat,
  fruitTao,
  fruitYan,
  glowRhomb,
  hexPrism,
  kite,
  lacquerMat,
  leafBai,
  leafGui,
  leafLiu,
  leafMigu,
  leafShan,
  leafSong,
  leafTan,
  leafTao,
  leafYan,
  leafZhu,
  leafZi,
  leafZong,
  octahedron,
  podZi,
  polyFan,
  taperHex,
} from "../style/facets";
import { C } from "../style/palette";
import { floraIdForTree, type TreeKind, type TreeOverlay } from "./trees";

export { makeZhuyuTuft } from "../nature/grass";

const dummy = new Object3D();
const up = new Vector3(0, 1, 0);
const quat = new Quaternion();
const tmp = new Vector3();
const tmp2 = new Vector3();
const down = new Vector3(0, -1, 0);

const kiteGui = kite(0.16, 0.36);
const kiteYan = kite(0.18, 0.3);
const kiteBai = kite(0.12, 0.26);
const kiteTan = kite(0.14, 0.24);
const kiteTao = kite(0.12, 0.32);
const kiteZi = kite(0.26, 0.34);
const kiteLiu = kite(0.08, 0.28);
const kiteZhu = kite(0.1, 0.34);
const kiteShan = kite(0.1, 0.28);
const fanSang = polyFan(0.38, 5);
const fanPalm = polyFan(0.58, 5);
const needleGeo = blade(0.058, 0.95);
const fruitGeo = octahedron(0.09);
const peachGeo = octahedron(0.11);
const calyxGeo = box(0.05, 0.02, 0.05);
const rhombGeo = kite(0.16, 0.28);
const dripGeo = chevron(0.06, 0.22, 0.03);
const podGeo = chevron(0.07, 0.42, 0.03);
const unitHex = hexPrism(1, 1, 6);
const unitTaper = taperHex(1, 0.42, 1, 6);

export interface Socket {
  pos: Vector3;
  dir: Vector3;
}

function rand(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function budget(high: number, quality?: Quality): number {
  return (quality ?? readQuality()) === "high" ? high : Math.max(8, Math.floor(high * 0.55));
}

function instanceAt(
  root: Group,
  geo: ReturnType<typeof kite>,
  mat: MeshLambertMaterial,
  n: number,
  place: (i: number, d: Object3D) => void,
): InstancedMesh {
  const mesh = new InstancedMesh(geo, mat, Math.max(1, n));
  mesh.castShadow = false;
  for (let i = 0; i < n; i += 1) {
    place(i, dummy);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (n > 0) {
    mesh.computeBoundingSphere();
    root.add(mesh);
  }
  return mesh;
}

function instanceWood(
  root: Group,
  geo: ReturnType<typeof hexPrism>,
  mat: MeshLambertMaterial,
  n: number,
  place: (i: number, d: Object3D) => void,
): void {
  if (n <= 0) return;
  const mesh = new InstancedMesh(geo, mat, n);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  for (let i = 0; i < n; i += 1) {
    place(i, dummy);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingSphere();
  root.add(mesh);
}

function aimY(dir: Vector3): Quaternion {
  return quat.setFromUnitVectors(up, tmp.copy(dir).normalize());
}

function dirFrom(yaw: number, pitch: number): Vector3 {
  return new Vector3(Math.cos(yaw) * Math.sin(pitch), Math.cos(pitch), Math.sin(yaw) * Math.sin(pitch)).normalize();
}

function addLimb(
  root: Group,
  bark: MeshLambertMaterial,
  origin: Vector3,
  dir: Vector3,
  len: number,
  r0: number,
  r1: number,
  sockets: Socket[],
  along: boolean | number = false,
): void {
  const d = dir.clone().normalize();
  const arm = new Group();
  arm.position.copy(origin);
  arm.quaternion.copy(aimY(d));
  addFacet(arm, taperHex(r0, r1, len, 6), bark);
  root.add(arm);
  const extra = along === true ? 1 : along || 0;
  for (let k = 1; k <= extra; k += 1) {
    const t = (k / (extra + 1)) * 0.9;
    if (t > 0.25) sockets.push({ pos: origin.clone().addScaledVector(d, len * t), dir: d.clone() });
  }
  sockets.push({ pos: origin.clone().addScaledVector(d, len), dir: d.clone() });
}

function flareTrunk(bark: MeshLambertMaterial, r0: number, r1: number, h: number, stems = 1, seed = 1): Group {
  const root = new Group();
  addFacet(root, hexPrism(r0 * 1.5, r0 * 0.55, 6), bark);
  for (let i = 0; i < stems; i += 1) {
    const yaw = stems === 1 ? 0 : (i / stems) * Math.PI * 2 + rand(seed + i) * 0.22;
    const g = new Group();
    if (stems > 1) {
      g.position.set(Math.cos(yaw) * r0 * 0.42, 0, Math.sin(yaw) * r0 * 0.42);
      g.rotation.z = 0.14 * (i % 2 === 0 ? 1 : -1);
      g.rotation.x = 0.08 * (i % 3 === 0 ? -1 : 1);
    }
    addFacet(g, taperHex(r0 * (stems > 1 ? 0.7 : 1), r1, h * (stems > 1 ? 0.92 : 1), 6), bark);
    root.add(g);
  }
  return root;
}

function dressSockets(
  root: Group,
  sockets: Socket[],
  geo: ReturnType<typeof kite>,
  mat: MeshLambertMaterial,
  opts: {
    scale: number;
    seed: number;
    pair?: boolean;
    hang?: number;
    vertical?: boolean;
    split?: number;
  },
): void {
  const sides = opts.pair ? 2 : 1;
  const n = sockets.length * sides;
  instanceAt(root, geo, mat, n, (i) => {
    const sock = sockets[Math.floor(i / sides) % sockets.length]!;
    const s = i % sides;
    dummy.position.copy(sock.pos);
    dummy.quaternion.copy(aimY(sock.dir));
    dummy.translateY(0.04);
    if (opts.hang) dummy.rotateX(opts.hang);
    if (opts.vertical) dummy.rotateZ(Math.PI / 2);
    if (opts.pair) dummy.rotateY(s * Math.PI);
    dummy.translateX(opts.pair ? 0.07 : 0);
    if (opts.split) dummy.rotateZ((s ? 1 : -1) * opts.split);
    dummy.rotateY(rand(opts.seed + i) * 0.2);
    const sc = opts.scale * (0.88 + rand(opts.seed + i * 3) * 0.22);
    dummy.scale.set(sc, sc, 1);
  });
}

function layoutSpreading(
  seed: number,
  bark: MeshLambertMaterial,
  opts: {
    h: number;
    r0: number;
    r1: number;
    arms: number;
    spread: number;
    gnarl: number;
    stems?: number;
    t0?: number;
    t1?: number;
    along?: boolean | number;
    uneven?: boolean;
  },
): { root: Group; sockets: Socket[] } {
  const root = flareTrunk(bark, opts.r0, opts.r1, opts.h, opts.stems ?? 1, seed);
  const sockets: Socket[] = [];
  const t0 = opts.t0 ?? 0.42;
  const t1 = opts.t1 ?? 0.92;
  for (let i = 0; i < opts.arms; i += 1) {
    if (opts.uneven && rand(seed + i * 19) < 0.18) continue;
    const t = t0 + rand(seed + i * 9) * (t1 - t0);
    const y = opts.h * t;
    const yaw = (i / Math.max(1, opts.arms)) * Math.PI * 2 + rand(seed + i) * (opts.uneven ? 0.7 : 0.28);
    const pitch = opts.spread + (rand(seed + i * 7) - 0.5) * opts.gnarl;
    const dir = dirFrom(yaw, pitch);
    const origin = new Vector3(Math.cos(yaw) * opts.r0 * 0.55, y, Math.sin(yaw) * opts.r0 * 0.55);
    const len = opts.h * (0.3 + rand(seed + i * 3) * (opts.uneven ? 0.32 : 0.16));
    addLimb(root, bark, origin, dir, len, opts.r0 * 0.28, opts.r1 * 0.5, sockets, opts.along);
    if (rand(seed + i * 13) > 0.42) {
      const mid = origin.clone().addScaledVector(dir, len * 0.58);
      const subYaw = yaw + 0.75 + rand(seed + i * 17) * 0.4;
      const subPitch = pitch * 0.82 + (opts.uneven ? 0.25 : 0);
      addLimb(
        root,
        bark,
        mid,
        dirFrom(subYaw, subPitch),
        len * 0.46,
        opts.r0 * 0.16,
        opts.r1 * 0.3,
        sockets,
        false,
      );
    }
  }
  return { root, sockets };
}

function layoutPine(seed: number, bark: MeshLambertMaterial, quality?: Quality): { root: Group; sockets: Socket[] } {
  const h = 6.4;
  const r0 = 0.18;
  const r1 = 0.05;
  const root = flareTrunk(bark, r0, r1, h);
  const sockets: Socket[] = [];
  const whorls = budget(3, quality) >= 3 ? 3 : 2;
  const per = 6;
  for (let w = 0; w < whorls; w += 1) {
    const y = h * (0.4 + w * 0.2);
    const len = h * (0.36 - w * 0.06);
    const pitch = 1.08 + w * 0.06;
    for (let i = 0; i < per; i += 1) {
      const yaw = (i / per) * Math.PI * 2 + w * 0.32 + rand(seed + w * 11 + i) * 0.08;
      const origin = new Vector3(Math.cos(yaw) * r0 * 0.35, y, Math.sin(yaw) * r0 * 0.35);
      addLimb(root, bark, origin, dirFrom(yaw, pitch), len, r0 * 0.22, r1 * 0.55, sockets, false);
    }
  }
  return { root, sockets };
}

function layoutBai(seed: number, bark: MeshLambertMaterial, quality?: Quality): { root: Group; sockets: Socket[] } {
  const h = 5.8;
  const r0 = 0.16;
  const r1 = 0.045;
  const root = flareTrunk(bark, r0, r1, h);
  const sockets: Socket[] = [];
  const arms = budget(18, quality) >= 18 ? 18 : 12;
  for (let i = 0; i < arms; i += 1) {
    const t = 0.2 + (i / arms) * 0.74 + rand(seed + i) * 0.03;
    const yaw = (i / arms) * Math.PI * 2 + rand(seed + i * 5) * 0.28;
    const pitch = 0.16 + rand(seed + i * 7) * 0.14;
    const origin = new Vector3(Math.cos(yaw) * r0 * 0.5, h * t, Math.sin(yaw) * r0 * 0.5);
    const len = h * (0.16 + rand(seed + i * 3) * 0.08);
    addLimb(root, bark, origin, dirFrom(yaw, pitch), len, r0 * 0.24, r1 * 0.55, sockets, true);
  }
  return { root, sockets };
}

function layoutWeeping(seed: number, bark: MeshLambertMaterial): { root: Group; sockets: Socket[] } {
  const h = 5.2;
  const r0 = 0.15;
  const r1 = 0.04;
  const root = flareTrunk(bark, r0, r1, h);
  const sockets: Socket[] = [];
  const arms = 8;
  for (let i = 0; i < arms; i += 1) {
    const t = 0.48 + rand(seed + i * 9) * 0.42;
    const yaw = (i / arms) * Math.PI * 2 + rand(seed + i) * 0.22;
    const pitch = 1.22 + rand(seed + i * 7) * 0.18;
    const origin = new Vector3(Math.cos(yaw) * r0 * 0.5, h * t, Math.sin(yaw) * r0 * 0.5);
    const len = h * (0.55 + rand(seed + i * 3) * 0.22);
    addLimb(root, bark, origin, dirFrom(yaw, pitch), len, r0 * 0.22, r1 * 0.45, sockets, 4);
  }
  return { root, sockets };
}

function layoutShan(seed: number, bark: MeshLambertMaterial, quality?: Quality): { root: Group; sockets: Socket[] } {
  const h = 7;
  const r0 = 0.2;
  const root = flareTrunk(bark, r0, 0.045, h);
  const sockets: Socket[] = [];
  const whorls = budget(4, quality) >= 4 ? 4 : 3;
  const per = 6;
  const n = whorls * per;
  const origins: Vector3[] = [];
  const dirs: Vector3[] = [];
  const lens: number[] = [];
  for (let w = 0; w < whorls; w += 1) {
    const y = h * (0.28 + w * 0.16);
    const len = h * (0.38 - w * 0.06);
    const pitch = 0.88 + w * 0.05;
    for (let i = 0; i < per; i += 1) {
      const yaw = (i / per) * Math.PI * 2 + w * 0.28 + rand(seed + w * 11 + i) * 0.08;
      origins.push(new Vector3(Math.cos(yaw) * r0 * 0.32, y, Math.sin(yaw) * r0 * 0.32));
      dirs.push(dirFrom(yaw, pitch));
      lens.push(len);
    }
  }
  instanceWood(root, unitTaper, bark, n, (i) => {
    const origin = origins[i]!;
    const d = dirs[i]!;
    const len = lens[i]!;
    dummy.position.copy(origin);
    dummy.quaternion.copy(aimY(d));
    dummy.scale.set(r0 * 0.2, len, r0 * 0.2);
    sockets.push({ pos: origin.clone().addScaledVector(d, len * 0.62), dir: d.clone() });
    sockets.push({ pos: origin.clone().addScaledVector(d, len), dir: d.clone() });
  });
  dummy.scale.set(1, 1, 1);
  return { root, sockets };
}

function makeBamboo(seed: number, bark: MeshLambertMaterial, frond: MeshLambertMaterial, quality?: Quality): Group {
  const root = new Group();
  const sockets: Socket[] = [];
  const culms = budget(4, quality) >= 4 ? 4 : 3;
  const segs = 6;
  type Culm = { x: number; z: number; yaw: number; segH: number; r: number };
  const bank: Culm[] = [];
  for (let c = 0; c < culms; c += 1) {
    const yaw = (c / culms) * Math.PI * 2 + rand(seed + c) * 0.4;
    const rad = 0.18 + rand(seed + c * 3) * 0.16;
    bank.push({
      x: Math.cos(yaw) * rad,
      z: Math.sin(yaw) * rad,
      yaw,
      segH: 0.52 + rand(seed + c * 5) * 0.08,
      r: 0.055 + rand(seed + c * 7) * 0.02,
    });
  }
  instanceWood(root, unitHex, bark, culms * segs, (i) => {
    const c = bank[Math.floor(i / segs)]!;
    const s = i % segs;
    const rr = c.r * (1 - s * 0.04);
    dummy.position.set(c.x, s * c.segH, c.z);
    dummy.quaternion.identity();
    dummy.scale.set(rr, c.segH, rr);
  });
  instanceWood(root, unitHex, bark, culms * segs, (i) => {
    const c = bank[Math.floor(i / segs)]!;
    const s = i % segs;
    const rr = c.r * 1.18 * (1 - s * 0.04);
    dummy.position.set(c.x, (s + 1) * c.segH - 0.02, c.z);
    dummy.quaternion.identity();
    dummy.scale.set(rr, 0.035, rr);
  });
  const twigN = culms * 3 * 2;
  const twigs: { origin: Vector3; dir: Vector3; len: number }[] = [];
  for (let c = 0; c < culms; c += 1) {
    const culm = bank[c]!;
    for (let s = 3; s < segs; s += 1) {
      for (let a = 0; a < 2; a += 1) {
        const ay = s * culm.segH + culm.segH * 0.55;
        const aYaw = culm.yaw + (a ? 1.1 : -1.1) + rand(seed + c * 13 + s + a) * 0.2;
        const pitch = 0.95 + rand(seed + c + s) * 0.15;
        const dir = dirFrom(aYaw, pitch);
        const origin = new Vector3(culm.x + Math.cos(aYaw) * culm.r, ay, culm.z + Math.sin(aYaw) * culm.r);
        const len = 0.42 + rand(seed + a) * 0.12;
        twigs.push({ origin, dir, len });
        sockets.push({ pos: origin.clone().addScaledVector(dir, len), dir: dir.clone() });
      }
    }
  }
  instanceWood(root, unitTaper, bark, twigN, (i) => {
    const t = twigs[i]!;
    dummy.position.copy(t.origin);
    dummy.quaternion.copy(aimY(t.dir));
    dummy.scale.set(0.022, t.len, 0.022);
  });
  dummy.scale.set(1, 1, 1);
  dummy.quaternion.identity();
  dressSockets(root, sockets, kiteZhu, frond, { scale: 1.05, seed, hang: 0.28 });
  return root;
}

function makePalm(seed: number, bark: MeshLambertMaterial, frond: MeshLambertMaterial, quality?: Quality): Group {
  const root = new Group();
  const segs = 6;
  const segH = 0.92;
  for (let i = 0; i < segs; i += 1) {
    const r = 0.18 - i * 0.012;
    addFacet(root, hexPrism(r, segH, 6), bark, 0, i * segH, 0);
  }
  const top = segs * segH;
  const n = budget(8, quality) >= 8 ? 8 : 6;
  const sockets: Socket[] = [];
  for (let i = 0; i < n; i += 1) {
    const yaw = (i / n) * Math.PI * 2 + rand(seed + i) * 0.08;
    const pitch = 0.78 + rand(seed + i * 3) * 0.16;
    const origin = new Vector3(Math.cos(yaw) * 0.08, top, Math.sin(yaw) * 0.08);
    const len = 1.15 + rand(seed + i * 5) * 0.28;
    addLimb(root, bark, origin, dirFrom(yaw, pitch), len, 0.045, 0.02, sockets, false);
  }
  dressSockets(root, sockets, fanPalm, frond, { scale: 1, seed, hang: 0.35 });
  return root;
}

function tagTree(root: Group, kind: TreeKind, overlay?: TreeOverlay): Group {
  root.userData.treeKind = kind;
  const flora = floraIdForTree(kind, overlay);
  if (flora) root.userData.plantId = flora satisfies PlantId;
  if (overlay?.glowSiZhao) root.userData.overlay = "siZhao";
  if (overlay?.lacquer) root.userData.overlay = "lacquer";
  if (overlay?.strange) root.userData.overlay = "strange";
  return root;
}

function applySangOverlays(root: Group, sockets: Socket[], seed: number, overlay?: TreeOverlay): void {
  if (overlay?.glowSiZhao) {
    const glow = glowRhomb();
    const n = Math.min(sockets.length, 8);
    instanceAt(root, rhombGeo, glow, n * 2, (i) => {
      const sock = sockets[i % n]!;
      dummy.position.copy(sock.pos).addScaledVector(sock.dir, 0.06);
      dummy.quaternion.copy(aimY(sock.dir));
      dummy.rotateX(0.55 + rand(seed + i) * 0.2);
      dummy.scale.setScalar(0.82 + (i % 3) * 0.1);
    });
  }
  if (overlay?.lacquer) {
    const drip = lacquerMat();
    for (let i = 0; i < 6; i += 1) {
      const sock = sockets[i % Math.max(1, sockets.length)]!;
      const mesh = addFacet(root, dripGeo, drip, sock.pos.x, sock.pos.y, sock.pos.z);
      mesh.quaternion.copy(aimY(sock.dir));
      mesh.rotateZ(0.15);
    }
  }
}

function dressNeedles(root: Group, sockets: Socket[], mat: MeshLambertMaterial, seed: number): void {
  instanceAt(root, needleGeo, mat, sockets.length * 2, (i) => {
    const sock = sockets[Math.floor(i / 2) % sockets.length]!;
    const s = i % 2;
    tmp2.copy(sock.dir).lerp(down, 0.55).normalize();
    dummy.position.copy(sock.pos);
    dummy.quaternion.copy(aimY(tmp2));
    dummy.rotateZ((s ? 1 : -1) * 0.32);
    dummy.rotateY(rand(seed + i) * 0.12);
    dummy.scale.set(1.35, 1.05 + rand(seed + i * 3) * 0.18, 1);
  });
}

function dressFruit(root: Group, sockets: Socket[], seed: number, quality?: Quality): void {
  const tips = sockets.filter((_, i) => i % 2 === 1 || sockets.length < 8);
  const n = Math.min(tips.length, budget(14, quality));
  instanceAt(root, fruitGeo, fruitYan(), n, (i) => {
    const sock = tips[i % tips.length]!;
    dummy.position.copy(sock.pos).addScaledVector(sock.dir, 0.04);
    dummy.position.y -= 0.2;
    dummy.rotation.set(rand(seed + i) * 0.3, rand(seed + i * 3) * Math.PI, 0.1);
    dummy.scale.setScalar(0.9 + rand(seed + i * 5) * 0.3);
  });
  instanceAt(root, calyxGeo, flatMat(C.yanCalyx), n, (i) => {
    const sock = tips[i % tips.length]!;
    dummy.position.copy(sock.pos).addScaledVector(sock.dir, 0.04);
    dummy.position.y -= 0.13;
    dummy.rotation.set(0, rand(seed + i) * Math.PI, 0);
    dummy.scale.setScalar(1);
  });
}

function dressPeach(root: Group, sockets: Socket[], seed: number, quality?: Quality): void {
  const tips = sockets.filter((_, i) => i % 3 === 0);
  const n = Math.min(tips.length, budget(10, quality));
  instanceAt(root, peachGeo, fruitTao(), n, (i) => {
    const sock = tips[i % Math.max(1, tips.length)]!;
    dummy.position.copy(sock.pos).addScaledVector(sock.dir, 0.05);
    dummy.position.y -= 0.16;
    dummy.rotation.set(rand(seed + i) * 0.25, rand(seed + i * 3) * Math.PI, 0.08);
    dummy.scale.setScalar(0.95 + rand(seed + i * 5) * 0.28);
  });
}

function dressPods(root: Group, sockets: Socket[], seed: number): void {
  const n = Math.min(sockets.length, 10);
  instanceAt(root, podGeo, podZi(), n, (i) => {
    const sock = sockets[i % sockets.length]!;
    dummy.position.copy(sock.pos);
    dummy.quaternion.copy(aimY(sock.dir));
    dummy.rotateX(1.15);
    dummy.scale.set(1, 1.15 + rand(seed + i) * 0.25, 1);
  });
}

export function makeTree(kind: TreeKind, seed: number, quality?: Quality, overlay?: TreeOverlay): Group {
  if (kind === "zong") {
    return tagTree(makePalm(seed, barkZong(), leafZong(), quality), kind, overlay);
  }
  if (kind === "zhu") {
    return tagTree(makeBamboo(seed, barkZhu(), leafZhu(), quality), kind, overlay);
  }

  const sangBark = overlay?.lacquer ? barkLacquer() : barkMigu();
  const strange = Boolean(overlay?.strange);
  let built: { root: Group; sockets: Socket[] };

  if (kind === "gui") {
    built = layoutSpreading(seed, barkGui(), {
      h: 5.2,
      r0: 0.22,
      r1: 0.07,
      arms: 7,
      spread: 0.82,
      gnarl: 0.12,
      t0: 0.48,
      t1: 0.94,
      along: true,
    });
    dressSockets(built.root, built.sockets, kiteGui, leafGui(), { scale: 1.08, seed, pair: true });
  } else if (kind === "song") {
    built = layoutPine(seed, barkSong(), quality);
    dressNeedles(built.root, built.sockets, leafSong(), seed);
  } else if (kind === "bai") {
    built = layoutBai(seed, barkBai(), quality);
    dressSockets(built.root, built.sockets, kiteBai, leafBai(), {
      scale: 1.08,
      seed,
      pair: true,
      vertical: true,
    });
  } else if (kind === "tan") {
    built = layoutSpreading(seed, barkTan(), {
      h: 3.6,
      r0: 0.26,
      r1: 0.09,
      arms: 6,
      spread: 0.72,
      gnarl: 0.28,
      stems: 3,
      along: true,
    });
    dressSockets(built.root, built.sockets, kiteTan, leafTan(), { scale: 1.02, seed, pair: false });
  } else if (kind === "sang") {
    built = layoutSpreading(seed, sangBark, {
      h: 4.4,
      r0: strange ? 0.3 : 0.32,
      r1: 0.1,
      arms: strange ? 4 : 6,
      spread: strange ? 1.12 : 0.95,
      gnarl: strange ? 0.85 : 0.4,
      along: true,
      uneven: strange,
    });
    dressSockets(built.root, built.sockets, fanSang, leafMigu(), { scale: 1.12, seed, hang: 0.25 });
    applySangOverlays(built.root, built.sockets, seed, overlay);
  } else if (kind === "tao") {
    built = layoutSpreading(seed, barkTao(), {
      h: 3.8,
      r0: 0.2,
      r1: 0.07,
      arms: 6,
      spread: 0.92,
      gnarl: 0.16,
      t0: 0.4,
      t1: 0.92,
      along: true,
    });
    dressSockets(built.root, built.sockets, kiteTao, leafTao(), { scale: 1.05, seed, pair: false });
    dressPeach(built.root, built.sockets, seed, quality);
  } else if (kind === "zi") {
    built = layoutSpreading(seed, barkZi(), {
      h: 5.1,
      r0: 0.24,
      r1: 0.08,
      arms: 6,
      spread: 0.78,
      gnarl: 0.14,
      along: true,
    });
    dressSockets(built.root, built.sockets, kiteZi, leafZi(), { scale: 1.12, seed, pair: false });
    dressPods(built.root, built.sockets, seed);
  } else if (kind === "liu") {
    built = layoutWeeping(seed, barkLiu());
    dressSockets(built.root, built.sockets, kiteLiu, leafLiu(), { scale: 0.95, seed, hang: 0.15 });
  } else if (kind === "shan") {
    built = layoutShan(seed, barkShan(), quality);
    dressSockets(built.root, built.sockets, kiteShan, leafShan(), { scale: 0.98, seed, hang: 0.22 });
  } else {
    built = layoutSpreading(seed, barkYan(), {
      h: 5.6,
      r0: 0.2,
      r1: 0.06,
      arms: 6,
      spread: 0.78,
      gnarl: 0.18,
      along: true,
    });
    dressSockets(built.root, built.sockets, kiteYan, leafYan(), { scale: 1.02, seed, pair: false });
    dressFruit(built.root, built.sockets, seed, quality);
  }

  return tagTree(built.root, kind, overlay);
}

export function placeTree(tree: Group, x: number, y: number, z: number, yaw = 0): Group {
  const clone = tree.clone(true);
  clone.position.set(x, y, z);
  clone.rotation.y = yaw;
  clone.updateMatrixWorld();
  return clone;
}

export function updateHeroWind(_root: Group, _time: number): void {
  /* faceted crowns stay still */
}
