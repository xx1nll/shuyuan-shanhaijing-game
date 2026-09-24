import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  CatmullRomCurve3,
  Color,
  DoubleSide,
  Group,
  InstancedMesh,
  LatheGeometry,
  LinearFilter,
  LinearMipmapLinearFilter,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  RepeatWrapping,
  SRGBColorSpace,
  SphereGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
} from "three";

export function peltMap(
  base: string,
  paint?: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
): CanvasTexture {
  const w = 512;
  const h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 1800; i += 1) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    ctx.fillStyle = `rgba(0,0,0,${0.04 + Math.random() * 0.08})`;
    ctx.fillRect(x, y, 1, 4 + Math.random() * 8);
  }
  paint?.(ctx, w, h);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.minFilter = LinearMipmapLinearFilter;
  tex.magFilter = LinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

const mats = new Map<string, MeshStandardMaterial>();

export function pelt(
  key: string,
  hex: string,
  extras: ConstructorParameters<typeof MeshStandardMaterial>[0] = {},
  paint?: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
): MeshStandardMaterial {
  const hit = mats.get(key);
  if (hit) return hit;
  const mat = new MeshStandardMaterial({
    map: peltMap(hex, paint),
    roughness: 0.82,
    metalness: 0,
    ...extras,
  });
  mats.set(key, mat);
  return mat;
}

