import { Group, Mesh, Raycaster, Vector2 } from "three";
import type { Engine } from "../engine";
import type { Quality } from "../quality";
import { createSky } from "../nature/sky";
import { createOcean, updateOcean, createLandMask, writeLandMask, bindLandMask } from "../nature/ocean";
import { buildHeightMesh, rebuildHeightAttribute, surfaceY, type HeightSampler } from "../nature/terrain";
import { box, flatMat } from "../style/facets";
import { C } from "../style/palette";
import "../nature/bvh";
import { makeTree, makeZhuyuTuft, placeTree, updateHeroWind } from "../catalog/plants";
import { TREE_KINDS, TREE_KIND_ORDER, type TreeKind } from "../catalog/trees";
import { createCreature, updateCreatures } from "../nature/fauna";
import { Player } from "../explore/player";
import { mountHelp } from "./help";
import {
  BODY_LABELS,
  DEFAULT_CHIMERA,
  HEAD_LABELS,
  LIMB_LABELS,
  TAIL_LABELS,
  type BodyId,
  type CreatureRecipe,
  type HeadId,
  type LimbId,
  type TailId,
} from "../catalog/recipes";
import {
  defaultIsland,
  loadIsland,
  saveIsland,
  type Brush,
  type IslandSave,
  type StampId,
} from "./save";

const SEA = 0.55;

const TREE_STAMP: Record<Exclude<TreeKind, "yan"> | "yanmu", TreeKind> = {
  gui: "gui",
  song: "song",
  bai: "bai",
  zong: "zong",
  tan: "tan",
  sang: "sang",
  yanmu: "yan",
  tao: "tao",
  zi: "zi",
  liu: "liu",
  zhu: "zhu",
  shan: "shan",
};

function kindOfStamp(id: StampId): TreeKind | undefined {
  return TREE_STAMP[id as keyof typeof TREE_STAMP];
}

