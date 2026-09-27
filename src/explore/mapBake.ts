import { MOUNTAIN_COVER } from "../catalog/trees";
import { CANON } from "./canon";
import { RIVERS } from "./rivers";
import { MOUNTAINS, X_EAST, X_WEST, Z_NORTH, Z_SOUTH } from "./nanshan";

export interface MapBounds {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export const NANSHAN_MAP: MapBounds = {
  minX: X_WEST,
  maxX: X_EAST,
  minZ: Z_SOUTH,
  maxZ: Z_NORTH,
};

export interface MapMarker {
  x: number;
  z: number;
  name: string;
  mountainId: string;
  quote: string;
  modern?: string;
}

export const MAP_MARKERS: MapMarker[] = CANON.map((m) => ({
  x: m.padX,
  z: m.padZ,
  name: m.name,
  mountainId: m.id,
  quote: m.quote,
  modern: m.modern,
}));

export const DISTRICT_MARKERS: MapMarker[] = [];

function toPx(x: number, z: number, w: number, h: number): { px: number; py: number } {
  const spanX = X_EAST - X_WEST;
  const spanZ = Z_NORTH - Z_SOUTH;
  return {
    px: ((x - X_WEST) / spanX) * w,
    py: ((z - Z_SOUTH) / spanZ) * h,
  };
}

export function bakeWorldSchematic(): HTMLCanvasElement {
  const spanX = X_EAST - X_WEST;
  const spanZ = Z_NORTH - Z_SOUTH;
  const canvas = document.createElement("canvas");
  canvas.width = 1100;
  canvas.height = Math.max(2, Math.round(1100 * (spanZ / spanX)));
  const ctx = canvas.getContext("2d")!;
  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = "#c9b896";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#6a8aaa";
  const westPx = toPx(-180, 0, w, h).px;
  ctx.fillRect(0, 0, Math.max(0, westPx), h);
  const eastPx = toPx(3300, 0, w, h).px;
  ctx.fillRect(eastPx, 0, Math.max(0, w - eastPx), h);
  const southX = toPx(1400, 0, w, h).px;
  const southY = toPx(0, 420, w, h).py;
  ctx.fillRect(southX, southY, Math.max(0, w - southX), Math.max(0, h - southY));

  for (const m of MOUNTAINS) {
    const p = toPx(m.x, m.z, w, h);
    const rx = Math.max(8, (m.rx / spanX) * w);
    const rz = Math.max(7, (m.rz / spanZ) * h);
    ctx.fillStyle = "rgba(72, 56, 36, 0.55)";
    ctx.beginPath();
    ctx.ellipse(p.px, p.py, rx, rz, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(50, 36, 20, 0.7)";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  for (const river of RIVERS) {
    ctx.strokeStyle = river.id.includes("hei") || river.id === "nanyuan" ? "#1a1a22" : river.color;
    ctx.lineWidth = Math.max(1.5, (river.width / spanX) * w * 0.9);
    ctx.lineCap = "round";
    ctx.beginPath();
    if (river.kind === "disk" || river.kind === "sheet") {
      const c = river.points[0]!;
      const p = toPx(c[0], c[1], w, h);
      const rr = ((river.r ?? river.width) / spanX) * w;
      ctx.fillStyle = river.color;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.ellipse(p.px, p.py, rr, rr * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      continue;
    }
    river.points.forEach((pt, i) => {
      const p = toPx(pt[0], pt[1], w, h);
      if (i === 0) ctx.moveTo(p.px, p.py);
      else ctx.lineTo(p.px, p.py);
    });
    ctx.stroke();
  }

  for (const cover of MOUNTAIN_COVER) {
    const m = MOUNTAINS.find((item) => item.id === cover.mountainId);
    if (!m) continue;
    for (const sc of cover.scatter) {
      const p = toPx(m.x + (sc.xCenter ?? 0), m.z + (sc.zCenter ?? 0), w, h);
      const rx = (sc.radius / spanX) * w;
      const rz = (sc.radius / spanZ) * h;
      ctx.fillStyle = "rgba(46, 72, 36, 0.4)";
      ctx.beginPath();
      ctx.ellipse(p.px, p.py, rx, rz, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  return canvas;
}

export function bakeNanshanTopdown(_bounds: MapBounds = NANSHAN_MAP): HTMLCanvasElement {
  return bakeWorldSchematic();
}
