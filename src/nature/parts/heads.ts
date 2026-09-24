import { Group, MeshLambertMaterial, Vector3 } from "three";
import { addFacet, box, kite, pyramid } from "../../style/facets";
import type { HeadId } from "../../catalog/recipes";
import * as P from "./pelts";

function headMat(id: HeadId, tint: "white" | "pink" | "default"): MeshLambertMaterial {
  if (tint === "white") return P.horseWhite;
  if (tint === "pink") return P.macaquePink;
  switch (id) {
    case "tiger":
      return P.tiger;
    case "cow":
      return P.cow;
    case "horse":
      return P.horse;
    case "fox":
      return P.fox;
    case "macaque":
      return P.macaquePink;
    case "gibbon":
      return P.whiteFur;
    case "sheep":
      return P.sheep;
    case "bird":
      return P.dove;
    case "carp":
      return P.carp;
  }
}

function diamondEye(g: Group, x: number, y: number, z: number, s = 0.028): void {
  const white = addFacet(g, kite(s * 1.6, s * 1.6), P.eyeLight, x, y, z);
  white.rotation.x = -0.2;
  const iris = addFacet(g, kite(s * 0.7, s * 0.7), P.eyeDark, x, y, z + 0.008);
  iris.rotation.x = -0.2;
}

function triEar(g: Group, x: number, y: number, z: number, mat: MeshLambertMaterial, s = 1): void {
  const ear = addFacet(g, kite(0.07 * s, 0.14 * s), mat, x, y, z);
  ear.rotation.z = x < 0 ? 0.45 : -0.45;
  ear.rotation.x = -0.3;
}

export function attachHead(
  root: Group,
  id: HeadId,
  at: Vector3,
  opts: {
    tint?: "white" | "pink" | "default";
    lookBack?: boolean;
    extraEars?: boolean;
    humanFace?: boolean;
  },
): Group {
  const g = new Group();
  g.position.copy(at);
  if (opts.lookBack) g.rotation.y = 0.85;
  root.add(g);
  const mat = headMat(id, opts.tint ?? "default");
  const s = id === "horse" || id === "cow" ? 1.2 : id === "tiger" ? 1.12 : 1;

  if (id === "bird") {
    addFacet(g, box(0.12 * s, 0.1 * s, 0.14 * s), mat, 0, -0.02, 0);
    const beak = addFacet(g, pyramid(0.03, 0.08, 4), P.beak, 0, -0.02, 0.1);
    beak.rotation.x = Math.PI / 2;
    diamondEye(g, -0.03, 0.02, 0.06, 0.016);
    diamondEye(g, 0.03, 0.02, 0.06, 0.016);
    return g;
  }

  if (id === "carp") {
    const faceMat = opts.humanFace ? P.skin : mat;
    addFacet(g, box(0.16 * s, 0.12 * s, 0.18 * s), faceMat, 0, 0, 0.02);
    addFacet(g, box(0.08, 0.06, 0.1), faceMat, 0, -0.02, 0.12);
    diamondEye(g, -0.045, 0.03, 0.1, 0.018);
    diamondEye(g, 0.045, 0.03, 0.1, 0.018);
    return g;
  }

  addFacet(g, box(0.18 * s, 0.16 * s, 0.16 * s), mat, 0, 0.02, 0);
  const snoutMat = id === "tiger" || opts.tint === "white" ? P.horseWhite : mat;
  addFacet(g, box(0.1 * s, 0.08 * s, 0.14 * s), snoutMat, 0, -0.03 * s, 0.12 * s);
  const earMat = id === "macaque" || id === "gibbon" ? P.whiteFur : mat;
  const earS = id === "fox" || id === "tiger" ? 1.1 : 0.85;
  triEar(g, -0.08 * s, 0.12 * s, -0.02, earMat, earS);
  triEar(g, 0.08 * s, 0.12 * s, -0.02, earMat, earS);
  if (opts.extraEars) {
    triEar(g, -0.08 * s, 0.12 * s, -0.08, P.whiteFur, 0.9);
    triEar(g, 0.08 * s, 0.12 * s, -0.08, P.whiteFur, 0.9);
  }

  if (id === "cow") {
    const h1 = addFacet(g, pyramid(0.025, 0.14, 4), P.horn, -0.08, 0.14, -0.02);
    h1.rotation.z = 0.45;
    const h2 = addFacet(g, pyramid(0.025, 0.14, 4), P.horn, 0.08, 0.14, -0.02);
    h2.rotation.z = -0.45;
    addFacet(g, box(0.06, 0.05, 0.04), P.cowSpot, -0.05, 0.01, 0.08);
  }

  if (id === "macaque" || id === "gibbon") {
    addFacet(g, box(0.1, 0.08, 0.06), id === "gibbon" ? P.macaquePink : P.macaquePale, 0, -0.01, 0.08);
  }

  diamondEye(g, -0.045 * s, 0.03, 0.1 * s, 0.02);
  diamondEye(g, 0.045 * s, 0.03, 0.1 * s, 0.02);
  return g;
}