export async function startWorkshop(
  engine: Engine,
  overlay: HTMLElement,
  quality: Quality,
  onBack: () => void,
): Promise<() => void> {
  overlay.innerHTML = `<div class="loading">正在準備島嶼……</div>`;
  await new Promise<void>((r) => {
    const go = () => r();
    requestAnimationFrame(go);
    window.setTimeout(go, 40);
  });
  let data = loadIsland() ?? defaultIsland();
  const sky = createSky(engine.scene, quality);
  const sample: HeightSampler = (x, z) => sampleGrid(data, x, z);
  const terrain = buildHeightMesh({
    minX: -data.size / 2,
    maxX: data.size / 2,
    minZ: -data.size / 2,
    maxZ: data.size / 2,
    segX: data.res - 1,
    segZ: data.res - 1,
    sample,
    jitter: 0.12,
  });
  terrain.geometry.computeBoundsTree();
  engine.scene.add(terrain);

  const ocean = createOcean({
    x: 0,
    z: 0,
    width: 140,
    depth: 140,
    qualityHigh: false,
  });
  const landMask = createLandMask(data.res);
  writeLandMask(landMask, data.heights, data.res);
  bindLandMask(ocean, landMask, -data.size / 2, -data.size / 2, data.size);
  engine.scene.add(ocean);

  const stamps = new Group();
  engine.scene.add(stamps);
  const protos = Object.fromEntries(
    TREE_KIND_ORDER.map((kind, i) => [kind, makeTree(kind, 9 + i * 3, quality)]),
  ) as Record<TreeKind, ReturnType<typeof makeTree>>;
  rebuildStamps(stamps, data, protos, sample, terrain);

  engine.camera.position.set(28, 22, 28);
  engine.camera.lookAt(0, 3.5, 0);

  overlay.innerHTML = "";
  overlay.appendChild(hud(onBack));
  const tools = toolbar();
  overlay.appendChild(tools.el);
  const pal = palette();
  overlay.appendChild(pal.el);
  const help = mountHelp(overlay);
  overlay.querySelector("#help")!.addEventListener("click", () => help.open());
  help.maybeFirstOpen();
  const playUi = document.createElement("div");
  playUi.className = "play-ui hidden";
  playUi.innerHTML = `<div class="joystick"><div class="knob"></div></div><div class="hint">WASD 行走 · 點畫面鎖定視角</div>`;
  overlay.appendChild(playUi);

  let brush: Brush = "raise";
  let stamp: StampId = "gui";
  let chimera: CreatureRecipe = { ...DEFAULT_CHIMERA };
  let painting = false;
  let playing = false;
  let player: Player | null = null;
  let unbindPlayer: (() => void) | null = null;
  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const ghost = new Group();
  ghost.visible = false;
  engine.scene.add(ghost);

  const refreshGhost = () => {
    ghost.clear();
    ghost.add(createCreature("chimera", chimera));
  };
  refreshGhost();

  tools.onChange((b) => {
    brush = b;
    if (b) ghost.visible = false;
  });
  pal.onChange((s, recipe) => {
    stamp = s;
    if (recipe) {
      chimera = recipe;
      refreshGhost();
    }
    ghost.visible = tools.mode === "stamp" && stamp === "chimera" && !playing;
  });

  const canvas = engine.renderer.domElement;
  const hitTerrain = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, engine.camera);
    return raycaster.intersectObject(terrain, false)[0];
  };

  const refreshLand = () => {
    writeLandMask(landMask, data.heights, data.res);
    rebuildHeightAttribute(
      terrain,
      -data.size / 2,
      data.size / 2,
      -data.size / 2,
      data.size / 2,
      data.res - 1,
      data.res - 1,
      sample,
    );
    terrain.geometry.computeBoundsTree();
  };

  const paint = (e: PointerEvent) => {
    const hit = hitTerrain(e);
    if (!hit) return;
    if (tools.mode === "brush") {
      applyBrush(data, hit.point.x, hit.point.z, brush, 4.5, 0.35);
      refreshLand();
    }
  };

  const onDown = (e: PointerEvent) => {
    if (playing) return;
    painting = true;
    if (tools.mode === "stamp") {
      const hit = hitTerrain(e);
      if (!hit) return;
      data.placements.push({
        id: stamp,
        x: hit.point.x,
        z: hit.point.z,
        rot: Math.random() * Math.PI * 2,
        scale: 1,
        recipe: stamp === "chimera" ? { ...chimera } : undefined,
      });
      rebuildStamps(stamps, data, protos, sample, terrain);
    } else {
      paint(e);
    }
  };
  const onMove = (e: PointerEvent) => {
    if (playing) return;
    if (tools.mode === "stamp" && stamp === "chimera") {
      const hit = hitTerrain(e);
      if (!hit) {
        ghost.visible = false;
        return;
      }
      ghost.visible = true;
      ghost.position.set(hit.point.x, hit.point.y, hit.point.z);
      return;
    }
    ghost.visible = false;
    if (!painting || tools.mode !== "brush") return;
    paint(e);
  };
  const onUp = () => {
    if (painting && tools.mode === "brush") rebuildStamps(stamps, data, protos, sample, terrain);
    painting = false;
  };

  canvas.addEventListener("pointerdown", onDown);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);

  overlay.querySelector("#save")!.addEventListener("click", () => {
    saveIsland(data);
  });
  overlay.querySelector("#load")!.addEventListener("click", () => {
    data = loadIsland() ?? data;
    refreshLand();
    rebuildStamps(stamps, data, protos, sample, terrain);
  });
  overlay.querySelector("#reset")!.addEventListener("click", () => {
    if (playing) return;
    data = defaultIsland();
    refreshLand();
    rebuildStamps(stamps, data, protos, sample, terrain);
  });

  let azimuth = 0.85;
  let polar = 0.62;
  let dist = 58;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  canvas.addEventListener("pointerdown", (e) => {
    if (playing) return;
    if (e.button === 2 || e.shiftKey) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    azimuth -= (e.clientX - lastX) * 0.007;
    polar = Math.min(1.35, Math.max(0.2, polar + (e.clientY - lastY) * 0.007));
    lastX = e.clientX;
    lastY = e.clientY;
  });
  window.addEventListener("pointerup", () => {
    dragging = false;
  });
  canvas.addEventListener("wheel", (e) => {
    if (playing) return;
    dist = Math.min(80, Math.max(16, dist + e.deltaY * 0.02));
  });

  const peakOf = (island: IslandSave) => {
    let best = -1e9;
    let px = 0;
    let pz = 0;
    for (let iz = 0; iz < island.res; iz += 1) {
      for (let ix = 0; ix < island.res; ix += 1) {
        const h = island.heights[iz * island.res + ix] ?? 0;
        if (h > best) {
          best = h;
          px = (ix / (island.res - 1) - 0.5) * island.size;
          pz = (iz / (island.res - 1) - 0.5) * island.size;
        }
      }
    }
    return { x: px, z: pz, y: best };
  };

  const exitPlay = () => {
    playing = false;
    unbindPlayer?.();
    unbindPlayer = null;
    if (player) {
      engine.scene.remove(player.rig);
      player = null;
    }
    tools.el.classList.remove("hidden");
    pal.el.classList.remove("hidden");
    playUi.classList.add("hidden");
    overlay.querySelector("#load")?.classList.remove("hidden");
    overlay.querySelector("#reset")?.classList.remove("hidden");
    const btn = overlay.querySelector("#play") as HTMLButtonElement;
    btn.textContent = "進入島嶼";
  };

  const enterPlay = () => {
    saveIsland(data);
    playing = true;
    ghost.visible = false;
    tools.el.classList.add("hidden");
    pal.el.classList.add("hidden");
    playUi.classList.remove("hidden");
    overlay.querySelector("#load")?.classList.add("hidden");
    overlay.querySelector("#reset")?.classList.add("hidden");
    const btn = overlay.querySelector("#play") as HTMLButtonElement;
    btn.textContent = "返回編輯";
    const peak = peakOf(data);
    player = new Player(engine.camera, sample, terrain, {
      minX: -data.size / 2 + 3,
      maxX: data.size / 2 - 3,
      minZ: -data.size / 2 + 3,
      maxZ: data.size / 2 - 3,
      startYaw: Math.PI,
    });
    player.rig.position.set(peak.x, surfaceY(terrain, peak.x, peak.z, peak.y), peak.z);
    engine.scene.add(player.rig);
    unbindPlayer = player.bind(canvas, playUi.querySelector(".joystick") as HTMLElement);
  };

  overlay.querySelector("#play")!.addEventListener("click", () => {
    if (playing) exitPlay();
    else enterPlay();
  });

  engine.setFrame((dt, elapsed) => {
    sky.update(elapsed, engine.camera.position.x, engine.camera.position.z);
    updateOcean(ocean, elapsed, engine.camera.position.x, engine.camera.position.y, engine.camera.position.z);
    updateHeroWind(stamps, elapsed);
    updateCreatures(stamps, elapsed, (x, z) => surfaceY(terrain, x, z, sample(x, z)));
    if (playing && player) {
      player.update(dt);
      return;
    }
    engine.camera.position.set(
      Math.cos(azimuth) * Math.sin(polar) * dist,
      Math.cos(polar) * dist,
      Math.sin(azimuth) * Math.sin(polar) * dist,
    );
    engine.camera.lookAt(0, 3.5, 0);
  });

  return () => {
    canvas.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    unbindPlayer?.();
    engine.scene.clear();
    overlay.innerHTML = "";
  };
}

