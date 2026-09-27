import { Group } from "three";
import { fillWorld } from "./setpieces";

export const NEST_ROCK = { x: 1056, z: 16 };

export function createLandmarks(ground: (x: number, z: number) => number, _mountainIds?: string[]): Group {
  return fillWorld(ground);
}
