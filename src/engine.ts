import {
  ACESFilmicToneMapping,
  Clock,
  Color,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";
import type { Quality } from "./quality";
import { C } from "./style/palette";

export class Engine {
  readonly renderer: WebGLRenderer;
  readonly scene: Scene;
  readonly camera: PerspectiveCamera;
  readonly clock = new Clock();
  private frame: ((dt: number, elapsed: number) => void) | null = null;
  private raf = 0;
  private fpsEl: HTMLDivElement | null = null;
  private fpsFrames = 0;
  private fpsAcc = 0;

  constructor(canvas: HTMLCanvasElement, quality: Quality) {
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: quality === "high",
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality === "high" ? 1.5 : 1.1));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = quality === "high";
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    this.scene = new Scene();
    this.scene.background = new Color(C.sky);
    this.renderer.setClearColor(new Color(C.sky), 1);

    this.camera = new PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.12, 8000);
    this.camera.position.set(0, 12, 18);

    const host = canvas.parentElement;
    if (host) {
      const el = document.createElement("div");
      el.className = "fps-meter";
      el.textContent = "— FPS";
      host.appendChild(el);
      this.fpsEl = el;
    }

    window.addEventListener("resize", this.onResize);
  }

  setFrame(fn: (dt: number, elapsed: number) => void): void {
    this.frame = fn;
  }

  start(): void {
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      const dt = Math.min(this.clock.getDelta(), 0.05);
      const elapsed = this.clock.elapsedTime;
      this.frame?.(dt, elapsed);
      this.renderer.render(this.scene, this.camera);
      this.tickFps(dt);
    };
    loop();
  }

  stop(): void {
    cancelAnimationFrame(this.raf);
  }

  dispose(): void {
    this.stop();
    window.removeEventListener("resize", this.onResize);
    this.fpsEl?.remove();
    this.fpsEl = null;
    this.renderer.dispose();
  }

  private tickFps(dt: number): void {
    this.fpsFrames += 1;
    this.fpsAcc += dt;
    if (this.fpsAcc < 0.4) return;
    const fps = Math.round(this.fpsFrames / this.fpsAcc);
    this.fpsFrames = 0;
    this.fpsAcc = 0;
    if (this.fpsEl) this.fpsEl.textContent = `${fps} FPS`;
  }

  private onResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
}
