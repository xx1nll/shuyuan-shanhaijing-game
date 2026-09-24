import {
  BoxGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Raycaster,
  Vector2,
  Vector3,
} from "three";
import type { HeightSampler } from "../nature/terrain";
import { surfaceAt, surfaceY } from "../nature/terrain";
import { groundHeight } from "../nature/bvh";
import { pickTerrainMesh } from "./patches";
import { SEA_LEVEL } from "./nanshan";

const forward = new Vector3();
const right = new Vector3();
const wish = new Vector3();
const camLift = new Vector3(0, 1.55, 0);
const camBack = new Vector3();
const camTarget = new Vector3();
const camPos = new Vector3();
const camDir = new Vector3();
const camRay = new Raycaster();
camRay.firstHitOnly = true;

export interface PlayerBounds {
  minX?: number;
  maxX?: number;
  minZ?: number;
  maxZ?: number;
  seaLevel?: number;
  startYaw?: number;
  startPitch?: number;
  camDist?: number;
  camHeight?: number;
}

const PITCH_MIN = -Math.PI / 2 + 0.06;
const PITCH_MAX = Math.PI / 2 - 0.06;
const STEP_UP = 1.1;

export class Player {
  readonly rig = new Group();
  readonly keys = new Set<string>();
  stick = new Vector2();
  yaw: number;
  pitch: number;
  flying = false;
  private readonly terrains: Mesh[];
  private readonly bounds: PlayerBounds;
  private lastX = Number.NaN;
  private lastZ = Number.NaN;
  private flyLatch = false;

  constructor(
    private readonly camera: PerspectiveCamera,
    private readonly sample: HeightSampler,
    terrain: Mesh | Mesh[],
    bounds: PlayerBounds = {},
  ) {
    this.terrains = Array.isArray(terrain) ? terrain : [terrain];
    this.bounds = bounds;
    this.yaw = bounds.startYaw ?? -Math.PI / 2;
    const dist = bounds.camDist ?? 7.5;
    this.pitch = bounds.startPitch ?? Math.atan2(bounds.camHeight ?? 3.1, dist);
    const body = new Mesh(
      new BoxGeometry(0.55, 1.35, 0.4),
      new MeshStandardMaterial({ color: 0xc4a35a, roughness: 0.7 }),
    );
    body.position.y = 0.85;
    body.castShadow = true;
    const head = new Mesh(
      new BoxGeometry(0.42, 0.42, 0.42),
      new MeshStandardMaterial({ color: 0xf0e6d4 }),
    );
    head.position.y = 1.62;
    this.rig.add(body, head);
  }

