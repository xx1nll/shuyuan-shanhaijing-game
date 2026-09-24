import { ATLAS, WALKABLE } from "./atlas";

const SIZE = 148;
const VIEW = 180;

export function mountMinimap(
  root: HTMLElement,
  onOpen: () => void,
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

  const update = (x: number, z: number, yaw: number, place?: string) => {
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const radius = SIZE / 2 - 2;
    ctx.clearRect(0, 0, SIZE, SIZE);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = "#1a2e38";
    ctx.fillRect(0, 0, SIZE, SIZE);

    const grd = ctx.createRadialGradient(cx, cy, 8, cx, cy, radius);
    grd.addColorStop(0, "#2a5a4a");
    grd.addColorStop(0.62, "#244a42");
    grd.addColorStop(1, "#163038");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, SIZE, SIZE);

    const toScreen = (wx: number, wz: number): { sx: number; sy: number } => {
      const dx = wx - x;
      const dz = wz - z;
      const alongRight = dx * Math.cos(yaw) - dz * Math.sin(yaw);
      const alongFwd = dx * Math.sin(yaw) + dz * Math.cos(yaw);
      return {
        sx: cx + (alongRight / VIEW) * radius,
        sy: cy - (alongFwd / VIEW) * radius,
      };
    };

    ctx.strokeStyle = "rgba(196, 163, 90, 0.18)";
    ctx.lineWidth = 1;
    for (const r of [18, 36, 54]) {
      ctx.beginPath();
      ctx.arc(cx, cy, (r / VIEW) * radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (const pin of ATLAS) {
      if (pin.worldX === undefined) continue;
      const p = toScreen(pin.worldX, pin.worldZ ?? 0);
      if (Math.hypot(p.sx - cx, p.sy - cy) > radius - 4) continue;
      drawDiamond(ctx, p.sx, p.sy, pin.walkable ? 5 : 3.5, pin.walkable ? "#e8c86a" : "rgba(196, 163, 90, 0.45)");
    }

    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = "#f3e6cc";
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 6);
    ctx.lineTo(0, 3.5);
    ctx.lineTo(-5, 6);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
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

    const northRight = Math.sin(yaw);
    const northFwd = -Math.cos(yaw);
    const nLen = Math.hypot(northRight, northFwd) || 1;
    const nx = cx + (northRight / nLen) * (radius - 11);
    const ny = cy - (northFwd / nLen) * (radius - 11);
    ctx.fillStyle = "#9c2b1a";
    ctx.beginPath();
    ctx.arc(nx, ny, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f3e6cc";
    ctx.font = "700 10px 'Songti TC', 'Noto Serif TC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("北", nx, ny + 0.5);

    if (place) placeEl.textContent = place;
  };

  update(WALKABLE[0]?.worldX ?? 0, 0, -Math.PI / 2, WALKABLE[0]?.name);
  return { update };
}

function drawDiamond(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, fill: string): void {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r * 0.7, y);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r * 0.7, y);
  ctx.closePath();
  ctx.fill();
}
