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
import { surfaceOnTerrains, buildNanshanTerrains, rebuildTerrainAt } from "./patches";
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
} from "./nanshan";
import { createLandmarks } from "./landmarks";
import { Player } from "./player";
import { applySculptBrush, downloadSculptJson, type SculptBrush } from "./sculpt";
import { mountDex } from "./dex";
import { mountMinimap } from "./minimap";
import { mountWorldMap } from "./worldMap";
import { treePrototypeCount } from "../quality";
import "../nature/bvh";

export async function startExplore(
  engine: Engine,
  overlay: HTMLElement,
  quality: Quality,
  onBack: () => void,
): Promise<() => void> {
  overlay.innerHTML = `<div class="loading">正在生成南山……</div>`;
  await new Promise<void>((r) => {
    const go = () => r();
    requestAnimationFrame(go);
    window.setTimeout(go, 40);
  });
  engine.scene.fog = new FogExp2(new Color(C.sky).getHex(), 0.0042);
  const sky = createSky(engine.scene, quality);
  const bank = buildNanshanTerrains({ sample: heightNanshan, biomeAt: biomeNanshan, quality });
  engine.scene.add(bank.group);
  const ground = (x: number, z: number) => surfaceOnTerrains(bank.meshes, x, z, heightNanshan(x, z)).y;

  const sea = createOcean({
    x: (X_WEST + X_EAST) / 2,
    z: (Z_SOUTH + Z_NORTH) / 2,
    width: X_EAST - X_WEST + 420,
    depth: Z_NORTH - Z_SOUTH + 420,
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
    count: quality === "high" ? 420 : 180,
  });
  engine.scene.add(rocks);

  const plants = new Group();
  plantCover(plants, quality, ground);
  engine.scene.add(plants);

  engine.scene.add(createLandmarks(ground));

  const beasts = new Group();
  placeWorldCreatures(beasts, ground);
  engine.scene.add(beasts);

  const flock = createQingqiuFlock();
  engine.scene.add(flock.group);
  const clouds = createClouds(quality);
  engine.scene.add(clouds.group);
  const yuanyi = mountainById("yuanyi")!;
  const zhaoyao = mountainById("zhaoyao")!;
  const mistWest = createMist(yuanyi.x - 22, yuanyi.z, 38);
  mistWest.group.scale.set(6, 4.5, 10);
  engine.scene.add(mistWest.group);
  const mistMid = createMist(yuanyi.x - 14, yuanyi.z + 18, 52);
  mistMid.group.scale.set(5, 3.5, 8);
  engine.scene.add(mistMid.group);

  overlay.innerHTML = "";
  const spawnX = zhaoyao.padX;
  const spawnZ = zhaoyao.padZ;
  const player = new Player(engine.camera, heightNanshan, bank.meshes, {
    minX: X_WEST + 18,
    maxX: X_EAST - 18,
    minZ: Z_SOUTH + 18,
    maxZ: Z_NORTH - 18,
    camDist: 16,
    camHeight: 9,
  });
  player.rig.position.set(spawnX, ground(spawnX, spawnZ), spawnZ);
  engine.scene.add(player.rig);
  (window as unknown as { __player?: Player }).__player = player;

  const dex = mountDex(overlay, quality);
  const worldMap = mountWorldMap(overlay, (locus) => {
    if (!locus.walkable || locus.worldX === undefined) return;
    document.exitPointerLock();
    player.teleport(locus.worldX, locus.worldZ ?? 0);
  });
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
  });
  const joystick = document.createElement("div");
  joystick.className = "joystick";
  joystick.innerHTML = `<div class="knob"></div>`;
  overlay.appendChild(joystick);
  const hint = document.createElement("div");
  hint.className = "hint";
  hint.textContent = "WASD 行走 · 滑鼠環視 · F 飛行 · M 大地圖";
  overlay.appendChild(hint);
  const flyHud = mountFlyHud(overlay);

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
  };
  window.addEventListener("keydown", onKey);

  engine.setFrame((dt, elapsed) => {
    if (!worldMap.isOpen()) player.update(dt);
    sky.update(elapsed, engine.camera.position.x, engine.camera.position.z);
    updateOcean(sea, elapsed, engine.camera.position.x, engine.camera.position.y, engine.camera.position.z);
    updateGrass(grass, elapsed);
    clouds.update(elapsed);
    mistWest.update(elapsed);
    mistMid.update(elapsed);
    flock.update(elapsed);
    updateCreatures(beasts, elapsed, ground);
    updateHeroWind(plants, elapsed);

    const fogDensity = nearestMountain(player.rig.position.x, player.rig.position.z).id === "yuanyi" ? 0.014 : 0.0038;
    (engine.scene.fog as FogExp2).density += (fogDensity - (engine.scene.fog as FogExp2).density) * 0.04;

    const px = player.rig.position.x;
    const pz = player.rig.position.z;
    const m = nearestMountain(px, pz);
    minimap.update(px, pz, player.yaw, m.name);
    worldMap.update(px, pz, player.yaw);
    flyHud.sync(player.flying);
  });

  return () => {
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

  for (const cover of MOUNTAIN_COVER) {
    const mountain = MOUNTAINS.find((m) => m.id === cover.mountainId);
    const cx = mountain?.x ?? 0;
    const cz = mountain?.z ?? 0;
    for (const sc of cover.scatter) {
      const bank = protos(sc.kind, sc.overlay);
      for (let i = 0; i < sc.count; i += 1) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * sc.radius;
        const x = cx + (sc.xCenter ?? 0) + Math.cos(a) * r;
        const z = cz + (sc.zCenter ?? 0) + Math.sin(a) * r;
        const y = ground(x, z);
        if (y < SEA_LEVEL + 0.4) continue;
        if (cover.mountainId === "yuanyi" && (x < cx + 8 || y > 34)) continue;
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
      <button class="ghost" id="map">地圖</button>
      <button class="ghost" id="dex">圖鑑</button>
      <span style="letter-spacing:0.2em">南山經 · ${quality === "high" ? "細緻" : "流暢"}</span>
    </div>
  `;
  bar.querySelector("#back")!.addEventListener("click", onBack);
  bar.querySelector("#map")!.addEventListener("click", onMap);
  bar.querySelector("#dex")!.addEventListener("click", onDex);
  return bar;
}

function mountFlyHud(overlay: HTMLElement): { sync: (flying: boolean) => void } {
  const el = document.createElement("div");
  el.className = "fly-hud hidden";
  el.innerHTML = `
    <span>飛行 · Space/E 升 · Q 降 · Esc 解鎖後拖曳改地形</span>
    <button class="ghost active" data-b="raise">堆高</button>
    <button class="ghost" data-b="lower">挖低</button>
    <button class="ghost" data-b="smooth">平滑</button>
    <button class="ghost" id="export-sculpt">匯出地形 JSON</button>
  `;
  overlay.appendChild(el);
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
