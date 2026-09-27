import { BIBLE } from "./bible";

export interface District {
  id: string;
  mountainId: string;
  name: string;
  x: number;
  z: number;
  job: string;
}

export const DISTRICTS: District[] = BIBLE.filter((f) => f.mesh !== "skip").map((f) => ({
  id: f.id,
  mountainId: f.mountainId,
  name: f.name,
  x: f.x,
  z: f.z,
  job: f.source,
}));

export function districtsForMountains(ids: string[]): District[] {
  const set = new Set(ids);
  return DISTRICTS.filter((d) => set.has(d.mountainId));
}