function sampleGrid(data: IslandSave, x: number, z: number): number {
  const u = (x + data.size / 2) / data.size;
  const v = (z + data.size / 2) / data.size;
  const gx = u * (data.res - 1);
  const gz = v * (data.res - 1);
  const x0 = Math.max(0, Math.min(data.res - 2, Math.floor(gx)));
  const z0 = Math.max(0, Math.min(data.res - 2, Math.floor(gz)));
  const tx = gx - x0;
  const tz = gz - z0;
  const h00 = data.heights[z0 * data.res + x0] ?? 0;
  const h10 = data.heights[z0 * data.res + x0 + 1] ?? 0;
  const h01 = data.heights[(z0 + 1) * data.res + x0] ?? 0;
  const h11 = data.heights[(z0 + 1) * data.res + x0 + 1] ?? 0;
  const h = h00 * (1 - tx) * (1 - tz) + h10 * tx * (1 - tz) + h01 * (1 - tx) * tz + h11 * tx * tz;
  return Math.max(SEA - 1.4, h);
}

function applyBrush(data: IslandSave, x: number, z: number, brush: Brush, radius: number, strength: number): void {
  for (let iz = 0; iz < data.res; iz += 1) {
    for (let ix = 0; ix < data.res; ix += 1) {
      const wx = (ix / (data.res - 1) - 0.5) * data.size;
      const wz = (iz / (data.res - 1) - 0.5) * data.size;
      const d = Math.hypot(wx - x, wz - z);
      if (d > radius) continue;
      const w = 1 - d / radius;
      const i = iz * data.res + ix;
      const h = data.heights[i] ?? 0;
      if (brush === "raise") data.heights[i] = h + strength * w;
      if (brush === "lower") data.heights[i] = h - strength * w;
      if (brush === "flatten") data.heights[i] = h + (3.2 - h) * 0.2 * w;
      if (brush === "smooth") {
        const avg =
          ((data.heights[i - 1] ?? h) +
            (data.heights[i + 1] ?? h) +
            (data.heights[i - data.res] ?? h) +
            (data.heights[i + data.res] ?? h)) /
          4;
        data.heights[i] = h + (avg - h) * 0.35 * w;
      }
    }
  }
}

