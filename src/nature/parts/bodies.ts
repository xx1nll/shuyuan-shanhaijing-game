import { Group, MeshLambertMaterial, Vector3 } from "three";
import { addFacet, box, hexBarrel, hexPrism, pyramid, taperHex } from "../../style/facets";
import type { BodyId } from "../../catalog/recipes";
import * as P from "./pelts";

export interface Sockets {
  head: Vector3;
  chest: Vector3;
  hips: Vector3;
  rump: Vector3;
  shoulderL: Vector3;
  shoulderR: Vector3;
  hipL: Vector3;
  hipR: Vector3;
  wingL: Vector3;
  wingR: Vector3;
}

function sock(
  head: [number, number, number],
  extras: Partial<Record<keyof Sockets, [number, number, number]>> = {},
): Sockets {
  const v = (t: [number, number, number]) => new Vector3(...t);
  const chest = extras.chest ?? [0, head[1] - 0.22, head[2] - 0.22];
  const hips = extras.hips ?? [0, chest[1] - 0.04, -0.08];
  const rump = extras.rump ?? [0, hips[1], -0.42];
  const shY = extras.shoulderL?.[1] ?? chest[1];
  const shZ = extras.shoulderL?.[2] ?? chest[2];
  return {
    head: v(head),
    chest: v(chest),
    hips: v(hips),
    rump: v(rump),
    shoulderL: v(extras.shoulderL ?? [-0.14, shY, shZ]),
    shoulderR: v(extras.shoulderR ?? [0.14, shY, shZ]),
    hipL: v(extras.hipL ?? [-0.12, hips[1], rump[2] + 0.12]),
    hipR: v(extras.hipR ?? [0.12, hips[1], rump[2] + 0.12]),
    wingL: v(extras.wingL ?? [-0.02, chest[1] + 0.06, chest[2] - 0.05]),
    wingR: v(extras.wingR ?? [0.02, chest[1] + 0.06, chest[2] - 0.05]),
  };
}

export function bodyMaterial(id: BodyId, tigerPelt: boolean): MeshLambertMaterial {
  if (tigerPelt) return P.tiger;
  switch (id) {
    case "horse":
      return P.horse;
    case "fox":
      return P.fox;
    case "cow":
      return P.cow;
    case "macaque":
      return P.macaque;
    case "gibbon":
      return P.whiteFur;
    case "civet":
      return P.civet;
    case "sheep":
      return P.sheep;
    case "fish":
      return P.carp;
    case "turtle":
      return P.shell;
  }
}

function quad(
  id: BodyId,
): { length: number; rBack: number; rFront: number; flatten: number; y: number } {
  switch (id) {
    case "horse":
      return { length: 1.18, rBack: 0.26, rFront: 0.22, flatten: 0.58, y: 0.58 };
    case "cow":
      return { length: 1.12, rBack: 0.3, rFront: 0.24, flatten: 0.68, y: 0.55 };
    case "fox":
      return { length: 0.82, rBack: 0.15, rFront: 0.12, flatten: 0.55, y: 0.34 };
    case "civet":
      return { length: 0.74, rBack: 0.14, rFront: 0.11, flatten: 0.52, y: 0.3 };
    case "macaque":
      return { length: 0.78, rBack: 0.18, rFront: 0.16, flatten: 0.62, y: 0.38 };
    case "sheep":
      return { length: 0.72, rBack: 0.2, rFront: 0.16, flatten: 0.7, y: 0.4 };
    default:
      return { length: 0.9, rBack: 0.2, rFront: 0.16, flatten: 0.6, y: 0.45 };
  }
}

