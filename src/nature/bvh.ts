import { BufferGeometry, Mesh, Raycaster, Vector3 } from "three";
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from "three-mesh-bvh";
import { pickTerrainMesh } from "../explore/patches";

Mesh.prototype.raycast = acceleratedRaycast;
BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;

const down = new Vector3(0, -1, 0);
const origin = new Vector3();
const ray = new Raycaster();
ray.firstHitOnly = true;

export function groundHeight(terrain: Mesh | Mesh[], x: number, z: number, fallback: number): number {
  const meshes = Array.isArray(terrain) ? terrain : [terrain];
  const mesh = pickTerrainMesh(meshes, x, z) ?? meshes[0];
  if (!mesh) return fallback;
  origin.set(x, 120, z);
  ray.set(origin, down);
  const hits = ray.intersectObject(mesh, false);
  return hits[0]?.point.y ?? fallback;
}
