import { type MapBounds } from "./mapBake";

const SIZE = 176;
const VIEW = 180;

export function mountMinimap(
  root: HTMLElement,
  onOpen: () => void,
  terrain: HTMLCanvasElement,
  bounds: MapBounds,
  _mountainId: string,
): {
  update: (x: number, z: number, yaw: number, place?: string) => void;
} {
  const wrap = document.createElement("button");
  wrap.type = "button";
  wrap.className = "minimap";
  wrap.title = "開啟大地圖";
  wrap.setAttribute("aria-label", "小地圖，點擊開啟大地圖");
  wrap.innerHTML = `<canvas width="${SIZE}" height="${SIZE}"></canvas><div class="minimap-place">招搖之山</div>`;
  wrap.addEventListener("click", onOpen);
  root.appendChild(wrap);
  const canvas = wrap.querySelector("canvas")!;
  const ctx = canvas.getContext("2d")!;
  const placeEl = wrap.querySelector(".minimap-place") as HTMLElement;
  const spanX = bounds.maxX - bounds.minX;
  const spanZ = bounds.maxZ - bounds.minZ;

  const update = (x: number, z: number, yaw: number, place?: string) => {
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const radius = SIZE / 2 - 3;
    ctx.clearRect(0, 0, SIZE, SIZE);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    const sx = terrain.width / spanX;
    const sz = terrain.height / spanZ;
    const k = radius / VIEW;
    ctx.translate(cx, cy);
    ctx.scale(k / sx, k / sz);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(terrain, -(x - bounds.minX) * sx, -(z - bounds.minZ) * sz);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    const edge = ctx.createRadialGradient(cx, cy, radius * 0.72, cx, cy, radius);
    edge.addColorStop(0, "rgba(8, 12, 10, 0)");
    edge.addColorStop(1, "rgba(8, 12, 10, 0.16)");
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.restore();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI - yaw);
    ctx.fillStyle = "#e8c86a";
    ctx.strokeStyle = "#3a2410";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(5.5, 7);
    ctx.lineTo(0, 3.5);
    ctx.lineTo(-5.5, 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#c4a35a";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, radius - 5, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(243, 230, 204, 0.28)";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.fillStyle = "#9c2b1a";
    ctx.beginPath();
    ctx.arc(cx, 14, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f3e6cc";
    ctx.font = "700 10px 'Songti TC', 'Noto Serif TC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("北", cx, 14.5);

    if (place) placeEl.textContent = place;
  };

  update(bounds.minX + spanX / 2, bounds.minZ + spanZ / 2, -Math.PI / 2);
  return { update };
}
