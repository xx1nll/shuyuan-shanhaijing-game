export type Quality = "high" | "low";

const KEY = "kunlun-quality";

export function readQuality(): Quality {
  const stored = localStorage.getItem(KEY);
  return stored === "low" ? "low" : "high";
}

export function writeQuality(quality: Quality): void {
  localStorage.setItem(KEY, quality);
}

export function grassCount(quality: Quality): number {
  return quality === "high" ? 12000 : 5000;
}

export function treePrototypeCount(quality: Quality): number {
  return quality === "high" ? 3 : 2;
}
