import { Color, FogExp2, Group, Raycaster, Vector2 } from "three";
import { C } from "../style/palette";
import type { Engine } from "../engine";
import type { Quality } from "../quality";
import { makeTree, makeZhuyuTuft, placeTree, updateHeroWind } from "../catalog/plants";
import { MOUNTAIN_COVER, type TreeKind, type TreeOverlay } from "../catalog/trees";
import { createSky } from "../nature/sky";
import { createOcean, updateOcean } from "../nature/ocean";
import { createGrass, updateGrass } from "../nature/grass";
import { createClouds, createMist } from "../nature/atmosphere";
import { createRocks } from "../nature/scatter";
import { createQingqiuFlock, placeWorldCreatures, updateCreatures } from "../nature/fauna";
import { bakedHeight } from "../nature/terrain";
import { surfaceOnTerrains, buildNanshanTerrains, rebuildTerrainAt, updateTerrainLod } from "./patches";
import { bakeWorldSchematic, NANSHAN_MAP } from "./mapBake";
import {
  MOUNTAINS,
  SEA_LEVEL,
  X_EAST,
  X_WEST,
  Z_NORTH,
  Z_SOUTH,
  biomeNanshan,
  heightNanshan,
  mountainById,
  nearestMountain,
  setActiveMountain,
} from "./nanshan";
import { fillAll } from "./setpieces";
import { Player } from "./player";
import { applySculptBrush, downloadSculptJson, type SculptBrush } from "./sculpt";
import { mountDex } from "./dex";
import { mountMinimap } from "./minimap";
import { mountWorldMap } from "./worldMap";
import { treePrototypeCount } from "../quality";
import { readMute, toggleMute } from "../nature/audio";
import "../nature/bvh";

export interface ExploreOpts {
  mountainId?: string;
  onSwitchMountain?: (mountainId: string) => void;
}

