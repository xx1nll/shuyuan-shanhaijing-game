import {
  ACESFilmicToneMapping,
  Box3,
  Color,
  DirectionalLight,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import type { Quality } from "../quality";
import { makeTree } from "../catalog/plants";
import { TREE_KIND_ORDER, TREE_KINDS, type TreeKind, type TreeOverlay } from "../catalog/trees";
import { C } from "../style/palette";

interface Showcase {
  id: string;
  name: string;
  kind: TreeKind;
  overlay?: TreeOverlay;
}

const SHOWCASE: Showcase[] = [
  ...TREE_KIND_ORDER.map((kind) => ({ id: kind, name: TREE_KINDS[kind].name, kind })),
  { id: "migu", name: "迷穀", kind: "sang", overlay: { glowSiZhao: true } },
];

function renderThumbs(quality: Quality): { id: string; name: string; src: string }[] {
  const size = 384;
  const canvas = document.createElement("canvas");
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: true,
  });
  renderer.setSize(size, size, false);
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setClearColor(new Color(C.sky), 1);

  const camera = new PerspectiveCamera(28, 1, 0.08, 120);
  const hemi = new HemisphereLight(C.sky, C.sand, 0.95);
  const sun = new DirectionalLight(0xfff2dc, 1.2);
  sun.position.set(5, 9, 4);
  const fill = new DirectionalLight(0xb8d4e8, 0.32);
  fill.position.set(-4, 5, -6);
  const box = new Box3();
  const center = new Vector3();
  const span = new Vector3();

  const rows: { id: string; name: string; src: string }[] = [];
  for (const item of SHOWCASE) {
    const scene = new Scene();
    scene.background = new Color(C.sky);
    scene.add(hemi.clone());
    scene.add(sun.clone());
    scene.add(fill.clone());
    const model = makeTree(item.kind, 21, quality, item.overlay);
    scene.add(model);
    model.updateMatrixWorld(true);
    box.setFromObject(model);
    box.getCenter(center);
    box.getSize(span);
    const dist = Math.max(span.x, span.y, span.z, 0.6) * 2.05;
    camera.position.set(center.x + dist * 0.72, center.y + dist * 0.22, center.z + dist * 0.86);
    camera.near = Math.max(0.05, dist * 0.02);
    camera.far = dist * 12;
    camera.updateProjectionMatrix();
    camera.lookAt(center);
    renderer.render(scene, camera);
    rows.push({ id: item.id, name: item.name, src: canvas.toDataURL("image/png") });
    scene.clear();
  }
  renderer.dispose();
  return rows;
}

export function mountDex(
  root: HTMLElement,
  quality: Quality,
): {
  open: () => void;
  close: () => void;
} {
  const modal = document.createElement("div");
  modal.className = "codex-modal hidden";
  modal.innerHTML = `
    <article class="codex-card">
      <header class="codex-head">
        <div>
          <h2>圖鑑</h2>
          <p class="codex-note">常木與迷穀。描述為占位，稍後再補。</p>
        </div>
        <button class="ghost" type="button" id="codex-close">關閉</button>
      </header>
      <div class="codex-list"><p class="codex-empty">正在繪製……</p></div>
    </article>
  `;
  root.appendChild(modal);
  const list = modal.querySelector(".codex-list") as HTMLElement;
  let filled = false;

  const fill = () => {
    if (filled) return;
    filled = true;
    const rows = renderThumbs(quality);
    list.innerHTML = rows
      .map(
        (row) => `
      <article class="codex-entry">
        <img src="${row.src}" alt="${row.name}" width="192" height="192" />
        <div>
          <h3>${row.name}</h3>
          <p class="codex-desc">（描述待補）</p>
        </div>
      </article>`,
      )
      .join("");
  };

  const close = () => modal.classList.add("hidden");
  modal.querySelector("#codex-close")!.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  return {
    open() {
      modal.classList.remove("hidden");
      fill();
    },
    close,
  };
}
