import { Group, type Object3D } from "three";
import { heightNanshan } from "../explore/nanshan";
import { MARSH } from "../explore/landforms";
import { DEFAULT_CHIMERA, RECIPES, type CreatureRecipe } from "../catalog/recipes";
import { assemble } from "./parts";
import type { HeightSampler } from "./terrain";

const SINK = 0.02;
const NEST_ROCK = { x: 1056, z: 16 };
const AIR = new Set(["guanguan", "jingwei", "fenghuang", "qinyuan", "chunniao", "qingniao", "bifang", "luan"]);

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
  _mountainIds?: string[],
): { id: string; x: number; z: number }[] {
  const node = createCreature("guanguan");
  const x = NEST_ROCK.x + 2;
  const z = NEST_ROCK.z - 3;
  const y = ground(x, z) + 2.8;
  node.position.set(x, y, z);
  node.userData.baseY = y;
  node.userData.homeX = x;
  node.userData.homeZ = z;
  parent.add(node);
  const fish = createCreature("chilu");
  fish.position.set(MARSH.x + 4, ground(MARSH.x + 4, MARSH.z) + 0.05, MARSH.z);
  fish.userData.baseY = fish.position.y;
  fish.userData.homeX = fish.position.x;
  fish.userData.homeZ = fish.position.z;
  parent.add(fish);
  return [
    { id: "guanguan", x, z },
    { id: "chilu", x: MARSH.x + 4, z: MARSH.z },
  ];
}

const STILL = new Set(["xuangui", "chilu", "lu", "luwu", "kaiming", "xiwangmu", "xingtian", "zhurong", "dijiang", "fenghuang", "xihe", "kui"]);

export function updateCreatures(root: Object3D, time: number, ground?: HeightSampler): void {
  root.traverse((obj) => {
    if (obj.userData.part === "tail") {
      obj.rotation.y = Math.sin(time * 1.6 + obj.id) * 0.18;
    }
    if (!obj.userData.creatureId) return;
    if (obj.parent && obj.parent !== root && !obj.userData.homeX && obj.userData.homeX !== 0) return;
    const id = obj.userData.creatureId as string;
    const homeX = (obj.userData.homeX as number) ?? obj.position.x;
    const homeZ = (obj.userData.homeZ as number) ?? obj.position.z;
    const baseY = (obj.userData.baseY as number) ?? obj.position.y;
    if (id === "jingwei") {
      const t = time * 0.12;
      obj.position.x = 420 + (2240 - 420) * (0.5 + 0.5 * Math.sin(t));
      obj.position.z = -988 + (498 + 988) * (0.5 + 0.5 * Math.sin(t));
    } else if (!STILL.has(id) && !obj.userData.still) {
      obj.position.x = homeX + Math.sin(time * 0.45 + homeX) * 1.15;
      obj.position.z = homeZ + Math.cos(time * 0.38 + homeZ) * 1.05;
      obj.rotation.y += 0.35 * 0.016;
    }
    if (obj.userData.airborne) {
      obj.position.y = baseY + Math.sin(time * 2.1 + homeX) * 0.2;
    } else if (ground) {
      const gy = ground(obj.position.x, obj.position.z) - SINK;
      obj.position.y = gy + Math.sin(time * 2.1 + homeX) * 0.02;
    }
  });
}

export function createQingqiuFlock(): { group: Group; update: (t: number) => void } {
  const group = new Group();
  group.name = "灌灌";
  for (let i = 0; i < 6; i += 1) {
    const bird = createCreature("guanguan");
    bird.position.set(NEST_ROCK.x + (i - 2.5) * 3.2, heightNanshan(NEST_ROCK.x, NEST_ROCK.z) + 4 + (i % 3), NEST_ROCK.z + (i % 2) * 4);
    bird.userData.homeX = bird.position.x;
    bird.userData.homeZ = bird.position.z;
    bird.userData.baseY = bird.position.y;
    group.add(bird);
  }
  return {
    group,
    update(t: number) {
      updateCreatures(group, t);
    },
  };
}
