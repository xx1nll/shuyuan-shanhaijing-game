import { type PlacedLocus } from "./atlas";
import { MAP_MARKERS, NANSHAN_MAP } from "./mapBake";

export function mountWorldMap(
  root: HTMLElement,
  onTeleport: (locus: PlacedLocus) => void,
  chart: HTMLCanvasElement,
): {
  open: () => void;
  close: () => void;
  isOpen: () => boolean;
  update: (x: number, z: number, yaw: number) => void;
} {
  const modal = document.createElement("div");
  modal.className = "world-map-modal hidden";
  modal.innerHTML = `
    <article class="world-map-card">
      <header class="world-map-head">
        <div>
          <h2>山海圖</h2>
          <p class="world-map-note">北上。點地標閱經文，可傳至山足。滾輪縮放，拖曳平移。</p>
        </div>
        <button class="ghost" type="button" id="world-map-close">關閉</button>
      </header>
      <div class="world-map-body">
        <canvas width="1100" height="640"></canvas>
        <aside class="world-map-panel">
          <p class="world-map-empty">點選地圖上的地標。</p>
        </aside>
      </div>
    </article>
  `;
  root.appendChild(modal);
  const canvas = modal.querySelector("canvas")!;
  const ctx = canvas.getContext("2d")!;
  const panel = modal.querySelector(".world-map-panel") as HTMLElement;
  const closeBtn = modal.querySelector("#world-map-close") as HTMLButtonElement;

  const spanX = NANSHAN_MAP.maxX - NANSHAN_MAP.minX;
  const spanZ = NANSHAN_MAP.maxZ - NANSHAN_MAP.minZ;
  const walkable: PlacedLocus[] = MAP_MARKERS.map((pin) => ({
    id: pin.mountainId,
    name: pin.name,
    jing: pin.quote,
    ring: "shan",
    dir: "s",
    deg: 0,
    r: 0,
    walkable: true,
    worldX: pin.x,
    worldZ: pin.z,
    quote: pin.quote,
    modern: pin.modern ?? pin.name,
    mx: 0,
    my: 0,
  }));

  let playerX = 0;
  let playerZ = 0;
  let playerYaw = 0;
  let selected: PlacedLocus | undefined;
  let hover: PlacedLocus | undefined;
  let viewX = 0;
  let viewZ = 0;
  let viewW = 900;
  let dragging = false;
  let lastMx = 0;
  let lastMy = 0;

  const worldToCanvas = (x: number, z: number) => {
    const px = ((x - viewX) / viewW) * canvas.width + canvas.width / 2;
    const viewH = viewW * (canvas.height / canvas.width);
    const py = ((z - viewZ) / viewH) * canvas.height + canvas.height / 2;
    return { px, py };
  };

  const canvasToWorld = (sx: number, sy: number) => {
    const viewH = viewW * (canvas.height / canvas.width);
    const x = viewX + ((sx - canvas.width / 2) / canvas.width) * viewW;
    const z = viewZ + ((sy - canvas.height / 2) / canvas.height) * viewH;
    return { x, z };
  };

  const frameOn = (x: number, z: number) => {
    viewX = x;
    viewZ = z;
    viewW = 2400;
  };

  const close = () => modal.classList.add("hidden");
  const open = () => {
    modal.classList.remove("hidden");
    frameOn(playerX, playerZ);
    paint();
    renderPanel();
  };

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  const pick = (ev: MouseEvent): PlacedLocus | undefined => {
    const rect = canvas.getBoundingClientRect();
    const sx = ((ev.clientX - rect.left) / rect.width) * canvas.width;
    const sy = ((ev.clientY - rect.top) / rect.height) * canvas.height;
    const { x, z } = canvasToWorld(sx, sy);
    let best: PlacedLocus | undefined;
    let bestD = viewW * 0.035;
    for (const loc of walkable) {
      const d = Math.hypot((loc.worldX ?? 0) - x, (loc.worldZ ?? 0) - z);
      if (d < bestD) {
        bestD = d;
        best = loc;
      }
    }
    return best;
  };

  canvas.addEventListener("mousemove", (ev) => {
    if (dragging) {
      const rect = canvas.getBoundingClientRect();
      const sx = ((ev.clientX - rect.left) / rect.width) * canvas.width;
      const sy = ((ev.clientY - rect.top) / rect.height) * canvas.height;
      const a = canvasToWorld(lastMx, lastMy);
      const b = canvasToWorld(sx, sy);
      viewX -= b.x - a.x;
      viewZ -= b.z - a.z;
      lastMx = sx;
      lastMy = sy;
      paint();
      return;
    }
    hover = pick(ev);
    canvas.style.cursor = hover ? "pointer" : "grab";
    paint();
  });
  canvas.addEventListener("mousedown", (ev) => {
    const rect = canvas.getBoundingClientRect();
    lastMx = ((ev.clientX - rect.left) / rect.width) * canvas.width;
    lastMy = ((ev.clientY - rect.top) / rect.height) * canvas.height;
    dragging = true;
  });
  window.addEventListener("mouseup", () => {
    dragging = false;
  });
  canvas.addEventListener("mouseleave", () => {
    hover = undefined;
    paint();
  });
  canvas.addEventListener("click", (ev) => {
    const hit = pick(ev);
    if (!hit) return;
    selected = hit;
    renderPanel();
    paint();
  });
  canvas.addEventListener(
    "wheel",
    (ev) => {
      ev.preventDefault();
      const factor = ev.deltaY > 0 ? 1.12 : 0.89;
      viewW = Math.min(spanX * 1.15, Math.max(220, viewW * factor));
      paint();
    },
    { passive: false },
  );

  const renderPanel = () => {
    const loc = selected;
    if (!loc) {
      panel.innerHTML = `<p class="world-map-empty">點選地圖上的地標。</p>`;
      return;
    }
    const travel = loc.walkable
      ? `<button class="ghost" type="button" id="world-map-go">前往此山</button>`
      : `<p class="world-map-lock">${loc.lockedHint ?? "尚未開通。"}</p>`;
    const myth = loc.mythNote ? `<p class="world-map-myth">${loc.mythNote}</p>` : "";
    panel.innerHTML = `
      <p class="world-map-jing">${loc.jing}</p>
      <h3>${loc.name}</h3>
      <p class="world-map-quote">${loc.quote}</p>
      <p class="world-map-modern">${loc.modern}</p>
      ${myth}
      ${travel}
    `;
    panel.querySelector("#world-map-go")?.addEventListener("click", () => {
      onTeleport(loc);
      close();
    });
  };

  const paint = () => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#cbb58a";
    ctx.fillRect(0, 0, w, h);

    const viewH = viewW * (h / w);
    const srcX = ((viewX - viewW / 2 - NANSHAN_MAP.minX) / spanX) * chart.width;
    const srcY = ((viewZ - viewH / 2 - NANSHAN_MAP.minZ) / spanZ) * chart.height;
    const srcW = (viewW / spanX) * chart.width;
    const srcH = (viewH / spanZ) * chart.height;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(chart, srcX, srcY, srcW, srcH, 0, 0, w, h);

    ctx.fillStyle = "rgba(92, 48, 28, 0.88)";
    ctx.font = "11px 'Songti TC', 'Noto Serif TC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    const label = viewW < 3600;
    for (const pin of MAP_MARKERS) {
      const p = worldToCanvas(pin.x, pin.z);
      if (p.px < 8 || p.py < 8 || p.px > w - 8 || p.py > h - 8) continue;
      drawDiamond(ctx, p.px, p.py, label ? 4.5 : 3.2, "#c4a35a");
      if (!label) continue;
      ctx.fillStyle = "rgba(50, 36, 20, 0.82)";
      ctx.fillText(pin.name, p.px, p.py - 7);
    }

    const focus = hover ?? selected;
    for (const loc of walkable) {
      const p = worldToCanvas(loc.worldX ?? 0, loc.worldZ ?? 0);
      if (p.px < 4 || p.py < 4 || p.px > w - 4 || p.py > h - 4) continue;
      const active = focus?.id === loc.id;
      if (active) drawDiamond(ctx, p.px, p.py, 8, "#9c2b1a");
    }

    const you = worldToCanvas(playerX, playerZ);
    ctx.save();
    ctx.translate(you.px, you.py);
    ctx.rotate(Math.PI - playerYaw);
    ctx.fillStyle = "#9c2b1a";
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(6, 8);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6, 8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = "rgba(60, 42, 22, 0.7)";
    ctx.font = "13px 'Songti TC', 'Noto Serif TC', serif";
    ctx.textAlign = "left";
    ctx.fillText("北", 16, 22);
  };

  paint();

  return {
    open,
    close,
    isOpen: () => !modal.classList.contains("hidden"),
    update(x: number, z: number, yaw: number) {
      playerX = x;
      playerZ = z;
      playerYaw = yaw;
      if (!modal.classList.contains("hidden")) paint();
    },
  };
}

function drawDiamond(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, fill: string): void {
  ctx.fillStyle = fill;
  ctx.strokeStyle = "rgba(243, 230, 204, 0.7)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r * 0.72, y);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r * 0.72, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
