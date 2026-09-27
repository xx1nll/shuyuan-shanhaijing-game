import { Color, DoubleSide, Group, InstancedMesh, Mesh, MeshLambertMaterial, Object3D } from "three";
import { SEA_LEVEL } from "../explore/nanshan";
import type { Biome } from "../explore/nanshan";
import type { Quality } from "../quality";
import { readQuality } from "../quality";
import { blade, bladeMat, floretMat, kite } from "../style/facets";
import { C } from "../style/palette";
import type { HeightSampler } from "./terrain";

const dummy = new Object3D();
const SINK = 0.02;
const CHUNK = 200;

interface GrassState {
  terrain: Mesh | Mesh[];
  sample: HeightSampler;
  biomeAt: (x: number, z: number) => Biome;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  perChunk: number;
  geo: ReturnType<typeof blade>;
  mat: MeshLambertMaterial;
  chunks: Map<string, InstancedMesh>;
}

function chunkKey(cx: number, cz: number): string {
  return `${cx}:${cz}`;
}

function fillChunk(state: GrassState, cx: number, cz: number): InstancedMesh | undefined {
  const x0 = Math.max(state.minX, cx * CHUNK);
  const x1 = Math.min(state.maxX, (cx + 1) * CHUNK);
  const z0 = Math.max(state.minZ, cz * CHUNK);
  const z1 = Math.min(state.maxZ, (cz + 1) * CHUNK);
  if (x1 <= x0 || z1 <= z0) return undefined;
  const n = state.perChunk;
  const mesh = new InstancedMesh(state.geo, state.mat, n);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.frustumCulled = true;
  mesh.userData.cx = cx;
  mesh.userData.cz = cz;
  const color = new Color();
  let placed = 0;
  let attempts = 0;
  while (placed < n && attempts < n * 8) {
    attempts += 1;
    const x = x0 + Math.random() * (x1 - x0);
    const z = z0 + Math.random() * (z1 - z0);
    const biome = state.biomeAt(x, z);
    const allow =
      biome === "cassia" ||
      biome === "jade" ||
      biome === "foothill" ||
      biome === "clearing" ||
      biome === "shade" ||
      biome === "ore";
    if (!allow) continue;
    const y = state.sample(x, z);
    if (y < SEA_LEVEL + 0.35) continue;
    dummy.position.set(x, y - SINK, z);
    dummy.rotation.set(0, Math.random() * Math.PI, 0);
    dummy.scale.set(1, 0.85 + Math.random() * 0.45, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(placed, dummy.matrix);
    color.set(biome === "jade" ? C.jade : C.grass);
    mesh.setColorAt(placed, color);
    placed += 1;
  }
  mesh.count = placed;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  if (placed === 0) return undefined;
  mesh.computeBoundingSphere();
  return mesh;
}

export function createGrass(opts: {
  terrain: Mesh | Mesh[];
  sample: HeightSampler;
  biomeAt: (x: number, z: number) => Biome;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  quality: Quality;
}): Group {
  const group = new Group();
  const geo = blade(0.08, 0.22);
  const mat = new MeshLambertMaterial({
    color: C.grass,
    flatShading: true,
    side: DoubleSide,
    vertexColors: false,
  });
  const cap = opts.quality === "high" ? 3200 : 1600;
  const state: GrassState = {
    terrain: opts.terrain,
    sample: opts.sample,
    biomeAt: opts.biomeAt,
    minX: opts.minX,
    maxX: opts.maxX,
    minZ: opts.minZ,
    maxZ: opts.maxZ,
    perChunk: Math.max(40, Math.floor(cap / 9)),
    geo,
    mat,
    chunks: new Map(),
  };
  group.userData.grass = state;
  return group;
}

export function updateGrass(group: Group, _time: number, x?: number, z?: number): void {
  if (x === undefined || z === undefined) return;
  const state = group.userData.grass as GrassState | undefined;
  if (!state) return;
  const pcx = Math.floor(x / CHUNK);
  const pcz = Math.floor(z / CHUNK);
  const want = new Set<string>();
  for (let dx = -1; dx <= 1; dx += 1) {
    for (let dz = -1; dz <= 1; dz += 1) {
      want.add(chunkKey(pcx + dx, pcz + dz));
    }
  }
  for (const key of [...state.chunks.keys()]) {
    if (want.has(key)) continue;
    const mesh = state.chunks.get(key);
    if (mesh) group.remove(mesh);
    state.chunks.delete(key);
  }
  for (const key of want) {
    if (state.chunks.has(key)) continue;
    const [cx, cz] = key.split(":").map(Number);
    const mesh = fillChunk(state, cx!, cz!);
    if (!mesh) continue;
    state.chunks.set(key, mesh);
    group.add(mesh);
  }
}

const tuftDummy = new Object3D();
const tuftBlade = blade(0.08, 0.55);
const tuftFloret = kite(0.05, 0.07);

function rand(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** 祝餘 — taller grass clump with florets, not a tree. */
export function makeZhuyuTuft(): Group {
  const group = new Group();
  const clones = readQuality() === "high" ? 3 : 1;
  const blades = clones === 1 ? 6 : 9;
  const bladeMesh = new InstancedMesh(tuftBlade, bladeMat(), blades);
  bladeMesh.castShadow = false;
  for (let i = 0; i < blades; i += 1) {
    tuftDummy.position.set((rand(i + 2) - 0.5) * 0.14, -0.02, (rand(i + 5) - 0.5) * 0.14);
    tuftDummy.rotation.set(0.08, (i / blades) * Math.PI * 2 + rand(i + 11) * 0.15, 0);
    tuftDummy.scale.set(1.1, 1.35 + rand(i + 17) * 0.5, 1);
    tuftDummy.updateMatrix();
    bladeMesh.setMatrixAt(i, tuftDummy.matrix);
  }
  bladeMesh.instanceMatrix.needsUpdate = true;
  bladeMesh.computeBoundingSphere();
  group.add(bladeMesh);
  const florets = clones * 5;
  const floretMesh = new InstancedMesh(tuftFloret, floretMat(), florets);
  for (let i = 0; i < florets; i += 1) {
    tuftDummy.position.set((rand(i + 21) - 0.5) * 0.12, 0.48 + rand(i + 23) * 0.12, (rand(i + 29) - 0.5) * 0.12);
    tuftDummy.rotation.set(0.35, (i / 5) * Math.PI * 2, 0.08);
    tuftDummy.scale.setScalar(1);
    tuftDummy.updateMatrix();
    floretMesh.setMatrixAt(i, tuftDummy.matrix);
  }
  floretMesh.instanceMatrix.needsUpdate = true;
  floretMesh.computeBoundingSphere();
  group.add(floretMesh);
  group.userData.plantId = "zhuyu";
  group.userData.grassVariant = "zhuyu";
  return group;
}
