import { Color, Group, InstancedMesh, Mesh, Object3D, type BufferGeometry } from "three";
import { SEA_LEVEL, type Biome } from "../explore/nanshan";
import { pickTerrainMesh } from "../explore/patches";
import { box, flatMat, octahedron } from "../style/facets";
import { C } from "../style/palette";
import { surfaceAt } from "./terrain";
import type { HeightSampler } from "./terrain";

const dummy = new Object3D();
const SINK = 0.02;
const TINT = new Color();

function rockTint(biome: Biome): string | null {
  switch (biome) {
    case "jade":
      return C.jade;
    case "ore":
    case "crown":
      return C.gold;
    case "forbidden":
    case "scree":
      return "#e8e0d4";
    case "shade":
      return C.jade;
    case "quarry":
    case "hollow":
      return C.lacquer;
    case "shelf":
      return C.moss;
    case "foothill":
    case "clearing":
      return C.rock;
    default:
      return null;
  }
}

export function createRocks(opts: {
  terrain: Mesh | Mesh[];
  sample: HeightSampler;
  biomeAt: (x: number, z: number) => Biome;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  count: number;
}): Group {
  const group = new Group();
  const slabN = Math.floor(opts.count * 0.62);
  const shardN = opts.count - slabN;
  group.add(scatterLayer(opts, box(1.1, 0.7, 0.9), slabN, false));
  group.add(scatterLayer(opts, octahedron(0.55), shardN, true));
  return group;
}

function scatterLayer(
  opts: {
    terrain: Mesh | Mesh[];
    sample: HeightSampler;
    biomeAt: (x: number, z: number) => Biome;
    minX: number;
    maxX: number;
    minZ: number;
    maxZ: number;
  },
  geo: BufferGeometry,
  count: number,
  crystals: boolean,
): InstancedMesh {
  const mat = flatMat("#f2eee6");
  const mesh = new InstancedMesh(geo, mat, count);
  mesh.castShadow = true;
  let n = 0;
  let tries = 0;
  while (n < count && tries < count * 12) {
    tries += 1;
    const x = opts.minX + Math.random() * (opts.maxX - opts.minX);
    const z = opts.minZ + Math.random() * (opts.maxZ - opts.minZ);
    const biome = opts.biomeAt(x, z);
    const tint = rockTint(biome);
    if (!tint) continue;
    if (crystals && biome !== "jade" && biome !== "ore" && biome !== "crown") continue;
    if (!crystals && (biome === "jade" || biome === "ore" || biome === "crown") && Math.random() < 0.55) continue;
    const meshHit = Array.isArray(opts.terrain) ? pickTerrainMesh(opts.terrain, x, z) : opts.terrain;
    if (!meshHit) continue;
    const hit = surfaceAt(meshHit, x, z, opts.sample(x, z));
    if (hit.y < SEA_LEVEL) continue;
    const minNy = biome === "forbidden" ? 0.22 : 0.55;
    if (hit.ny < minNy) continue;
    const s = 0.55 + Math.random() * (biome === "ore" ? 1.7 : biome === "forbidden" ? 1.5 : 1.2);
    dummy.position.set(x, hit.y - SINK + (crystals ? s * 0.45 : 0), z);
    dummy.rotation.set(0, Math.random() * Math.PI, crystals ? 0.35 : 0);
    dummy.scale.set(s, s * (crystals ? 0.9 + Math.random() * 0.5 : 0.45 + Math.random() * 0.4), s * (0.7 + Math.random() * 0.4));
    dummy.updateMatrix();
    mesh.setMatrixAt(n, dummy.matrix);
    TINT.set(tint);
    if (biome === "shade") TINT.offsetHSL(0, 0, -0.18);
    mesh.setColorAt(n, TINT);
    n += 1;
  }
  mesh.count = n;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.computeBoundingSphere();
  return mesh;
}
