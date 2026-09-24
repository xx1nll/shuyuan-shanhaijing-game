import { Color, DoubleSide, Group, InstancedMesh, Mesh, MeshLambertMaterial, Object3D } from "three";
import { SEA_LEVEL } from "../explore/nanshan";
import type { Biome } from "../explore/nanshan";
import type { Quality } from "../quality";
import { grassCount, readQuality } from "../quality";
import { blade, bladeMat, floretMat, kite } from "../style/facets";
import { C } from "../style/palette";
import { surfaceAt } from "./terrain";
import type { HeightSampler } from "./terrain";
import { pickTerrainMesh } from "../explore/patches";

const dummy = new Object3D();
const SINK = 0.02;
const CHUNK = 160;

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
  const total = grassCount(opts.quality);
  const spanX = Math.max(1, opts.maxX - opts.minX);
  const minCX = Math.floor(opts.minX / CHUNK);
  const maxCX = Math.floor((opts.maxX - 0.01) / CHUNK);
  const color = new Color();

  for (let cx = minCX; cx <= maxCX; cx += 1) {
    const x0 = Math.max(opts.minX, cx * CHUNK);
    const x1 = Math.min(opts.maxX, (cx + 1) * CHUNK);
    const n = Math.max(12, Math.floor(total * ((x1 - x0) / spanX)));
    const mesh = new InstancedMesh(geo, mat, n);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    let placed = 0;
    let attempts = 0;
    while (placed < n && attempts < n * 8) {
      attempts += 1;
      const x = x0 + Math.random() * (x1 - x0);
      const z = opts.minZ + Math.random() * (opts.maxZ - opts.minZ);
      const biome = opts.biomeAt(x, z);
      const allow =
        biome === "cassia" || biome === "jade" || biome === "foothill" || biome === "clearing";
      if (!allow) continue;
      const meshHit = Array.isArray(opts.terrain) ? pickTerrainMesh(opts.terrain, x, z) : opts.terrain;
      if (!meshHit) continue;
      const hit = surfaceAt(meshHit, x, z, opts.sample(x, z));
      if (hit.y < SEA_LEVEL + 0.35 || hit.ny < 0.62) continue;
      dummy.position.set(x, hit.y - SINK, z);
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
    mesh.computeBoundingSphere();
    group.add(mesh);
  }
  return group;
}

export function updateGrass(_mesh: Group, _time: number): void {
  /* blades stay still so facets stay crisp */
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
