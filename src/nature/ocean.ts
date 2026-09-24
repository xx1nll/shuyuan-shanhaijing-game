import {
  ClampToEdgeWrapping,
  Color,
  DataTexture,
  LinearFilter,
  Mesh,
  PlaneGeometry,
  RGBAFormat,
  ShaderMaterial,
  UnsignedByteType,
  Vector2,
  Vector3,
} from "three";
import { SEA_LEVEL } from "../explore/nanshan";
import { C } from "../style/palette";

const H_SCALE = 40;
const H_BIAS = 4;

function dummyLand(): DataTexture {
  const tex = new DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1, RGBAFormat, UnsignedByteType);
  tex.needsUpdate = true;
  return tex;
}

const vertex = /* glsl */ `
  uniform float uTime;
  varying vec3 vWorld;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.45 + position.x * 0.045 + position.z * 0.038) * 0.14;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const fragment = /* glsl */ `
  varying vec3 vWorld;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uCam;
  uniform float uHole;
  uniform float uLandOn;
  uniform sampler2D uLand;
  uniform vec2 uLandMin;
  uniform vec2 uLandSize;
  uniform float uSea;
  uniform float uHScale;
  uniform float uHBias;

  void main() {
    float shore = 0.35;
    if (uLandOn > 0.5) {
      vec2 uv = (vWorld.xz - uLandMin) / uLandSize;
      if (uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0) {
        float h = texture2D(uLand, uv).r * uHScale - uHBias;
        if (h > uSea - 0.25) discard;
        shore = 1.0 - smoothstep(uSea - 1.4, uSea - 0.2, h);
      }
    } else if (uHole > 0.01) {
      float d = length(vWorld.xz);
      if (d < uHole) discard;
    }
    vec3 col = mix(uDeep, uShallow, shore);
    float rim = pow(1.0 - max(dot(normalize(uCam - vWorld), vec3(0.0, 1.0, 0.0)), 0.0), 2.4);
    col = mix(col, uShallow, rim * 0.35);
    gl_FragColor = vec4(col, 0.86);
  }
`;

export function createLandMask(res: number): DataTexture {
  const tex = new DataTexture(new Uint8Array(res * res * 4), res, res, RGBAFormat, UnsignedByteType);
  tex.wrapS = tex.wrapT = ClampToEdgeWrapping;
  tex.minFilter = LinearFilter;
  tex.magFilter = LinearFilter;
  tex.flipY = false;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

export function writeLandMask(tex: DataTexture, heights: number[], res: number): void {
  const buf = tex.image.data as Uint8Array;
  const n = res * res;
  for (let i = 0; i < n; i += 1) {
    const h = heights[i] ?? 0;
    const v = Math.max(0, Math.min(255, ((h + H_BIAS) / H_SCALE) * 255));
    const o = i * 4;
    buf[o] = v;
    buf[o + 1] = v;
    buf[o + 2] = v;
    buf[o + 3] = 255;
  }
  tex.needsUpdate = true;
}

export function bindLandMask(
  mesh: Mesh,
  tex: DataTexture,
  minX: number,
  minZ: number,
  size: number,
): void {
  const mat = mesh.material as ShaderMaterial;
  mat.uniforms.uLand!.value = tex;
  mat.uniforms.uLandOn!.value = 1;
  (mat.uniforms.uLandMin!.value as Vector2).set(minX, minZ);
  (mat.uniforms.uLandSize!.value as Vector2).set(size, size);
}

export function createOcean(opts: {
  x: number;
  z: number;
  width: number;
  depth: number;
  qualityHigh: boolean;
  hole?: number;
}): Mesh {
  const segs = opts.qualityHigh ? 14 : 8;
  const geo = new PlaneGeometry(opts.width, opts.depth, segs, Math.max(6, Math.floor(segs / 2)));
  geo.rotateX(-Math.PI / 2);
  const mat = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new Color(C.seaDeep) },
      uShallow: { value: new Color(C.sea) },
      uCam: { value: new Vector3() },
      uHole: { value: opts.hole ?? 0 },
      uLandOn: { value: 0 },
      uLand: { value: dummyLand() },
      uLandMin: { value: new Vector2(-1, -1) },
      uLandSize: { value: new Vector2(2, 2) },
      uSea: { value: SEA_LEVEL },
      uHScale: { value: H_SCALE },
      uHBias: { value: H_BIAS },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  });
  const mesh = new Mesh(geo, mat);
  mesh.position.set(opts.x, SEA_LEVEL, opts.z);
  mesh.renderOrder = 0;
  return mesh;
}

export function updateOcean(mesh: Mesh, time: number, camX: number, camY: number, camZ: number): void {
  const mat = mesh.material as ShaderMaterial;
  mat.uniforms.uTime!.value = time;
  (mat.uniforms.uCam!.value as Vector3).set(camX, camY, camZ);
}