function rebuildStamps(
  group: Group,
  data: IslandSave,
  protos: Record<TreeKind, ReturnType<typeof makeTree>>,
  sample: HeightSampler,
  terrain: Mesh,
): void {
  group.clear();
  for (const p of data.placements) {
    const y = surfaceY(terrain, p.x, p.z, sample(p.x, p.z));
    if (p.id === "zhuyu") {
      const tuft = makeZhuyuTuft();
      tuft.position.set(p.x, y - 0.02, p.z);
      tuft.rotation.y = p.rot;
      group.add(tuft);
      continue;
    }
    if (p.id === "rock") {
      const rock = new Mesh(box(1.05, 0.7, 0.9), flatMat(C.rock));
      rock.position.set(p.x, y - 0.02, p.z);
      rock.rotation.y = p.rot;
      group.add(rock);
      continue;
    }
    if (p.id === "shengsheng" || p.id === "baiyuan" || p.id === "lushu" || p.id === "jiweihu" || p.id === "chimera") {
      const creature = createCreature(p.id, p.recipe);
      creature.position.set(p.x, y - 0.02, p.z);
      creature.userData.baseY = y - 0.02;
      creature.userData.homeX = p.x;
      creature.userData.homeZ = p.z;
      creature.rotation.y = p.rot;
      group.add(creature);
      continue;
    }
    const kind = kindOfStamp(p.id);
    if (!kind) continue;
    const proto = protos[kind];
    if (!proto) continue;
    group.add(placeTree(proto, p.x, y - 0.04, p.z, p.rot));
  }
}

function hud(onBack: () => void): HTMLElement {
  const bar = document.createElement("div");
  bar.className = "hud";
  bar.innerHTML = `
    <div class="hud-cluster">
      <button class="ghost" id="back">返回</button>
      <button class="ghost" id="save">儲存島嶼</button>
      <button class="ghost" id="play">進入島嶼</button>
      <button class="ghost" id="help">說明</button>
      <button class="ghost" id="load">讀取</button>
      <button class="ghost" id="reset">重設</button>
    </div>
  `;
  bar.querySelector("#back")!.addEventListener("click", onBack);
  return bar;
}

