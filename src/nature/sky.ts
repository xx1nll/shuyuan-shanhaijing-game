import { Color, DirectionalLight, Group, HemisphereLight, MathUtils, Vector3 } from "three";
import type { Scene } from "three";
import type { Quality } from "../quality";
import { C } from "../style/palette";

const REACH = 78;

export function createSky(
  scene: Scene,
  quality: Quality = "high",
): { group: Group; sun: DirectionalLight; update: (elapsed: number, camX?: number, camZ?: number) => void } {
  const group = new Group();
  scene.background = new Color(C.sky);

  const hemi = new HemisphereLight(C.sky, C.sand, 0.95);
  group.add(hemi);

  const fill = new DirectionalLight(0xb8d4e8, 0.45);
  fill.castShadow = false;
  fill.position.set(-80, 50, -110);
  group.add(fill);

  const sun = new DirectionalLight(0xffd9a0, 1.12);
  sun.castShadow = true;
  const map = quality === "high" ? 1024 : 512;
  sun.shadow.mapSize.set(map, map);
  sun.shadow.camera.near = 4;
  sun.shadow.camera.far = 220;
  sun.shadow.camera.left = -REACH;
  sun.shadow.camera.right = REACH;
  sun.shadow.camera.top = REACH;
  sun.shadow.camera.bottom = -REACH;
  sun.shadow.bias = -0.0004;
  group.add(sun);
  group.add(sun.target);

  const sunPos = new Vector3();
  const update = (elapsed: number, camX = 0, camZ = 0) => {
    const elevation = 14 + Math.sin(elapsed * 0.02) * 1.5;
    const azimuth = 210;
    const phi = MathUtils.degToRad(90 - elevation);
    const theta = MathUtils.degToRad(azimuth);
    sunPos.setFromSphericalCoords(1, phi, theta);
    sun.target.position.set(camX, 0, camZ);
    sun.position.copy(sunPos).multiplyScalar(110).add(sun.target.position);
  };
  update(0);
  scene.add(group);
  return { group, sun, update };
}
