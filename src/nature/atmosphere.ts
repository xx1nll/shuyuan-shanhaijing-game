import { Group, Mesh } from "three";
import type { Quality } from "../quality";
import { addFacet, box, octahedron } from "../style/facets";
import { C } from "../style/palette";
import { flatMat } from "../style/facets";

const cloudMat = () => flatMat(C.cloud);

function puff(parent: Group, x: number, y: number, z: number, sx: number, sy: number, sz: number, octa = false): void {
  const mesh = addFacet(parent, octa ? octahedron(0.55) : box(1, 1, 1), cloudMat(), x, y, z);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
}

function cluster(seed: number): Group {
  const g = new Group();
  const n = 4 + (seed % 4);
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2 + seed * 0.2;
    puff(
      g,
      Math.cos(a) * (1.2 + (i % 3) * 0.6),
      (i % 2) * 0.35,
      Math.sin(a) * (0.8 + (i % 2) * 0.5),
      2.2 + (i % 3) * 0.7,
      0.7 + (i % 2) * 0.25,
      1.4 + (i % 3) * 0.5,
      i % 3 === 0,
    );
  }
  return g;
}

export function createClouds(quality: Quality): { group: Group; update: (time: number) => void } {
  const group = new Group();
  const count = quality === "high" ? 16 : 8;
  for (let i = 0; i < count; i += 1) {
    const c = cluster(i * 17);
    const side = i % 2 === 0 ? -1 : 1;
    c.position.set((i - count / 2) * 140 + (i % 3) * 28, 148 + (i % 4) * 14, side * (180 + (i % 3) * 28));
    c.scale.setScalar(3.2 + (i % 3) * 1.1);
    group.add(c);
  }
  return {
    group,
    update(time: number) {
      group.position.x = Math.sin(time * 0.012) * 18;
    },
  };
}

export function createMist(
  cx: number,
  cz: number,
  y = 5.5,
): { group: Group; update: (time: number) => void } {
  const group = new Group();
  group.position.set(cx, y, cz);
  const mat = flatMat(C.cloud, { transparent: true, opacity: 0.16, depthWrite: false });
  for (let i = 0; i < 6; i += 1) {
    const mesh = new Mesh(box(4.5, 0.55, 2.2), mat);
    mesh.position.set((i % 3) * 3.2 - 3.2, (i % 2) * 0.35, Math.floor(i / 3) * 3.5 - 1.8);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    group.add(mesh);
  }
  return {
    group,
    update(time: number) {
      group.children.forEach((ch, i) => {
        ch.position.y = 0.15 + Math.sin(time * 0.4 + i) * 0.08;
      });
    },
  };
}
