import {
  ATLAS,
  JING_LABELS,
  RING_LABELS,
  RING_RADIUS,
  SEA_LABELS,
  nanshanToAtlas,
  nearestLocus,
  polarToMap,
  type PlacedLocus,
} from "./atlas";

export function mountWorldMap(
  root: HTMLElement,
  onTeleport: (locus: PlacedLocus) => void,
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
          <p class="world-map-note">山內於海，海內於海外，海外於大荒。點針閱經文。</p>
        </div>
        <button class="ghost" type="button" id="world-map-close">關閉</button>
      </header>
      <div class="world-map-body">
        <canvas width="900" height="900"></canvas>
        <aside class="world-map-panel">
          <p class="world-map-empty">點選地圖上的針標。</p>
        </aside>
      </div>
    </article>
  `;
  root.appendChild(modal);
  const canvas = modal.querySelector("canvas")!;
  const ctx = canvas.getContext("2d")!;
  const panel = modal.querySelector(".world-map-panel") as HTMLElement;
  const closeBtn = modal.querySelector("#world-map-close") as HTMLButtonElement;

  let playerX = 0;
  let playerZ = 0;
  let playerYaw = 0;
  let selected: PlacedLocus | undefined;
  let hover: PlacedLocus | undefined;

  const close = () => modal.classList.add("hidden");
  const open = () => {
    modal.classList.remove("hidden");
    paint();
    renderPanel();
  };

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  const pick = (ev: MouseEvent): PlacedLocus | undefined => {
    const { mx, my } = eventToMap(canvas, ev);
    return nearestLocus(mx, my, 0.07);
  };

  canvas.addEventListener("mousemove", (ev) => {
    hover = pick(ev);
    canvas.style.cursor = hover ? "pointer" : "default";
    paint();
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

  const renderPanel = () => {
    const loc = selected;
    if (!loc) {
      panel.innerHTML = `<p class="world-map-empty">點選地圖上的針標。</p>`;
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
    const cx = w / 2;
    const cy = h / 2;
    const scale = Math.min(w, h) * 0.46;

    ctx.fillStyle = "#cbb58a";
    ctx.fillRect(0, 0, w, h);
    const paper = ctx.createRadialGradient(cx, cy, 40, cx, cy, scale * 1.35);
    paper.addColorStop(0, "#e8d7b0");
    paper.addColorStop(0.55, "#d4c094");
    paper.addColorStop(1, "#b89a68");
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, w, h);

    const toPx = (mx: number, my: number) => ({ px: cx + mx * scale, py: cy + my * scale });

    const fillRing = (r0: number, r1: number, fill: string) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r1 * scale, 0, Math.PI * 2);
      ctx.arc(cx, cy, r0 * scale, 0, Math.PI * 2, true);
      ctx.fillStyle = fill;
      ctx.fill();
    };

    ctx.beginPath();
    ctx.arc(cx, cy, RING_RADIUS.shan * scale, 0, Math.PI * 2);
    ctx.fillStyle = "#9aaa6e";
    ctx.fill();

    fillRing(RING_RADIUS.shan, RING_RADIUS.hai, "rgba(70, 130, 140, 0.45)");
    fillRing(RING_RADIUS.hai, RING_RADIUS.hainei, "rgba(186, 168, 122, 0.55)");
    fillRing(RING_RADIUS.hainei, RING_RADIUS.haiwai, "rgba(58, 92, 108, 0.38)");
    fillRing(RING_RADIUS.haiwai, RING_RADIUS.dahuang + 0.06, "rgba(42, 36, 28, 0.42)");

    ctx.beginPath();
    ctx.arc(cx, cy, RING_RADIUS.zhong * scale, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(196, 163, 90, 0.28)";
    ctx.fill();

    ctx.strokeStyle = "rgba(60, 42, 22, 0.55)";
    ctx.lineWidth = 1.4;
    for (const ring of Object.values(RING_RADIUS)) {
      if (ring <= 0) continue;
      ctx.beginPath();
      ctx.arc(cx, cy, ring * scale, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, (RING_RADIUS.dahuang + 0.06) * scale, 0, Math.PI * 2);
    ctx.arc(cx, cy, RING_RADIUS.hai * scale, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(28, 22, 16, 0.22)";
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = "rgba(72, 48, 22, 0.82)";
    ctx.font = "13px 'Songti TC', 'Noto Serif TC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (const sea of SEA_LABELS) {
      const p = toPx(...pair(polarToMap(sea.r, sea.deg)));
      ctx.fillText(sea.name, p.px, p.py);
    }

    ctx.fillStyle = "rgba(92, 48, 28, 0.78)";
    ctx.font = "13px 'Songti TC', 'Noto Serif TC', serif";
    for (const jing of JING_LABELS) {
      const p = toPx(...pair(polarToMap(jing.r - 0.055, jing.deg)));
      ctx.fillText(jing.name, p.px, p.py);
    }

    ctx.fillStyle = "rgba(50, 36, 20, 0.55)";
    ctx.font = "11px 'Songti TC', 'Noto Serif TC', serif";
    for (const ring of RING_LABELS) {
      if (ring.ring === "zhong" || ring.ring === "shan") continue;
      const p = toPx(...pair(polarToMap(ring.r, 38)));
      ctx.fillText(ring.name, p.px, p.py);
    }

    const focus = hover ?? selected;
    for (const loc of ATLAS) {
      const p = toPx(loc.mx, loc.my);
      const active = focus?.id === loc.id;
      const gold = loc.walkable;
      drawDiamond(
        ctx,
        p.px,
        p.py,
        active ? 8 : gold ? 6.5 : 5,
        gold ? "#c4a35a" : "#7a5a32",
      );
      const showName = active || gold || loc.featured;
      if (showName) {
        const lab = toPx(...pair(polarToMap(loc.r + (loc.ring === "center" ? 0.06 : 0.042), loc.deg)));
        ctx.fillStyle = gold ? "#5a3a14" : "rgba(40, 30, 18, 0.88)";
        ctx.font = `${active || gold ? 12 : 10}px 'Songti TC', 'Noto Serif TC', serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(loc.name, lab.px, lab.py);
      }
    }

    const you = nanshanToAtlas(playerX, playerZ);
    const pp = toPx(you.mx, you.my);
    ctx.save();
    ctx.translate(pp.px, pp.py);
    ctx.rotate(Math.PI - playerYaw);
    ctx.fillStyle = "#9c2b1a";
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(6, 8);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6, 8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = "rgba(60, 42, 22, 0.55)";
    ctx.font = "12px 'Songti TC', 'Noto Serif TC', serif";
    ctx.textAlign = "center";
    const n = toPx(...pair(polarToMap(0.97, 0)));
    ctx.fillText("北", n.px, n.py);
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

function pair(p: { mx: number; my: number }): [number, number] {
  return [p.mx, p.my];
}

function eventToMap(canvas: HTMLCanvasElement, ev: MouseEvent): { mx: number; my: number } {
  const rect = canvas.getBoundingClientRect();
  const sx = ((ev.clientX - rect.left) / rect.width) * canvas.width;
  const sy = ((ev.clientY - rect.top) / rect.height) * canvas.height;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const scale = Math.min(canvas.width, canvas.height) * 0.46;
  return { mx: (sx - cx) / scale, my: (sy - cy) / scale };
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
