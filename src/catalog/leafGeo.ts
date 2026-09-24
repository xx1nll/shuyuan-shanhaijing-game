import { BufferAttribute, BufferGeometry } from "three";

/** Unit leaf in XY, midrib along +Y, cup in +Z, short petiole at the base. */
export function cuppedLeafGeo(cup = 0.14, segs = 8): BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const rows = segs + 3;

  const outline = (t: number): number => {
    if (t < 0.12) return 0.016 + t * 0.05;
    const u = (t - 0.12) / 0.88;
    const s = Math.sin(u * Math.PI);
    return s * (0.48 - 0.08 * Math.cos(u * Math.PI * 2));
  };

  for (let i = 0; i <= rows; i += 1) {
    const t = i / rows;
    const y = t * 1.08 - 0.16;
    const w = outline(t);
    const cupZ = t < 0.12 ? 0 : Math.sin(((t - 0.12) / 0.88) * Math.PI) * cup;
    positions.push(0, y, cupZ * 0.25);
    uvs.push(0.5, t);
    positions.push(-w, y, cupZ);
    uvs.push(0.5 - w, t);
    positions.push(w, y, cupZ);
    uvs.push(0.5 + w, t);
  }

  for (let i = 0; i < rows; i += 1) {
    const a = i * 3;
    const b = a + 3;
    indices.push(a, a + 1, b + 1, a, b + 1, b);
    indices.push(a, b + 2, a + 2, a, b, b + 2);
  }

  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
  geo.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

export function petalGeo(): BufferGeometry {
  return cuppedLeafGeo(0.08, 6);
}