export async function startExplore(
  engine: Engine,
  overlay: HTMLElement,
  quality: Quality,
  onBack: () => void,
  opts: ExploreOpts = {},
): Promise<() => void> {
  overlay.innerHTML = `<div class="loading">正在生成山海……</div>`;
  await new Promise<void>((r) => {
    const go = () => r();
    requestAnimationFrame(go);
    window.setTimeout(go, 40);
  });
  const spawnM = mountainById(opts.mountainId ?? "zhaoyao") ?? MOUNTAINS[0]!;
  setActiveMountain(spawnM.id);
  const mountainIds = MOUNTAINS.map((m) => m.id);

  engine.scene.fog = new FogExp2(new Color(C.sky).getHex(), 0.0016);
  const sky = createSky(engine.scene, quality);
  const bank = buildNanshanTerrains({
    sample: heightNanshan,
    biomeAt: biomeNanshan,
    quality,
    x: spawnM.padX,
    z: spawnM.padZ,
  });
  engine.scene.add(bank.group);
  const ground = (x: number, z: number) => surfaceOnTerrains(bank.meshes, x, z, heightNanshan(x, z)).y;
  const placeOn = (x: number, z: number) => bakedHeight(heightNanshan, x, z) + 0.08;

  const sea = createOcean({
    x: (X_WEST + X_EAST) / 2,
    z: (Z_SOUTH + Z_NORTH) / 2,
    width: X_EAST - X_WEST + 180,
    depth: Z_NORTH - Z_SOUTH + 180,
    qualityHigh: quality === "high",
  });
  engine.scene.add(sea);

  const grass = createGrass({
    terrain: bank.meshes,
    sample: heightNanshan,
    biomeAt: biomeNanshan,
    minX: X_WEST,
    maxX: X_EAST,
    minZ: Z_SOUTH,
    maxZ: Z_NORTH,
    quality,
  });
  engine.scene.add(grass);

  const rocks = createRocks({
    terrain: bank.meshes,
    sample: heightNanshan,
    biomeAt: biomeNanshan,
    minX: X_WEST,
    maxX: X_EAST,
    minZ: Z_SOUTH,
    maxZ: Z_NORTH,
    count: quality === "high" ? 90 : 45,
  });
  engine.scene.add(rocks);

  const plants = new Group();
  plantCover(plants, quality, placeOn, mountainIds);
  plants.traverse((obj) => {
    obj.castShadow = false;
  });
  engine.scene.add(plants);

  engine.scene.add(fillAll(placeOn));

  const beasts = new Group();
  placeWorldCreatures(beasts, placeOn, mountainIds);
  engine.scene.add(beasts);

  const flock = createQingqiuFlock();
  engine.scene.add(flock.group);
  const clouds = createClouds(quality);
  engine.scene.add(clouds.group);
  const mistWest = createMist(520 - 22, 20, 38);
  mistWest.group.scale.set(6, 4.5, 10);
  engine.scene.add(mistWest.group);
  const mistMid = createMist(520 - 14, 20 + 18, 52);
  mistMid.group.scale.set(5, 3.5, 8);
  engine.scene.add(mistMid.group);

  const worldChart = bakeWorldSchematic();

  overlay.innerHTML = "";
  const spawnX = spawnM.padX;
  const spawnZ = spawnM.padZ;
  const player = new Player(engine.camera, heightNanshan, bank.meshes, {
    minX: X_WEST + 12,
    maxX: X_EAST - 12,
    minZ: Z_SOUTH + 12,
    maxZ: Z_NORTH - 12,
    camDist: 16,
    camHeight: 9,
  });
  player.rig.position.set(spawnX, ground(spawnX, spawnZ), spawnZ);
  engine.scene.add(player.rig);
  (window as unknown as { __player?: Player }).__player = player;
  updateGrass(grass, 0, spawnX, spawnZ);

  const dex = mountDex(overlay, quality);
  const worldMap = mountWorldMap(overlay, (locus) => {
    if (!locus.walkable || locus.worldX === undefined) return;
    document.exitPointerLock();
    player.teleport(locus.worldX, locus.worldZ ?? 0);
  }, worldChart);
  overlay.appendChild(
    hud(onBack, quality, () => dex.open(), () => {
      document.exitPointerLock();
      if (worldMap.isOpen()) worldMap.close();
      else worldMap.open();
    }),
  );
  const minimap = mountMinimap(overlay, () => {
    document.exitPointerLock();
    worldMap.open();
  }, worldChart, NANSHAN_MAP, spawnM.id);
  const joystick = document.createElement("div");
  joystick.className = "joystick";
  joystick.innerHTML = `<div class="knob"></div>`;
  overlay.appendChild(joystick);
  const hint = document.createElement("div");
  hint.className = "hint";
  hint.textContent = "WASD 行走 · 滑鼠環視 · F 飛行 · M 大地圖";
  overlay.appendChild(hint);
  const flyHud = mountFlyHud(overlay, player);

  const unbind = player.bind(engine.renderer.domElement, joystick);
  const unbindSculpt = bindSculpt(engine, bank, player);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "m" || e.key === "M") {
      e.preventDefault();
      document.exitPointerLock();
      if (worldMap.isOpen()) worldMap.close();
      else worldMap.open();
    }
    if (e.key === "Escape" && worldMap.isOpen()) {
      worldMap.close();
    }
    if (e.key === "[" || e.key === "]") {
      player.cycleFlySpeed(e.key === "]" ? 1 : -1);
      flyHud.sync(player.flying);
    }
  };
  window.addEventListener("keydown", onKey);

  engine.setFrame((dt, elapsed) => {
    if (!worldMap.isOpen()) player.update(dt);
    sky.update(elapsed, engine.camera.position.x, engine.camera.position.z);
    updateOcean(sea, elapsed, engine.camera.position.x, engine.camera.position.y, engine.camera.position.z);
    updateGrass(grass, elapsed, player.rig.position.x, player.rig.position.z);
    clouds.update(elapsed);
    mistWest.update(elapsed);
    mistMid.update(elapsed);
    flock.update(elapsed);
    updateCreatures(beasts, elapsed, ground);
    updateCreatures(engine.scene, elapsed, ground);
    updateHeroWind(plants, elapsed);

    const here = nearestMountain(player.rig.position.x, player.rig.position.z);
    const fogDensity = here.id === "yuanyi" ? 0.006 : 0.0016;
    (engine.scene.fog as FogExp2).density += (fogDensity - (engine.scene.fog as FogExp2).density) * 0.04;

    const px = player.rig.position.x;
    const pz = player.rig.position.z;
    updateTerrainLod(bank, px, pz, heightNanshan, biomeNanshan, quality);
    minimap.update(px, pz, player.yaw, nearestMountain(px, pz).name);
    worldMap.update(px, pz, player.yaw);
    flyHud.sync(player.flying);
  });

  return () => {
    setActiveMountain(null);
    delete (window as unknown as { __player?: Player }).__player;
    window.removeEventListener("keydown", onKey);
    unbind();
    unbindSculpt();
    engine.scene.clear();
    overlay.innerHTML = "";
  };
}

