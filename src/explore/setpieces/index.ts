import { Group } from "three";
import { fillWorld } from "./place";

export { fillMountain, fillWorld } from "./place";

export function fillAll(ground: (x: number, z: number) => number): Group {
  return fillWorld(ground);
}
