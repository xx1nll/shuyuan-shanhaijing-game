import {
  Box3,
  Color,
  Group,
  LinearFilter,
  LinearMipmapLinearFilter,
  LoadingManager,
  RepeatWrapping,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector3,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import type { Quality } from "../quality";
import type { LeafMaps } from "../catalog/leafMaps";
import {
  cassiaShape,
  datePlumShape,
  lobedMulberry,
  mulberrySimpleShape,
  ophiopogonShape,
  photoLeafMaps,
} from "../catalog/leafMaps";
import fetchedIndex from "../../assets/fetched/index.json";

type SlotRec = {
  id?: string;
  kind?: string;
  path?: string;
  maps?: { map?: string; normalMap?: string; roughnessMap?: string };
  heightMeters?: number;
  yaw?: number;
  use?: string;
};

const fileUrls = import.meta.glob("../../assets/fetched/**/*.{glb,gltf,jpg,jpeg,png,webp,bin}", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

const glbCache = new Map<string, Group>();
const leafCache = new Map<string, LeafMaps>();
const barkCache = new Map<string, { map: Texture; normalMap?: Texture; roughnessMap?: Texture }>();
let maxTex = 2048;
let preparedFor: Quality | null = null;
let loaders: { gltf: GLTFLoader | null; textures: TextureLoader; draco: DRACOLoader | null } | null = null;

function needsGltfLoader(): boolean {
  return Object.values(slots()).some((s) => s.kind === "glb" || s.kind === "gltf" || s.use === "part-glb");
}

function makeGltfLoader(manager?: LoadingManager): GLTFLoader {
  if (!loaders) {
    loaders = { gltf: null, textures: new TextureLoader(), draco: null };
  }
  if (!loaders.draco) {
    const draco = new DRACOLoader();
    draco.setDecoderPath("/draco/");
    loaders.draco = draco;
  }
  const gltf = new GLTFLoader(manager);
  gltf.setDRACOLoader(loaders.draco);
  gltf.setMeshoptDecoder(MeshoptDecoder);
  return gltf;
}

function getLoaders() {
  if (!loaders) {
    loaders = { gltf: null, textures: new TextureLoader(), draco: null };
  }
  if (!loaders.gltf && needsGltfLoader()) {
    loaders.gltf = makeGltfLoader();
  }
  return loaders;
}

function urlFor(rel: string | undefined): string | undefined {
  if (!rel) return undefined;
  const needle = rel.replaceAll("\\", "/");
  for (const [key, url] of Object.entries(fileUrls)) {
    const norm = key.replaceAll("\\", "/");
    if (norm.endsWith("/" + needle) || norm.endsWith(needle)) return url;
  }
  return undefined;
}

function slots(): Record<string, SlotRec> {
  return (fetchedIndex as { slots?: Record<string, SlotRec> }).slots ?? {};
}

export function hasFetched(id: string): boolean {
  const rec = slots()[id];
  return Boolean(rec?.path && urlFor(rec.path));
}

function remapGltfUrl(url: string, recPath: string): string {
  const folder = recPath.replace(/[^/]+$/, "").replaceAll("\\", "/");
  const clean = (url.split("?")[0] ?? url).replaceAll("\\", "/");
  const texAt = clean.lastIndexOf("/textures/");
  const needle = texAt >= 0 ? clean.slice(texAt + 1) : (clean.split("/").pop() || clean);
  return urlFor(folder + needle) || urlFor(needle) || url;
}

function capTexture(tex: Texture, cap: number): void {
  const img = tex.image as { width?: number; height?: number } | undefined;
  if (!img?.width || !img.height) return;
  const longest = Math.max(img.width, img.height);
  if (longest <= cap) return;
  const canvas = document.createElement("canvas");
  const scale = cap / longest;
  canvas.width = Math.max(1, Math.round(img.width * scale));
  canvas.height = Math.max(1, Math.round(img.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.drawImage(img as CanvasImageSource, 0, 0, canvas.width, canvas.height);
  tex.image = canvas;
  tex.needsUpdate = true;
}

function capPartTextures(root: Group): void {
  root.traverse((obj) => {
    const mesh = obj as {
      material?: { map?: Texture; normalMap?: Texture; roughnessMap?: Texture } | Array<{ map?: Texture }>;
    };
    const mats = mesh.material ? (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) : [];
    for (const mat of mats) {
      if (mat.map) capTexture(mat.map, maxTex);
      const n = mat as { normalMap?: Texture; roughnessMap?: Texture };
      if (n.normalMap) capTexture(n.normalMap, maxTex);
      if (n.roughnessMap) capTexture(n.roughnessMap, maxTex);
    }
  });
}

async function loadGltfRoot(url: string, rec: SlotRec): Promise<Group | null> {
  getLoaders();
  let loader = loaders?.gltf;
  if (rec.kind === "gltf" && rec.path) {
    const manager = new LoadingManager();
    manager.setURLModifier((u) => remapGltfUrl(u, rec.path!));
    loader = makeGltfLoader(manager);
  }
  if (!loader) return null;
  const file = await loader.loadAsync(url);
  const root = file.scene;
  capPartTextures(root);
  if (rec.use !== "part-glb") {
    normalizeRoot(root, rec.heightMeters ?? 1, rec.yaw ?? 0);
  }
  return root;
}

function normalizeRoot(root: Group, heightMeters: number, yaw: number): void {
  root.updateMatrixWorld(true);
  const box = new Box3().setFromObject(root);
  const size = box.getSize(new Vector3());
  const h = size.y || 1;
  const s = heightMeters / h;
  root.scale.multiplyScalar(s);
  root.rotation.y += yaw;
  root.updateMatrixWorld(true);
  box.setFromObject(root);
  root.position.y -= box.min.y;
  root.updateMatrixWorld(true);
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    const t = window.setTimeout(() => reject(new Error(`timeout ${url}`)), 12000);
    img.onload = () => {
      window.clearTimeout(t);
      resolve(img);
    };
    img.onerror = () => {
      window.clearTimeout(t);
      reject(new Error(`image ${url}`));
    };
    img.src = url;
  });
}

const LEAF_SHAPES: Record<string, (ctx: CanvasRenderingContext2D, s: number) => void> = {
  "tex/cassia-leaf": cassiaShape,
  "tex/mulberry-leaf": lobedMulberry,
  "tex/dateplum-leaf": datePlumShape,
  "tex/mondo-leaf": ophiopogonShape,
};

export async function prepareLibrary(quality: Quality): Promise<void> {
  if (preparedFor && preparedFor !== quality) {
    glbCache.clear();
    leafCache.clear();
    barkCache.clear();
    preparedFor = null;
  }
  if (preparedFor === quality) return;
  maxTex = quality === "high" ? 2048 : 1024;
  const { textures } = getLoaders();
  const all = slots();

  await Promise.race([
    Promise.all(
    Object.entries(all).map(async ([id, rec]) => {
      try {
        if (!rec.path) return;
        const url = urlFor(rec.path);
        if (!url) return;
        if (rec.kind === "glb" || rec.kind === "gltf") {
          const root = await loadGltfRoot(url, rec);
          if (root) glbCache.set(id, root);
          return;
        }
        if (rec.kind === "pbr" && rec.maps) {
          const mapUrl = urlFor(rec.maps.map);
          if (!mapUrl) return;
          const map = await Promise.race([
            textures.loadAsync(mapUrl),
            new Promise<never>((_, rej) => window.setTimeout(() => rej(new Error(`tex ${id}`)), 10000)),
          ]);
          map.colorSpace = SRGBColorSpace;
          map.wrapS = map.wrapT = RepeatWrapping;
          map.repeat.set(2, 4);
          map.minFilter = LinearMipmapLinearFilter;
          map.magFilter = LinearFilter;
          map.generateMipmaps = true;
          capTexture(map, maxTex);
          const bark: { map: Texture; normalMap?: Texture; roughnessMap?: Texture } = { map };
          if (rec.maps.normalMap) {
            const nUrl = urlFor(rec.maps.normalMap);
            if (nUrl) {
              const n = await Promise.race([
                textures.loadAsync(nUrl),
                new Promise<never>((_, rej) => window.setTimeout(() => rej(new Error(`nor ${id}`)), 10000)),
              ]);
              n.wrapS = n.wrapT = RepeatWrapping;
              n.repeat.set(2, 4);
              capTexture(n, maxTex);
              bark.normalMap = n;
            }
          }
          if (rec.maps.roughnessMap) {
            const rUrl = urlFor(rec.maps.roughnessMap);
            if (rUrl) {
              const r = await Promise.race([
                textures.loadAsync(rUrl),
                new Promise<never>((_, rej) => window.setTimeout(() => rej(new Error(`rough ${id}`)), 10000)),
              ]);
              r.wrapS = r.wrapT = RepeatWrapping;
              r.repeat.set(2, 4);
              capTexture(r, maxTex);
              bark.roughnessMap = r;
            }
          }
          barkCache.set(id, bark);
          return;
        }
        if (rec.kind === "atlas") {
          const img = await loadImage(url);
          if (id === "tex/mulberry-leaf") {
            const sz = Math.min(maxTex, 1024);
            leafCache.set(id, photoLeafMaps(img, lobedMulberry, sz));
            leafCache.set("tex/mulberry-simple", photoLeafMaps(img, mulberrySimpleShape, sz));
            return;
          }
          const shape = LEAF_SHAPES[id];
          if (shape) leafCache.set(id, photoLeafMaps(img, shape, Math.min(maxTex, 1024)));
          else {
            const map = await textures.loadAsync(url);
            map.colorSpace = SRGBColorSpace;
            capTexture(map, maxTex);
            leafCache.set(id, { map, normalMap: map });
          }
        }
      } catch (err) {
        console.warn(`[library] skip ${id}`, err);
      }
    }),
    ),
    new Promise<void>((res) => window.setTimeout(res, 18000)),
  ]);
  preparedFor = quality;
}

export function hasPart(id: string): boolean {
  return glbCache.has(id) || glbCache.has(`part/${id}`);
}

export function partTemplate(id: string): Group | null {
  return glbCache.get(id) ?? glbCache.get(`part/${id}`) ?? null;
}

export function cloneHeroGlb(id: string): Group | null {
  const src =
    glbCache.get(id) ??
    glbCache.get(`creature/${id}`) ??
    glbCache.get(`plant/${id}`) ??
    glbCache.get(`part/${id}`);
  if (!src) return null;
  return src.clone(true);
}

export function atlasLeaf(id: string): LeafMaps | null {
  return leafCache.get(id) ?? leafCache.get(`tex/${id}`) ?? null;
}

export function atlasBark(id: string): { map: Texture; normalMap?: Texture; roughnessMap?: Texture } | null {
  return barkCache.get(id) ?? barkCache.get(`tex/${id}`) ?? null;
}

export function atlasTex(id: string): Texture | null {
  return atlasLeaf(id)?.map ?? null;
}

export function tintGroup(root: Group, hex: string, amount = 0.55): void {
  const c = new Color(hex);
  root.traverse((obj) => {
    const mesh = obj as { material?: { color?: Color } | Array<{ color?: Color }> };
    const mats = mesh.material ? (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) : [];
    for (const mat of mats) {
      if (mat.color) mat.color.lerp(c, amount);
    }
  });
}