function plantCover(
  plants: Group,
  quality: Quality,
  ground: (x: number, z: number) => number,
  mountainIds: string[],
): void {
  const protoN = treePrototypeCount(quality);
  const cache = new Map<string, Group[]>();
  const protoKey = (kind: TreeKind, overlay?: TreeOverlay) =>
    `${kind}:${overlay?.glowSiZhao ? "g" : ""}${overlay?.strange ? "s" : ""}${overlay?.lacquer ? "l" : ""}`;
  const protos = (kind: TreeKind, overlay?: TreeOverlay): Group[] => {
    const key = protoKey(kind, overlay);
    let list = cache.get(key);
    if (!list) {
      const salt = kind.charCodeAt(0) * 97 + (overlay?.strange ? 31 : 0);
      list = Array.from({ length: protoN }, (_, i) => makeTree(kind, salt + i * 17, quality, overlay));
      cache.set(key, list);
    }
    return list;
  };
  const allow = new Set(mountainIds);

  for (const cover of MOUNTAIN_COVER) {
    if (!allow.has(cover.mountainId)) continue;
    const mountain = MOUNTAINS.find((m) => m.id === cover.mountainId);
    const cx = mountain?.x ?? 0;
    const cz = mountain?.z ?? 0;
    const padX = mountain?.padX ?? cx;
    const padZ = mountain?.padZ ?? cz;
    for (const sc of cover.scatter) {
      const bank = protos(sc.kind, sc.overlay);
      for (let i = 0; i < sc.count; i += 1) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * sc.radius;
        const x = cx + (sc.xCenter ?? 0) + Math.cos(a) * r;
        const z = cz + (sc.zCenter ?? 0) + Math.sin(a) * r;
        const y = ground(x, z);
        if (y < SEA_LEVEL + 0.4) continue;
        if (cover.mountainId === "yuanyi" && y > 50) continue;
        if (Math.hypot(x - padX, z - padZ) < 40) continue;
        plants.add(placeTree(bank[i % bank.length]!, x, y - 0.04, z, Math.random() * Math.PI * 2));
      }
    }
    for (const sp of cover.specimens ?? []) {
      const tree = makeTree(sp.kind, 4400 + Math.floor(sp.x * 9), quality, sp.overlay);
      const x = cx + sp.x;
      const z = cz + sp.z;
      const y = ground(x, z);
      plants.add(placeTree(tree, x, y - 0.04, z, sp.yaw ?? 0));
    }
    if (cover.zhuyu) {
      const h = cover.zhuyu;
      for (let i = 0; i < h.count; i += 1) {
        const tuft = makeZhuyuTuft();
        const x = cx + h.minX + Math.random() * h.spanX;
        const z = cz + h.minZ + Math.random() * h.spanZ;
        tuft.position.set(x, ground(x, z) - 0.02, z);
        plants.add(tuft);
      }
    }
  }
}

