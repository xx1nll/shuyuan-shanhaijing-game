import { Group, MeshLambertMaterial } from "three";
import { addFacet, addHexLimb, kite, polyFan } from "../../style/facets";
import type { LimbId, WingId } from "../../catalog/recipes";
import type { Sockets } from "./bodies";
import * as P from "./pelts";

export function attachLimbs(
  root: Group,
  id: LimbId,
  sockets: Sockets,
  mat: MeshLambertMaterial,
): void {
  if (id === "none") return;
  const sl = sockets.shoulderL;
  const sr = sockets.shoulderR;
  const hl = sockets.hipL;
  const hr = sockets.hipR;

  if (id === "fins") {
    const f1 = addFacet(root, kite(0.22, 0.28), mat, sl.x, sl.y, sl.z + 0.04);
    f1.rotation.z = 0.9;
    const f2 = addFacet(root, kite(0.22, 0.28), mat, sr.x, sr.y, sr.z - 0.04);
    f2.rotation.z = -0.9;
    return;
  }

  if (id === "gibbon") {
    addHexLimb(root, sl, { x: sl.x - 0.52, y: 0, z: sl.z + 0.14 }, 0.028, 0.016, mat);
    addHexLimb(root, sr, { x: sr.x + 0.52, y: 0, z: sr.z + 0.14 }, 0.028, 0.016, mat);
    addHexLimb(root, hl, { x: hl.x - 0.02, y: 0, z: hl.z + 0.08 }, 0.026, 0.014, mat);
    addHexLimb(root, hr, { x: hr.x + 0.02, y: 0, z: hr.z + 0.08 }, 0.026, 0.014, mat);
    return;
  }

  const r = id === "ungulate" ? 0.048 : 0.032;
  addHexLimb(root, sl, { x: sl.x * 1.1, y: 0, z: sl.z + 0.08 }, r, r * 0.45, mat);
  addHexLimb(root, sr, { x: sr.x * 1.1, y: 0, z: sr.z + 0.08 }, r, r * 0.45, mat);
  addHexLimb(root, hl, { x: hl.x * 1.1, y: 0, z: hl.z - 0.08 }, r * 1.05, r * 0.48, mat);
  addHexLimb(root, hr, { x: hr.x * 1.1, y: 0, z: hr.z - 0.08 }, r * 1.05, r * 0.48, mat);
}

export function attachWings(root: Group, sockets: Sockets, kind: WingId): void {
  if (kind !== "feather") return;
  const w1 = addFacet(root, polyFan(0.42, 5), P.wing, sockets.wingL.x - 0.18, sockets.wingL.y, sockets.wingL.z);
  w1.rotation.y = Math.PI / 2;
  w1.rotation.z = 0.35;
  const w2 = addFacet(root, polyFan(0.42, 5), P.wing, sockets.wingR.x + 0.18, sockets.wingR.y, sockets.wingR.z);
  w2.rotation.y = -Math.PI / 2;
  w2.rotation.z = -0.35;
}

export function attachMane(root: Group, sockets: Sockets, mat: MeshLambertMaterial): void {
  for (let i = 0; i < 5; i += 1) {
    const t = i / 4;
    const mesh = addFacet(
      root,
      kite(0.08, 0.16),
      mat,
      0,
      sockets.head.y - 0.02 + t * 0.22,
      sockets.chest.z - t * 0.12,
    );
    mesh.rotation.x = 0.6;
  }
}