  bind(canvas: HTMLCanvasElement, joystick?: HTMLElement | null): () => void {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === " " || k === "f") e.preventDefault();
      this.keys.add(k);
    };
    const up = (e: KeyboardEvent) => this.keys.delete(e.key.toLowerCase());
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    const onMove = (e: MouseEvent) => {
      if (document.pointerLockElement !== canvas) return;
      this.yaw -= e.movementX * 0.0024;
      this.pitch += e.movementY * 0.0022;
      if (this.pitch < PITCH_MIN) this.pitch = PITCH_MIN;
      if (this.pitch > PITCH_MAX) this.pitch = PITCH_MAX;
    };
    const onClick = () => {
      void canvas.requestPointerLock();
    };
    canvas.addEventListener("click", onClick);
    document.addEventListener("mousemove", onMove);
    const unstick = joystick ? bindJoystick(joystick, this.stick) : () => undefined;
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      document.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("click", onClick);
      document.exitPointerLock();
      unstick();
    };
  }

  toggleFly(): void {
    this.flying = !this.flying;
    if (!this.flying) this.snapToGround();
  }

  private meshAt(x: number, z: number): Mesh | undefined {
    return pickTerrainMesh(this.terrains, x, z) ?? this.terrains[0];
  }

  private snapToGround(): void {
    const x = this.rig.position.x;
    const z = this.rig.position.z;
    const sea = this.bounds.seaLevel ?? SEA_LEVEL;
    const mesh = this.meshAt(x, z);
    const y = mesh
      ? groundHeight(mesh, x, z, surfaceY(mesh, x, z, this.sample(x, z)))
      : this.sample(x, z);
    this.rig.position.y = Math.max(sea + 0.12, y);
    this.lastX = x;
    this.lastZ = z;
  }

  update(dt: number): void {
    const fDown = this.keys.has("f");
    if (fDown && !this.flyLatch) this.toggleFly();
    this.flyLatch = fDown;

    wish.set(0, 0, 0);
    if (this.keys.has("w") || this.keys.has("arrowup")) wish.z -= 1;
    if (this.keys.has("s") || this.keys.has("arrowdown")) wish.z += 1;
    if (this.keys.has("a") || this.keys.has("arrowleft")) wish.x -= 1;
    if (this.keys.has("d") || this.keys.has("arrowright")) wish.x += 1;
    wish.x += this.stick.x;
    wish.z += this.stick.y;

    forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    right.set(forward.z, 0, -forward.x);
    const ix = wish.x;
    const iz = wish.z;
    wish.set(0, 0, 0);
    wish.addScaledVector(forward, iz);
    wish.addScaledVector(right, ix);
    wish.y = 0;
    if (wish.lengthSq() > 1e-8) wish.normalize();

    const speed = this.keys.has("shift") ? 14 : 7.2;
    const prevX = this.rig.position.x;
    const prevZ = this.rig.position.z;
    const prevY = this.rig.position.y;
    this.rig.position.addScaledVector(wish, speed * dt);
    this.rig.rotation.y = this.yaw;

    if (this.flying) {
      let vy = 0;
      if (this.keys.has(" ") || this.keys.has("e")) vy += 1;
      if (this.keys.has("q")) vy -= 1;
      this.rig.position.y += vy * speed * dt;
    }

    const { minX, maxX, minZ, maxZ } = this.bounds;
    if (minX !== undefined) this.rig.position.x = Math.max(minX, this.rig.position.x);
    if (maxX !== undefined) this.rig.position.x = Math.min(maxX, this.rig.position.x);
    if (minZ !== undefined) this.rig.position.z = Math.max(minZ, this.rig.position.z);
    if (maxZ !== undefined) this.rig.position.z = Math.min(maxZ, this.rig.position.z);

    const x = this.rig.position.x;
    const z = this.rig.position.z;
    const sea = this.bounds.seaLevel ?? SEA_LEVEL;
    if (!this.flying && (x !== this.lastX || z !== this.lastZ)) {
      const mesh = this.meshAt(x, z);
      const hit = mesh ? surfaceAt(mesh, x, z, this.sample(x, z)) : { y: this.sample(x, z), ny: 1 };
      const gy = Math.max(sea + 0.12, mesh ? groundHeight(mesh, x, z, hit.y) : hit.y);
      if (gy > prevY + STEP_UP && wish.lengthSq() > 0) {
        this.rig.position.x = prevX;
        this.rig.position.z = prevZ;
      } else {
        this.lastX = x;
        this.lastZ = z;
        this.rig.position.y = gy;
      }
    }

    camTarget.copy(this.rig.position).add(camLift);
    const dist = this.bounds.camDist ?? 7.5;
    const cp = this.pitch;
    const horiz = Math.cos(cp) * dist;
    camBack.set(Math.sin(this.yaw) * horiz, Math.sin(cp) * dist, Math.cos(this.yaw) * horiz);
    camPos.copy(camTarget).add(camBack);
    camDir.copy(camPos).sub(camTarget);
    const span = camDir.length();
    if (span > 0.1) {
      camDir.multiplyScalar(1 / span);
      camRay.set(camTarget, camDir);
      camRay.far = span;
      const hits = camRay.intersectObjects(this.terrains, false);
      const hit = hits[0];
      if (hit && hit.distance < span - 0.25) {
        camPos.copy(hit.point).addScaledVector(camDir, -0.5);
      }
    }
    this.camera.position.lerp(camPos, 0.92);
    this.camera.lookAt(camTarget);
  }

  teleport(x: number, z: number): void {
    this.rig.position.x = x;
    this.rig.position.z = z;
    this.lastX = x;
    this.lastZ = z;
    if (this.flying) return;
    this.snapToGround();
  }
}

function bindJoystick(el: HTMLElement, stick: Vector2): () => void {
  const knob = el.querySelector(".knob") as HTMLElement;
  const set = (clientX: number, clientY: number) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    let x = (clientX - cx) / 42;
    let y = (clientY - cy) / 42;
    const len = Math.hypot(x, y);
    if (len > 1) {
      x /= len;
      y /= len;
    }
    stick.set(x, y);
    knob.style.left = `${34 + x * 28}px`;
    knob.style.top = `${34 + y * 28}px`;
  };
  const end = () => {
    stick.set(0, 0);
    knob.style.left = "34px";
    knob.style.top = "34px";
  };
  const move = (e: PointerEvent) => set(e.clientX, e.clientY);
  el.addEventListener("pointerdown", (e) => {
    el.setPointerCapture(e.pointerId);
    move(e);
  });
  el.addEventListener("pointermove", (e) => {
    if (!el.hasPointerCapture(e.pointerId)) return;
    move(e);
  });
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);
  return () => undefined;
}
