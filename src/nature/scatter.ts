import { Color, Group, InstancedMesh, Mesh, Object3D, type BufferGeometry } from "three";
import { SEA_LEVEL, type Biome } from "../explore/nanshan";
import { box, flatMat, octahedron } from "../style/facets";
import { C } from "../style/palette";
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
    case "barren":
      return C.rock;
    case "strange":
      return C.moss;
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
  const band = 340;
  const span = Math.max(1, opts.maxX - opts.minX);
  for (let x0 = opts.minX; x0 < opts.maxX; x0 += band) {
    const x1 = Math.min(opts.maxX, x0 + band);
    const share = (x1 - x0) / span;
    const n = Math.max(4, Math.floor(opts.count * share));
    const slabN = Math.floor(n * 0.62);
    const shardN = n - slabN;
    const slice = { ...opts, minX: x0, maxX: x1 };
    group.add(scatterLayer(slice, box(1.1, 0.7, 0.9), slabN, false));
    group.add(scatterLayer(slice, octahedron(0.55), shardN, true));
  }
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
  if (count < 1) {
    const empty = new InstancedMesh(geo, mat, 1);
    empty.count = 0;
    empty.visible = false;
    return empty;
  }
  const mesh = new InstancedMesh(geo, mat, count);
  mesh.castShadow = false;
  mesh.frustumCulled = true;
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
    const y = opts.sample(x, z);
    if (y < SEA_LEVEL) continue;
    const s = 0.55 + Math.random() * (biome === "ore" ? 1.7 : biome === "forbidden" ? 1.5 : 1.2);
    dummy.position.set(x, y - SINK + (crystals ? s * 0.45 : 0), z);
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
