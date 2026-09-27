import { Group, Mesh } from "three";
import type { Quality } from "../quality";
import { X_EAST, X_WEST, Z_NORTH, Z_SOUTH, SEA_LEVEL } from "./nanshan";
import { buildHeightMesh, rebuildHeightAttribute, surfaceAt, type HeightSampler, type BiomeSampler } from "../nature/terrain";

const JITTER = 0.18;
export const PATCH = 480;
const RING = 2;

export interface TerrainBank {
  group: Group;
  meshes: Mesh[];
  coarse: Mesh;
  patches: Mesh[];
}

function patchKey(cx: number, cz: number): string {
  return `${cx}:${cz}`;
}

function makePatch(
  cx: number,
  cz: number,
  sample: HeightSampler,
  biomeAt: BiomeSampler,
  quality: Quality,
): Mesh {
  const minX = cx * PATCH;
  const maxX = (cx + 1) * PATCH;
  const minZ = cz * PATCH;
  const maxZ = (cz + 1) * PATCH;
  const fine = quality === "high" ? 36 : 24;
  const mesh = buildHeightMesh({
    minX,
    maxX,
    minZ,
    maxZ,
    segX: fine,
    segZ: fine,
    sample,
    biomeAt,
    jitter: JITTER,
    receiveShadow: false,
    polygonOffset: -2,
  });
  mesh.name = `patch-${cx}-${cz}`;
  mesh.userData.priority = 1;
  mesh.renderOrder = 1;
  mesh.userData.cx = cx;
  mesh.userData.cz = cz;
  mesh.geometry.computeBoundsTree();
  return mesh;
}

export function buildNanshanTerrains(opts: {
  sample: HeightSampler;
  biomeAt: BiomeSampler;
  quality: Quality;
  x: number;
  z: number;
}): TerrainBank {
  const group = new Group();
  group.name = "world-terrain";
  const coarse = buildHeightMesh({
    minX: X_WEST,
    maxX: X_EAST,
    minZ: Z_SOUTH,
    maxZ: Z_NORTH,
    segX: 160,
    segZ: 50,
    sample: opts.sample,
    biomeAt: opts.biomeAt,
    jitter: JITTER,
    receiveShadow: false,
    polygonOffset: 4,
  });
  coarse.name = "terrain-coarse";
  coarse.userData.priority = 0;
  coarse.renderOrder = 0;
  coarse.geometry.computeBoundsTree();
  group.add(coarse);
  const bank: TerrainBank = { group, meshes: [coarse], coarse, patches: [] };
  updateTerrainLod(bank, opts.x, opts.z, opts.sample, opts.biomeAt, opts.quality);
  return bank;
}

export function updateTerrainLod(
  bank: TerrainBank,
  x: number,
  z: number,
  sample: HeightSampler,
  biomeAt: BiomeSampler,
  quality: Quality,
): void {
  const pcx = Math.floor(x / PATCH);
  const pcz = Math.floor(z / PATCH);
  const want = new Set<string>();
  for (let dx = -RING; dx <= RING; dx += 1) {
    for (let dz = -RING; dz <= RING; dz += 1) {
      want.add(patchKey(pcx + dx, pcz + dz));
    }
  }
  const keep: Mesh[] = [];
  let changed = bank.patches.length === 0;
  for (const mesh of bank.patches) {
    const key = patchKey(mesh.userData.cx as number, mesh.userData.cz as number);
    if (want.has(key)) {
      keep.push(mesh);
      want.delete(key);
    } else {
      changed = true;
      bank.group.remove(mesh);
      mesh.geometry.dispose();
    }
  }
  for (const key of want) {
    changed = true;
    const [sx, sz] = key.split(":");
    const mesh = makePatch(Number(sx), Number(sz), sample, biomeAt, quality);
    bank.group.add(mesh);
    keep.push(mesh);
  }
  bank.patches = keep;
  bank.meshes = [bank.coarse, ...keep];
  if (changed) {
    rebuildHeightAttribute(
      bank.coarse,
      bank.coarse.userData.minX as number,
      bank.coarse.userData.maxX as number,
      bank.coarse.userData.minZ as number,
      bank.coarse.userData.maxZ as number,
      bank.coarse.userData.segX as number,
      bank.coarse.userData.segZ as number,
      sample,
    );
    sinkCoarseUnderPatches(bank.coarse, keep);
    bank.coarse.geometry.computeBoundsTree();
  }
}

function sinkCoarseUnderPatches(coarse: Mesh, patches: Mesh[]): void {
  if (!patches.length) return;
  const pos = coarse.geometry.getAttribute("position");
  const arr = pos.array as Float32Array;
  const boxes = patches.map((p) => ({
    minX: (p.userData.minX as number) + 8,
    maxX: (p.userData.maxX as number) - 8,
    minZ: (p.userData.minZ as number) + 8,
    maxZ: (p.userData.maxZ as number) - 8,
  }));
  for (let i = 0; i < pos.count; i += 1) {
    const x = arr[i * 3]!;
    const z = arr[i * 3 + 2]!;
    for (const b of boxes) {
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) {
        arr[i * 3 + 1] = SEA_LEVEL - 14;
        break;
      }
    }
  }
  pos.needsUpdate = true;
  coarse.geometry.computeVertexNormals();
}

export function pickTerrainMesh(meshes: Mesh[], x: number, z: number): Mesh | undefined {
  let best: Mesh | undefined;
  let bestPri = -1;
  for (const mesh of meshes) {
    if (!mesh.visible && ((mesh.userData.priority as number) ?? 0) > 0) continue;
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
  sinkCoarseUnderPatches(bank.coarse, bank.patches);
  bank.coarse.geometry.computeBoundsTree();
}