function hud(onBack: () => void, quality: Quality, onDex: () => void, onMap: () => void): HTMLElement {
  const bar = document.createElement("div");
  bar.className = "hud";
  bar.innerHTML = `
    <div class="hud-cluster">
      <button class="ghost" id="back">返回</button>
      <button class="ghost" id="mute">${readMute() ? "靜音中" : "靜音"}</button>
      <button class="ghost" id="map">地圖</button>
      <button class="ghost" id="dex">圖鑑</button>
      <span style="letter-spacing:0.2em">第一景 · ${quality === "high" ? "細緻" : "流暢"}</span>
    </div>
  `;
  bar.querySelector("#back")!.addEventListener("click", onBack);
  bar.querySelector("#mute")!.addEventListener("click", (e) => {
    const muted = toggleMute();
    (e.currentTarget as HTMLElement).textContent = muted ? "靜音中" : "靜音";
  });
  bar.querySelector("#map")!.addEventListener("click", onMap);
  bar.querySelector("#dex")!.addEventListener("click", onDex);
  return bar;
}

function mountFlyHud(overlay: HTMLElement, player: Player): { sync: (flying: boolean) => void } {
  const el = document.createElement("div");
  el.className = "fly-hud hidden";
  el.innerHTML = `
    <span>飛行 · Space/E 升 · Q 降 · Esc 解鎖後拖曳改地形</span>
    <span class="fly-debug">除錯 飛行速度</span>
    <button class="ghost" id="fly-slow" data-s="0">慢</button>
    <button class="ghost active" id="fly-mid" data-s="1">中</button>
    <button class="ghost" id="fly-fast" data-s="2">快</button>
    <button class="ghost active" data-b="raise">堆高</button>
    <button class="ghost" data-b="lower">挖低</button>
    <button class="ghost" data-b="smooth">平滑</button>
    <button class="ghost" id="export-sculpt">匯出地形 JSON</button>
  `;
  overlay.appendChild(el);
  const syncSpeed = () => {
    el.querySelectorAll("button[data-s]").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.getAttribute("data-s")) === player.flySpeedIndex);
    });
  };
  el.querySelectorAll("button[data-s]").forEach((btn) => {
    btn.addEventListener("click", () => {
      player.flySpeedIndex = Number(btn.getAttribute("data-s"));
      syncSpeed();
    });
  });
  el.querySelector("#export-sculpt")!.addEventListener("click", () => downloadSculptJson());
  el.querySelectorAll("button[data-b]").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.querySelectorAll("button[data-b]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentBrush = btn.getAttribute("data-b") as SculptBrush;
    });
  });
  return {
    sync(flying: boolean) {
      el.classList.toggle("hidden", !flying);
      syncSpeed();
    },
  };
}

let currentBrush: SculptBrush = "raise";

function bindSculpt(
  engine: Engine,
  bank: ReturnType<typeof buildNanshanTerrains>,
  player: Player,
): () => void {
  const canvas = engine.renderer.domElement;
  const ray = new Raycaster();
  const pointer = new Vector2();
  let painting = false;

  const hitGround = (clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(pointer, engine.camera);
    const hits = ray.intersectObjects(bank.meshes, false);
    return hits[0]?.point;
  };

  const paint = (clientX: number, clientY: number) => {
    if (!player.flying || document.pointerLockElement === canvas) return;
    const p = hitGround(clientX, clientY);
    if (!p) return;
    applySculptBrush(p.x, p.z, currentBrush);
    rebuildTerrainAt(bank, p.x, p.z, heightNanshan);
  };

  const down = (e: PointerEvent) => {
    if (!player.flying || document.pointerLockElement === canvas || e.button !== 0) return;
    painting = true;
    paint(e.clientX, e.clientY);
  };
  const move = (e: PointerEvent) => {
    if (!painting) return;
    paint(e.clientX, e.clientY);
  };
  const up = () => {
    painting = false;
  };
  canvas.addEventListener("pointerdown", down);
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
  return () => {
    canvas.removeEventListener("pointerdown", down);
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
  };
}