export function addMesh(parent: Object3D, mesh: Mesh, x = 0, y = 0, z = 0): Mesh {
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export function tube(
  pts: [number, number, number][],
  radius: number,
  tubular = 24,
  radial = 10,
): TubeGeometry {
  const curve = new CatmullRomCurve3(pts.map((p) => new Vector3(...p)));
  return new TubeGeometry(curve, tubular, radius, radial, false);
}

export function lathe(profile: [number, number][], segments = 24): LatheGeometry {
  return new LatheGeometry(
    profile.map(([x, y]) => new Vector2(x, y)),
    segments,
  );
}

/** Elliptical tapered loft along a polyline. flatten < 1 squashes X. */
export function loftTube(
  pts: [number, number, number][],
  radii: number | number[],
  tubular = 16,
  radial = 8,
  flatten = 0.62,
): BufferGeometry {
  const curve = new CatmullRomCurve3(pts.map((p) => new Vector3(...p)));
  const frames = curve.computeFrenetFrames(tubular, false);
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const radiusAt = (t: number): number => {
    if (typeof radii === "number") return radii;
    if (radii.length === 1) return radii[0]!;
    const f = t * (radii.length - 1);
    const i = Math.min(radii.length - 2, Math.floor(f));
    const u = f - i;
    return radii[i]! * (1 - u) + radii[i + 1]! * u;
  };
  for (let i = 0; i <= tubular; i += 1) {
    const t = i / tubular;
    const p = curve.getPointAt(t);
    const N = frames.normals[i]!;
    const B = frames.binormals[i]!;
    const rt = radiusAt(t);
    for (let j = 0; j < radial; j += 1) {
      const a = (j / radial) * Math.PI * 2;
      const vx = N.clone().multiplyScalar(Math.cos(a) * rt * flatten);
      const vy = B.clone().multiplyScalar(Math.sin(a) * rt);
      const v = p.clone().add(vx).add(vy);
      positions.push(v.x, v.y, v.z);
      uvs.push(j / radial, t);
    }
  }
  for (let i = 0; i < tubular; i += 1) {
    for (let j = 0; j < radial; j += 1) {
      const a = i * radial + j;
      const b = i * radial + ((j + 1) % radial);
      const c = (i + 1) * radial + j;
      const d = (i + 1) * radial + ((j + 1) % radial);
      indices.push(a, c, b, b, c, d);
    }
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
  geo.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

export function taperedLimb(
  parent: Object3D,
  from: [number, number, number],
  to: [number, number, number],
  radius: number,
  material: MeshStandardMaterial,
): Mesh {
  const mid: [number, number, number] = [
    (from[0] + to[0]) * 0.5,
    (from[1] + to[1]) * 0.48,
    (from[2] + to[2]) * 0.5,
  ];
  return addMesh(parent, new Mesh(loftTube([from, mid, to], [radius * 1.2, radius, radius * 0.42], 8, 7, 0.72), material));
}

export function limb(
  parent: Object3D,
  from: [number, number, number],
  to: [number, number, number],
  radius: number,
  material: MeshStandardMaterial,
): Mesh {
  return taperedLimb(parent, from, to, radius, material);
}

export function eye(
  parent: Object3D,
  x: number,
  y: number,
  z: number,
  r = 0.035,
  irisHex = 0x1a120c,
  glow = 0.15,
): void {
  const white = new MeshStandardMaterial({ color: 0xf4f0e6, roughness: 0.35 });
  const iris = new MeshStandardMaterial({
    color: irisHex,
    roughness: 0.2,
    emissive: new Color(irisHex),
    emissiveIntensity: glow,
  });
  addMesh(parent, new Mesh(new SphereGeometry(r, 10, 8), white), x, y, z);
  addMesh(parent, new Mesh(new SphereGeometry(r * 0.55, 8, 6), iris), x, y, z + r * 0.45);
}

/** Spine along +Z. Profile is [radius, along-spine] from rump (−) to chest (+). */
export function barrel(
  parent: Object3D,
  profile: [number, number][],
  material: MeshStandardMaterial,
  y: number,
  flatten = 0.58,
): Mesh {
  const mesh = new Mesh(lathe(profile, 18), material);
  mesh.rotation.x = Math.PI / 2;
  mesh.scale.x = flatten;
  return addMesh(parent, mesh, 0, y, 0);
}

export function muzzle(
  parent: Object3D,
  material: MeshStandardMaterial,
  x: number,
  y: number,
  z: number,
  s = 1,
): Mesh {
  const mesh = new Mesh(
    loftTube(
      [
        [x, y, z],
        [x, y - 0.01 * s, z + 0.07 * s],
        [x, y - 0.02 * s, z + 0.14 * s],
      ],
      [0.055 * s, 0.042 * s, 0.018 * s],
      8,
      8,
      0.78,
    ),
    material,
  );
  return addMesh(parent, mesh);
}

/** Flattened cranium (lathe around Y). Not a sphere. */
export function cranium(
  parent: Object3D,
  material: MeshStandardMaterial,
  s = 1,
  flatten = 0.78,
): Mesh {
  const mesh = new Mesh(
    lathe(
      [
        [0.01 * s, -0.06 * s],
        [0.07 * s, -0.05 * s],
        [0.1 * s, 0],
        [0.085 * s, 0.07 * s],
        [0.04 * s, 0.11 * s],
        [0, 0.12 * s],
      ],
      12,
    ),
    material,
  );
  mesh.scale.x = flatten;
  mesh.scale.z = 1.12;
  return addMesh(parent, mesh);
}

export function cheek(
  parent: Object3D,
  material: MeshStandardMaterial,
  x: number,
  y: number,
  z: number,
  s = 1,
): Mesh {
  const mesh = new Mesh(
    lathe(
      [
        [0, 0],
        [0.035 * s, 0.01],
        [0.04 * s, 0.04 * s],
        [0.02 * s, 0.07 * s],
        [0, 0.08 * s],
      ],
      8,
    ),
    material,
  );
  mesh.scale.z = 0.7;
  mesh.rotation.z = x < 0 ? 0.4 : -0.4;
  return addMesh(parent, mesh, x, y, z);
}

export function brow(
  parent: Object3D,
  material: MeshStandardMaterial,
  y: number,
  z: number,
  s = 1,
): Mesh {
  const mesh = new Mesh(
    loftTube(
      [
        [-0.07 * s, y, z],
        [0, y + 0.012 * s, z + 0.01],
        [0.07 * s, y, z],
      ],
      [0.016 * s, 0.02 * s, 0.016 * s],
      6,
      6,
      0.55,
    ),
    material,
  );
  return addMesh(parent, mesh);
}

export function ear(
  parent: Object3D,
  x: number,
  y: number,
  z: number,
  material: MeshStandardMaterial,
  s = 1,
): Mesh {
  const mesh = new Mesh(
    lathe(
      [
        [0, 0],
        [0.045 * s, 0.012],
        [0.05 * s, 0.07 * s],
        [0.02 * s, 0.15 * s],
        [0, 0.18 * s],
      ],
      8,
    ),
    material,
  );
  mesh.scale.z = 0.45;
  mesh.rotation.z = x < 0 ? 0.55 : -0.55;
  mesh.rotation.x = -0.25;
  return addMesh(parent, mesh, x, y, z);
}

export function fanCard(width: number, height: number, material: MeshStandardMaterial): Mesh {
  const geo = new PlaneGeometry(width, height, 1, 4);
  const mesh = new Mesh(geo, material);
  mesh.castShadow = true;
  return mesh;
}

const furGeo = new PlaneGeometry(0.045, 0.11, 1, 2);
furGeo.translate(0, 0.055, 0);

export function furSpray(
  parent: Object3D,
  material: MeshStandardMaterial,
  count: number,
  around: { x: number; y: number; z: number; rx: number; ry: number; rz: number },
): InstancedMesh {
  const mat = material.clone();
  mat.side = DoubleSide;
  const mesh = new InstancedMesh(furGeo, mat, count);
  mesh.castShadow = true;
  const dummy = new Object3D();
  for (let i = 0; i < count; i += 1) {
    dummy.position.set(
      around.x + (Math.random() - 0.5) * around.rx * 2,
      around.y + (Math.random() - 0.5) * around.ry * 2,
      around.z + (Math.random() - 0.5) * around.rz * 2,
    );
    dummy.rotation.set((Math.random() - 0.5) * 0.8, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.5);
    dummy.scale.set(0.7 + Math.random() * 0.6, 0.8 + Math.random() * 0.7, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  parent.add(mesh);
  return mesh;
}

export function markPart(mesh: Mesh, part: string): Mesh {
  mesh.userData.part = part;
  return mesh;
}

export { Color, Group, Mesh, MeshStandardMaterial, PlaneGeometry, SphereGeometry, Vector3 };