function toolbar(): { el: HTMLElement; mode: "brush" | "stamp"; onChange: (fn: (b: Brush) => void) => void } {
  const el = document.createElement("div");
  el.className = "toolbar";
  const brushes: Brush[] = ["raise", "lower", "smooth", "flatten"];
  const labels: Record<Brush, string> = {
    raise: "堆高",
    lower: "挖低",
    smooth: "抹平",
    flatten: "整地",
  };
  const state = { mode: "brush" as "brush" | "stamp", cb: (_b: Brush) => {} };
  el.innerHTML = brushes.map((b, i) => `<button data-b="${b}" class="${i === 0 ? "active" : ""}">${labels[b]}</button>`).join("") +
    `<button data-mode="stamp">放置</button>`;
  el.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (t.dataset.b) {
      state.mode = "brush";
      el.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      t.classList.add("active");
      state.cb(t.dataset.b as Brush);
    }
    if (t.dataset.mode === "stamp") {
      state.mode = "stamp";
      el.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      t.classList.add("active");
    }
  });
  return {
    el,
    get mode() {
      return state.mode;
    },
    onChange(fn) {
      state.cb = fn;
    },
  };
}

function palette(): {
  el: HTMLElement;
  onChange: (fn: (s: StampId, recipe?: CreatureRecipe) => void) => void;
} {
  const el = document.createElement("div");
  el.className = "palette";
  const trees: { id: StampId; name: string }[] = TREE_KIND_ORDER.map((kind) => ({
    id: (kind === "yan" ? "yanmu" : kind) as StampId,
    name: TREE_KINDS[kind].name,
  }));
  const rest: { id: StampId; name: string }[] = [
    { id: "zhuyu", name: "祝餘" },
    { id: "rock", name: "石" },
    { id: "shengsheng", name: "狌狌" },
    { id: "baiyuan", name: "白猿" },
    { id: "lushu", name: "鹿蜀" },
    { id: "jiweihu", name: "九尾狐" },
    { id: "chimera", name: "異獸" },
  ];
  const btn = (it: { id: StampId; name: string }, active: boolean) =>
    `<button data-s="${it.id}" class="${active ? "active" : ""}">${it.name}</button>`;
  const select = (name: string, opts: { id: string; name: string }[], value: string) =>
    `<label class="chimera-field">${name}<select data-field="${name}">${opts
      .map((o) => `<option value="${o.id}" ${o.id === value ? "selected" : ""}>${o.name}</option>`)
      .join("")}</select></label>`;
  el.innerHTML =
    `<div class="palette-label">常木</div>` +
    trees.map((it, i) => btn(it, i === 0)).join("") +
    `<div class="palette-label">異木</div>` +
    `<button type="button" disabled title="未至其經，需專用模型">建木 · 未至</button>` +
    `<button type="button" disabled title="未至其經，需專用模型">扶桑 · 未至</button>` +
    `<div class="palette-label">草 · 石 · 獸</div>` +
    rest.map((it) => btn(it, false)).join("") +
    `<div class="chimera-strip"><div class="palette-label">異獸組件</div>${select("首", HEAD_LABELS, DEFAULT_CHIMERA.head)}${select("身", BODY_LABELS, DEFAULT_CHIMERA.body)}${select("尾", TAIL_LABELS, DEFAULT_CHIMERA.tail)}${select("肢", LIMB_LABELS, DEFAULT_CHIMERA.limbs)}<label class="chimera-field"><input type="checkbox" data-field="翼" /> 羽翼</label></div>`;
  let cb: (s: StampId, rec?: CreatureRecipe) => void = () => {};
  const readRecipe = (): CreatureRecipe => {
    const val = (label: string) => (el.querySelector(`select[data-field="${label}"]`) as HTMLSelectElement).value;
    const wings = (el.querySelector(`input[data-field="翼"]`) as HTMLInputElement).checked ? "feather" : "none";
    return {
      head: val("首") as HeadId,
      body: val("身") as BodyId,
      tail: val("尾") as TailId,
      limbs: val("肢") as LimbId,
      wings,
      scale: 1.15,
    };
  };
  el.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (!t.dataset.s) return;
    el.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    t.classList.add("active");
    cb(t.dataset.s as StampId, t.dataset.s === "chimera" ? readRecipe() : undefined);
  });
  el.addEventListener("change", () => {
    const rec = readRecipe();
    const active = (el.querySelector("button.active") as HTMLElement | null)?.dataset.s as StampId | undefined;
    cb(active ?? "gui", rec);
  });
  return {
    el,
    onChange(fn) {
      cb = fn;
    },
  };
}
