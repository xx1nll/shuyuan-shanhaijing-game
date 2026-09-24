import { Group } from "three";
import { heightNanshan, mountainById } from "../explore/nanshan";
import { NEST_ROCK } from "../explore/landmarks";
import { MARSH } from "../explore/landforms";
import { DEFAULT_CHIMERA, RECIPES, type CreatureRecipe } from "../catalog/recipes";
import { assemble } from "./parts";
import type { HeightSampler } from "./terrain";

const SINK = 0.02;
const AIR = new Set(["guanguan"]);

function wrap(id: string, g: Group, rec: CreatureRecipe): Group {
  g.userData.creatureId = id;
  g.userData.recipe = rec;
  g.userData.baseY = 0;
  g.userData.homeX = 0;
  g.userData.homeZ = 0;
  g.userData.airborne = AIR.has(id);
  return g;
}

export function createCreature(id: string, recipe?: CreatureRecipe): Group {
  const rec = recipe ?? RECIPES[id] ?? DEFAULT_CHIMERA;
  return wrap(id, assemble(rec), rec);
}

export function placeWorldCreatures(
  parent: Group,
  ground: HeightSampler,
): { id: string; x: number; z: number }[] {
  const zhaoyao = mountainById("zhaoyao")!;
  const yuanyi = mountainById("yuanyi")!;
  const qingqiu = mountainById("qingqiu")!;
  const spots: { id: string; x: number; z: number; yOff?: number }[] = [
    { id: "shengsheng", x: zhaoyao.x - 18, z: zhaoyao.z + 22 },
    { id: "guaishen", x: yuanyi.padX - 6, z: yuanyi.padZ + 10 },
    { id: "jiweihu", x: qingqiu.x - 10, z: qingqiu.z + 44 },
    { id: "guanguan", x: NEST_ROCK.x + 2, z: NEST_ROCK.z - 3, yOff: 2.8 },
    { id: "chilu", x: MARSH.x + 4, z: MARSH.z + MARSH.r * 0.72, yOff: 0.05 },
  ];
  const placed: { id: string; x: number; z: number }[] = [];
  for (const s of spots) {
    const node = createCreature(s.id);
    const y = ground(s.x, s.z) + (s.yOff ?? 0) - (AIR.has(s.id) ? 0 : SINK);
    node.position.set(s.x, y, s.z);
    node.userData.baseY = y;
    node.userData.homeX = s.x;
    node.userData.homeZ = s.z;
    node.rotation.y = Math.random() * Math.PI;
    parent.add(node);
    placed.push({ id: s.id, x: s.x, z: s.z });
  }
  return placed;
}

const STILL = new Set(["xuangui", "chilu", "lu"]);

export function updateCreatures(root: Group, time: number, ground?: HeightSampler): void {
  root.traverse((obj) => {
    if (obj.userData.part === "tail") {
      obj.rotation.y = Math.sin(time * 1.6 + obj.id) * 0.18;
    }
    if (!obj.userData.creatureId || obj.parent !== root) return;
    const id = obj.userData.creatureId as string;
    const homeX = (obj.userData.homeX as number) ?? obj.position.x;
    const homeZ = (obj.userData.homeZ as number) ?? obj.position.z;
    const baseY = (obj.userData.baseY as number) ?? obj.position.y;
    if (!STILL.has(id)) {
      obj.position.x = homeX + Math.sin(time * 0.45 + homeX) * 1.15;
      obj.position.z = homeZ + Math.cos(time * 0.38 + homeZ) * 1.05;
      obj.rotation.y += 0.35 * 0.016;
    }
    if (obj.userData.airborne) {
      obj.position.y = baseY + Math.sin(time * 2.1 + homeX) * 0.2;
    } else {
      const gy = ground ? ground(obj.position.x, obj.position.z) - SINK : baseY;
      obj.position.y = gy + Math.sin(time * 2.1 + homeX) * 0.02;
    }
  });
}

export function createQingqiuFlock(): { group: Group; update: (time: number) => void } {
  const group = new Group();
  const cx = NEST_ROCK.x;
  const cz = NEST_ROCK.z;
  const birds: Group[] = [];
  for (let i = 0; i < 10; i += 1) {
    const b = createCreature("guanguan");
    b.userData.airborne = true;
    group.add(b);
    birds.push(b);
  }
  const nestY = heightNanshan(NEST_ROCK.x, NEST_ROCK.z) + 7;
  return {
    group,
    update(time: number) {
      birds.forEach((b, i) => {
        const a = time * 0.35 + i * 0.45;
        b.position.set(
          cx + Math.cos(a) * 14,
          nestY + Math.sin(a * 2.1 + i) * 3.2,
          cz + Math.sin(a * 0.9) * 11,
        );
        b.rotation.y = -a + Math.PI / 2;
      });
    },
  };
}
