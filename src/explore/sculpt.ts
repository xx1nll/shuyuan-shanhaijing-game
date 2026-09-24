import baked from "./data/nanshan-sculpt.json";

export interface SculptGrid {
  originX: number;
  originZ: number;
  cell: number;
  cols: number;
  rows: number;
  delta: number[];
}

function cloneGrid(src: SculptGrid): SculptGrid {
  return {
    originX: src.originX,
    originZ: src.originZ,
    cell: src.cell,
    cols: src.cols,
    rows: src.rows,
    delta: src.delta.length === src.cols * src.rows ? src.delta.slice() : new Array(src.cols * src.rows).fill(0),
  };
}

let live: SculptGrid = cloneGrid(baked as SculptGrid);

export function sculptGrid(): SculptGrid {
  return live;
}

export function resetSculptLive(): void {
  live = cloneGrid(baked as SculptGrid);
}

function idx(ix: number, iz: number): number {
  return iz * live.cols + ix;
}

export function sampleSculpt(x: number, z: number): number {
  const { originX, originZ, cell, cols, rows, delta } = live;
  if (delta.length !== cols * rows) return 0;
  const fx = (x - originX) / cell;
  const fz = (z - originZ) / cell;
  const x0 = Math.floor(fx);
  const z0 = Math.floor(fz);
  if (x0 < 0 || z0 < 0 || x0 >= cols - 1 || z0 >= rows - 1) return 0;
  const tx = fx - x0;
  const tz = fz - z0;
  const h00 = delta[idx(x0, z0)] ?? 0;
  const h10 = delta[idx(x0 + 1, z0)] ?? 0;
  const h01 = delta[idx(x0, z0 + 1)] ?? 0;
  const h11 = delta[idx(x0 + 1, z0 + 1)] ?? 0;
  return h00 * (1 - tx) * (1 - tz) + h10 * tx * (1 - tz) + h01 * (1 - tx) * tz + h11 * tx * tz;
}

export type SculptBrush = "raise" | "lower" | "smooth";

export function applySculptBrush(x: number, z: number, brush: SculptBrush, radius = 7, strength = 0.55): void {
  const { originX, originZ, cell, cols, rows } = live;
  if (live.delta.length !== cols * rows) live.delta = new Array(cols * rows).fill(0);
  const minIX = Math.max(0, Math.floor((x - radius - originX) / cell));
  const maxIX = Math.min(cols - 1, Math.ceil((x + radius - originX) / cell));
  const minIZ = Math.max(0, Math.floor((z - radius - originZ) / cell));
  const maxIZ = Math.min(rows - 1, Math.ceil((z + radius - originZ) / cell));
  for (let iz = minIZ; iz <= maxIZ; iz += 1) {
    for (let ix = minIX; ix <= maxIX; ix += 1) {
      const wx = originX + ix * cell;
      const wz = originZ + iz * cell;
      const d = Math.hypot(wx - x, wz - z);
      if (d > radius) continue;
      const w = 1 - d / radius;
      const i = idx(ix, iz);
      const h = live.delta[i] ?? 0;
      if (brush === "raise") live.delta[i] = h + strength * w;
      else if (brush === "lower") live.delta[i] = h - strength * w;
      else {
        const avg =
          ((live.delta[idx(Math.max(0, ix - 1), iz)] ?? h) +
            (live.delta[idx(Math.min(cols - 1, ix + 1), iz)] ?? h) +
            (live.delta[idx(ix, Math.max(0, iz - 1))] ?? h) +
            (live.delta[idx(ix, Math.min(rows - 1, iz + 1))] ?? h)) /
          4;
        live.delta[i] = h + (avg - h) * 0.4 * w;
      }
    }
  }
}

export function downloadSculptJson(): void {
  const blob = new Blob([JSON.stringify(live)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "nanshan-sculpt.json";
  a.click();
  URL.revokeObjectURL(a.href);
}