export function attachBody(
  root: Group,
  id: BodyId,
  mat: MeshLambertMaterial,
  serpentine = false,
): Sockets {
  if (id === "gibbon") {
    addFacet(root, taperHex(0.12, 0.07, 0.62, 6), mat, 0, 0.42, 0);
    addFacet(root, box(0.16, 0.22, 0.14), mat, 0, 0.72, 0.02);
    return sock([0, 1.02, 0.08], {
      chest: [0, 0.78, 0.04],
      hips: [0, 0.5, 0],
      rump: [0, 0.48, -0.08],
      shoulderL: [-0.1, 0.88, 0.04],
      shoulderR: [0.1, 0.88, 0.04],
      hipL: [-0.06, 0.5, -0.02],
      hipR: [0.06, 0.5, -0.02],
    });
  }

  if (id === "turtle") {
    addFacet(root, hexPrism(0.34, 0.16, 6), mat, 0, 0.08, 0).scale.set(1, 1, 1.2);
    addFacet(root, pyramid(0.22, 0.1, 6), mat, 0, 0.22, 0);
    return sock([0, 0.2, 0.38], {
      chest: [0, 0.16, 0.08],
      hips: [0, 0.14, -0.05],
      rump: [0, 0.12, -0.32],
      wingL: [-0.18, 0.2, 0.05],
      wingR: [0.18, 0.2, 0.05],
    });
  }

  if (id === "fish" && serpentine) {
    const pts: [number, number, number][] = [
      [1.05, 0.16, 0.1],
      [0.55, 0.26, -0.08],
      [0.05, 0.12, 0.16],
      [-0.45, 0.22, -0.12],
      [-0.95, 0.1, 0.08],
    ];
    for (let i = 0; i < pts.length; i += 1) {
      const p = pts[i]!;
      const mesh = addFacet(root, hexPrism(0.09 - i * 0.01, 0.22, 6), mat, p[0], p[1], p[2]);
      mesh.rotation.z = Math.PI / 2;
      mesh.rotation.y = i * 0.2;
      if (i === pts.length - 1) mesh.userData.part = "tail";
    }
    return sock([1.12, 0.2, 0.1], {
      chest: [0.4, 0.18, 0],
      hips: [-0.2, 0.16, 0],
      rump: [-0.9, 0.1, 0.08],
    });
  }

  if (id === "fish") {
    addFacet(root, hexBarrel(1.05, 0.08, 0.06, 0.55, 6), mat, 0, 0, 0);
    return sock([0, 0.12, 0.55], {
      chest: [0, 0.1, 0.12],
      hips: [0, 0.09, -0.15],
      rump: [0, 0.08, -0.52],
      shoulderL: [-0.12, 0.1, 0.18],
      shoulderR: [0.12, 0.1, 0.18],
      hipL: [-0.1, 0.08, -0.28],
      hipR: [0.1, 0.08, -0.28],
      wingL: [0, 0.14, 0.05],
      wingR: [0, 0.14, -0.05],
    });
  }

  const q = quad(id);
  const halfH = Math.max(q.rBack, q.rFront) * q.flatten;
  const belly = Math.max(0.02, q.y - halfH);
  addFacet(root, hexBarrel(q.length, q.rBack, q.rFront, q.flatten, 6), mat, 0, belly, 0);
  if (id === "cow") {
    addFacet(root, box(0.12, 0.08, 0.1), P.cowSpot, -0.08, belly + halfH + 0.02, 0.12);
    addFacet(root, box(0.1, 0.07, 0.08), P.cowSpot, 0.1, belly + halfH - 0.02, -0.18);
  }

  if (id === "horse" || id === "cow") {
    return sock([0, q.y + 0.22, 0.58], {
      chest: [0, q.y - 0.08, 0.28],
      hips: [0, q.y - 0.1, -0.1],
      rump: [0, q.y - 0.08, -0.58],
      shoulderL: [-0.14, q.y - 0.1, 0.32],
      shoulderR: [0.14, q.y - 0.1, 0.32],
      hipL: [-0.14, q.y - 0.1, -0.32],
      hipR: [0.14, q.y - 0.1, -0.32],
    });
  }
  if (id === "macaque") {
    return sock([0, 0.52, 0.42], {
      chest: [0, 0.4, 0.18],
      hips: [0, 0.36, -0.08],
      rump: [0, 0.34, -0.4],
      shoulderL: [-0.12, 0.38, 0.22],
      shoulderR: [0.12, 0.38, 0.22],
      hipL: [-0.11, 0.36, -0.18],
      hipR: [0.11, 0.36, -0.18],
    });
  }
  if (id === "fox" || id === "civet") {
    return sock([0, q.y + 0.16, 0.38], {
      chest: [0, q.y - 0.04, 0.18],
      hips: [0, q.y - 0.04, -0.08],
      rump: [0, q.y - 0.04, -0.38],
      shoulderL: [-0.1, q.y - 0.06, 0.22],
      shoulderR: [0.1, q.y - 0.06, 0.22],
      hipL: [-0.1, q.y - 0.08, -0.22],
      hipR: [0.1, q.y - 0.08, -0.22],
    });
  }
  return sock([0, 0.58, 0.4], {
    chest: [0, 0.42, 0.16],
    hips: [0, 0.38, -0.06],
    rump: [0, 0.36, -0.32],
    shoulderL: [-0.12, 0.4, 0.2],
    shoulderR: [0.12, 0.4, 0.2],
    hipL: [-0.12, 0.36, -0.2],
    hipR: [0.12, 0.36, -0.2],
  });
}
