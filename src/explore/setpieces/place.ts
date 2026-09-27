import { Group } from "three";
import { createCreature } from "../../nature/fauna";
import { makeFusang, makeZhuyuTuft } from "../../catalog/plants";
import { BIBLE, BUZHOU_LANDINGS, SPINES, type BibleFeature } from "../bible";
import { CANON } from "../canon";
import { RIVERS } from "../rivers";
import { SEA_LEVEL } from "../nanshan";
import {
  basin,
  boneRib,
  caveFruit,
  caveMouth,
  crack,
  dolmen,
  drum,
  figure,
  flagSpine,
  flagStone,
  godSlab,
  gravelPatch,
  jadeWell,
  kilnBody,
  logPile,
  megalith,
  mergeGroup,
  mound,
  namingRock,
  oreRocks,
  padStone,
  sit,
  staffPole,
  stoneCircle,
  thatchHut,
  thatchLean,
  tray,
  twig,
  waterDisk,
  waterStrip,
  type Ground,
} from "./kit";

function placeOne(g: Group, ground: Ground, feat: BibleFeature): void {
  const x = feat.x;
  const z = feat.z;
  switch (feat.mesh) {
    case "skip":
      return;
    case "pad":
      padStone(g, ground, x, z);
      return;
    case "megalith":
      megalith(g, ground, x, z, feat.w ?? 6, feat.h ?? 4, feat.d ?? 4, feat.color);
      return;
    case "dolmen":
      dolmen(g, ground, x, z, feat.yaw ?? 0);
      return;
    case "thatchHut":
      thatchHut(g, ground, x, z);
      return;
    case "thatchLean":
      thatchLean(g, ground, x, z);
      return;
    case "jadeWell":
      jadeWell(g, ground, x, z);
      return;
    case "godSlab":
      godSlab(g, ground, x, z, feat.color);
      return;
    case "boneRib":
      boneRib(g, ground, x, z, feat.yaw ?? 0);
      return;
    case "stoneCircle":
      stoneCircle(g, ground, x, z, feat.r ?? 10, feat.n ?? 8, feat.color);
      return;
    case "caveMouth":
      caveMouth(g, ground, x, z);
      return;
    case "chimera": {
      const node = createCreature(feat.chimera ?? "shengsheng");
      const s = feat.scale ?? 2.4;
      node.scale.setScalar(s);
      node.position.set(x, sit(ground, x, z), z);
      node.rotation.y = feat.yaw ?? 0;
      node.userData.skipMerge = true;
      node.userData.homeX = x;
      node.userData.homeZ = z;
      node.userData.baseY = node.position.y;
      g.add(node);
      return;
    }
    case "figure":
      figure(g, ground, x, z, feat.h ?? 2.4, feat.color ?? "#c8c0b0");
      return;
    case "ore":
      oreRocks(g, ground, x, z, feat.color ?? "#c4a35a", feat.w, feat.h, feat.d);
      return;
    case "tuft": {
      const n = feat.n ?? 8;
      for (let i = 0; i < n; i += 1) {
        const a = (i / n) * Math.PI * 2;
        const rr = 2 + (i % 3);
        const tx = x + Math.cos(a) * rr;
        const tz = z + Math.sin(a) * rr;
        const tuft = makeZhuyuTuft();
        tuft.position.set(tx, sit(ground, tx, tz) - 0.02, tz);
        tuft.userData.skipMerge = true;
        g.add(tuft);
      }
      return;
    }
    case "logPile":
      logPile(g, ground, x, z);
      return;
    case "crack":
      crack(g, ground, x, z);
      return;
    case "drum":
      drum(g, ground, x, z);
      return;
    case "tray":
      tray(g, ground, x, z);
      return;
    case "basin":
      basin(g, ground, x, z);
      return;
    case "mound":
      mound(g, ground, x, z);
      return;
    case "staff":
      staffPole(g, ground, x, z, feat.h ?? 4, feat.color);
      return;
    case "flag":
      flagStone(g, ground, x, z);
      return;
    case "kiln":
      kilnBody(g, ground, x, z);
      return;
    case "fruit":
      caveFruit(g, ground, x, z);
      return;
    case "twig":
      twig(g, ground, x, z);
      return;
    case "gravel":
      gravelPatch(g, ground, x, z);
      return;
    case "namingRock":
      namingRock(g, ground, x, z, feat.color ?? "#d8d0c4");
      return;
    default:
      return;
  }
}

