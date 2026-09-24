import { Group, MeshLambertMaterial, Vector3 } from "three";
import { addFacet, addHexLimb, chevron, hexPrism } from "../../style/facets";
import type { TailId } from "../../catalog/recipes";
import * as P from "./pelts";

function tailMat(id: TailId, body: MeshLambertMaterial): MeshLambertMaterial {
  if (id === "redHorse") return P.redTail;
  if (id === "fox" || id === "foxNine") return P.fox;
  if (id === "snake" || id === "fish") return P.scale;
  return body;
}

function markTail<T extends { userData: Record<string, unknown> }>(mesh: T): T {
  mesh.userData.part = "tail";
  return mesh;
}

export function attachTail(root: Group, id: TailId, rump: Vector3, bodyMat: MeshLambertMaterial): void {
  if (id === "none") return;
  const mat = tailMat(id, bodyMat);
  const x = rump.x;
  const y = rump.y;
  const z = rump.z;

  if (id === "foxNine") {
    for (let i = 0; i < 9; i += 1) {
      const t = (i - 4) / 4.2;
      const mesh = addFacet(root, chevron(0.1, 0.72, 0.035), i % 2 ? P.foxTailTip : mat, x + t * 0.08, y + 0.06, z);
      mesh.rotation.y = t * 0.55;
      mesh.rotation.x = Math.PI / 2 + 0.2;
      markTail(mesh);
    }
    return;
  }

  if (id === "fish") {
    const mesh = addFacet(root, chevron(0.28, 0.42, 0.04), mat, x, y + 0.04, z);
    mesh.rotation.x = Math.PI / 2;
    markTail(mesh);
    return;
  }

  if (id === "horse" || id === "redHorse") {
    const a = addHexLimb(root, { x, y, z }, { x: x - 0.04, y: y - 0.18, z: z - 0.42 }, 0.045, 0.03, mat);
    const b = addHexLimb(root, { x: x - 0.04, y: y - 0.18, z: z - 0.42 }, { x: x + 0.06, y: y - 0.32, z: z - 0.85 }, 0.03, 0.016, mat);
    markTail(a);
    markTail(b);
    return;
  }

  if (id === "fox") {
    const mesh = addFacet(root, chevron(0.12, 0.62, 0.04), mat, x, y + 0.04, z);
    mesh.rotation.x = Math.PI / 2 + 0.25;
    markTail(mesh);
    return;
  }

  if (id === "longMonkey") {
    const a = addHexLimb(root, { x, y, z }, { x: x + 0.04, y: y - 0.12, z: z - 0.32 }, 0.03, 0.02, mat);
    const b = addHexLimb(
      root,
      { x: x + 0.04, y: y - 0.12, z: z - 0.32 },
      { x: x - 0.06, y: y - 0.28, z: z - 0.65 },
      0.02,
      0.01,
      mat,
    );
    markTail(a);
    markTail(b);
    return;
  }

  const a = addHexLimb(root, { x, y, z }, { x: x - 0.08, y: y - 0.04, z: z - 0.35 }, 0.038, 0.024, mat);
  const b = addHexLimb(
    root,
    { x: x - 0.08, y: y - 0.04, z: z - 0.35 },
    { x: x + 0.05, y: y - 0.1, z: z - 0.7 },
    0.024,
    0.012,
    mat,
  );
  addFacet(root, hexPrism(0.012, 0.08, 6), mat, x + 0.05, y - 0.12, z - 0.74);
  markTail(a);
  markTail(b);
}
