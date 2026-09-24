import { Group, Mesh } from "three";
import type { Quality } from "../quality";
import { buildHeightMesh, rebuildHeightAttribute, surfaceAt, type HeightSampler, type BiomeSampler } from "../nature/terrain";
import { MOUNTAINS, X_EAST, X_WEST, Z_NORTH, Z_SOUTH, type Mountain } from "./nanshan";

const JITTER = 0.18;

export interface TerrainBank {
  group: Group;
  meshes: Mesh[];
  coarse: Mesh;
  patches: Mesh[];
}

export function patchBounds(m: Mountain): { minX: number; maxX: number; minZ: number; maxZ: number } {
  const pad = m.radius * 1.12;
  return {
    minX: m.x - pad,
    maxX: m.x + pad,
    minZ: Math.max(Z_SOUTH, m.z - pad),
    maxZ: Math.min(Z_NORTH, m.z + pad),
  };
}

export function buildNanshanTerrains(opts: {
  sample: HeightSampler;
  biomeAt: BiomeSampler;
  quality: Quality;
}): TerrainBank {
  const group = new Group();
  group.name = "nanshan-terrain";
  const fine = opts.quality === "high" ? 180 : 120;
  const patches: Mesh[] = [];
  for (const m of MOUNTAINS) {
    const b = patchBounds(m);
    const mesh = buildHeightMesh({
      ...b,
      segX: fine,
      segZ: fine,
      sample: opts.sample,
      biomeAt: opts.biomeAt,
      jitter: JITTER,
    });
    mesh.name = `patch-${m.id}`;
    mesh.userData.priority = 1;
    mesh.userData.mountainId = m.id;
    const mat = mesh.material;
    if (mat && "polygonOffset" in mat) {
      mat.polygonOffset = true;
      mat.polygonOffsetFactor = -1;
      mat.polygonOffsetUnits = -1;
    }
    mesh.geometry.computeBoundsTree();
    group.add(mesh);
    patches.push(mesh);
  }
  const coarse = buildHeightMesh({
    minX: X_WEST,
    maxX: X_EAST,
    minZ: Z_SOUTH,
    maxZ: Z_NORTH,
    segX: opts.quality === "high" ? 220 : 140,
    segZ: opts.quality === "high" ? 90 : 58,
    sample: opts.sample,
    biomeAt: opts.biomeAt,
    jitter: JITTER,
  });
  coarse.name = "terrain-coarse";
  coarse.userData.priority = 0;
  coarse.geometry.computeBoundsTree();
  group.add(coarse);
  return { group, meshes: [...patches, coarse], coarse, patches };
}

export function pickTerrainMesh(meshes: Mesh[], x: number, z: number): Mesh | undefined {
  let best: Mesh | undefined;
  let bestPri = -1;
  for (const mesh of meshes) {
    const minX = mesh.userData.minX as number | undefined;
    const maxX = mesh.userData.maxX as number | undefined;
    const minZ = mesh.userData.minZ as number | undefined;
    const maxZ = mesh.userData.maxZ as number | undefined;
    if (minX === undefined || maxX === undefined || minZ === undefined || maxZ === undefined) continue;
    if (x < minX || x > maxX || z < minZ || z > maxZ) continue;
    const pri = (mesh.userData.priority as number) ?? 0;
    if (pri >= bestPri) {
      best = mesh;
      bestPri = pri;
    }
  }
  return best;
}

export function surfaceOnTerrains(
  meshes: Mesh[],
  x: number,
  z: number,
  fallback: number,
): { y: number; ny: number } {
  const mesh = pickTerrainMesh(meshes, x, z);
  if (!mesh) return { y: fallback, ny: 1 };
  return surfaceAt(mesh, x, z, fallback);
}

export function rebuildTerrainAt(bank: TerrainBank, x: number, z: number, sample: HeightSampler): void {
  const mesh = pickTerrainMesh(bank.meshes, x, z);
  if (!mesh) return;
  rebuildHeightAttribute(
    mesh,
    mesh.userData.minX as number,
    mesh.userData.maxX as number,
    mesh.userData.minZ as number,
    mesh.userData.maxZ as number,
    mesh.userData.segX as number,
    mesh.userData.segZ as number,
    sample,
  );
  mesh.geometry.computeBoundsTree();
}

export function rebuildTerrains(bank: TerrainBank, sample: HeightSampler): void {
  for (const mesh of bank.meshes) {
    rebuildHeightAttribute(
      mesh,
      mesh.userData.minX as number,
      mesh.userData.maxX as number,
      mesh.userData.minZ as number,
      mesh.userData.maxZ as number,
      mesh.userData.segX as number,
      mesh.userData.segZ as number,
      sample,
    );
    mesh.geometry.computeBoundsTree();
  }
}