function placeRivers(g: Group, ground: Ground): void {
  for (const river of RIVERS) {
    if (river.kind === "disk" || river.kind === "sheet") {
      const c = river.points[0]!;
      const r = river.kind === "sheet" ? Math.max(river.sheetW ?? 20, river.sheetD ?? 20) * 0.45 : (river.r ?? river.width);
      const y = Math.max(SEA_LEVEL + 0.08, sit(ground, c[0], c[1]) + 0.15);
      waterDisk(g, c[0], c[1], r, y, river.color);
      continue;
    }
    for (let i = 0; i < river.points.length - 1; i += 1) {
      const a = river.points[i]!;
      const b = river.points[i + 1]!;
      const mx = (a[0] + b[0]) / 2;
      const mz = (a[1] + b[1]) / 2;
      const y = Math.max(SEA_LEVEL + 0.06, sit(ground, mx, mz) + 0.12);
      waterStrip(g, a[0], a[1], b[0], b[1], river.width, y, river.color);
    }
  }
}

export function fillWorld(ground: Ground): Group {
  const root = new Group();
  root.name = "landmarks";
  const pads = new Group();
  pads.name = "pads";
  for (const m of CANON) {
    const piece = new Group();
    padStone(piece, ground, m.padX, m.padZ);
    mergeGroup(piece);
    pads.add(piece);
  }
  root.add(pads);

  const rivers = new Group();
  rivers.name = "rivers";
  placeRivers(rivers, ground);
  mergeGroup(rivers);
  root.add(rivers);

  for (const feat of BIBLE) {
    if (feat.mesh === "skip") continue;
    const piece = new Group();
    piece.name = feat.name;
    placeOne(piece, ground, feat);
    mergeGroup(piece);
    root.add(piece);
  }

  const paths = new Group();
  paths.name = "spines";
  for (const spine of SPINES) flagSpine(paths, ground, spine.points);
  flagSpine(paths, ground, [[-1640, 72], ...BUZHOU_LANDINGS]);
  mergeGroup(paths);
  root.add(paths);

  const fusang = makeFusang();
  fusang.position.set(3520, Math.max(SEA_LEVEL - 0.4, sit(ground, 3520, 4) - 1.2), 4);
  fusang.userData.skipMerge = true;
  fusang.scale.setScalar(1);
  root.add(fusang);
  return root;
}

export function fillMountain(mountainId: string, ground: Ground): Group {
  const root = new Group();
  root.name = `setpieces-${mountainId}`;
  const m = CANON.find((c) => c.id === mountainId);
  if (m) {
    const pad = new Group();
    padStone(pad, ground, m.padX, m.padZ);
    mergeGroup(pad);
    root.add(pad);
  }
  for (const feat of BIBLE) {
    if (feat.mountainId !== mountainId || feat.mesh === "skip") continue;
    const piece = new Group();
    piece.name = feat.name;
    placeOne(piece, ground, feat);
    mergeGroup(piece);
    root.add(piece);
  }
  const spine = SPINES.find((s) => s.mountainId === mountainId);
  if (spine) {
    const paths = new Group();
    flagSpine(paths, ground, spine.points);
    mergeGroup(paths);
    root.add(paths);
  }
  if (mountainId === "buzhou") {
    const paths = new Group();
    flagSpine(paths, ground, [[-1640, 72], ...BUZHOU_LANDINGS]);
    mergeGroup(paths);
    root.add(paths);
  }
  return root;
}
