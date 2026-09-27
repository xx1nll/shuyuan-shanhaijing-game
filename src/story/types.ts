import { STORY_BEATS } from "../explore/bible";

/** Stubs for later 劇情. Scene 1 walks 帝之序 on existing bible coords. */

export type NpcId = string;

export interface Npc {
  id: NpcId;
  name: string;
  mountainId?: string;
}

export type QuestStatus = "locked" | "active" | "done";

export interface Quest {
  id: string;
  title: string;
  status: QuestStatus;
  steps: string[];
}

export interface StoryState {
  npcs: Npc[];
  quests: Quest[];
  仁羿: boolean;
}

const LUWU = { x: -3112, z: -100 };
const QIU_PAD = { x: -3162, z: -82 };

let state: StoryState = makeEmpty();

function makeEmpty(): StoryState {
  return {
    npcs: [{ id: "change", name: "嫦娥", mountainId: "heichi" }],
    quests: STORY_BEATS.map((beat, i) => ({
      id: beat.id,
      title: beat.name,
      status: i === 0 ? "active" : "locked",
      steps: [`行至${beat.name}`],
    })),
    仁羿: false,
  };
}

export function emptyStory(): StoryState {
  state = makeEmpty();
  return state;
}

export function getStory(): StoryState {
  return state;
}

export function canClimbShanggang(): boolean {
  return state.仁羿;
}

export function noteStoryProximity(x: number, z: number): void {
  if (Math.hypot(x - LUWU.x, z - LUWU.z) < 40 || Math.hypot(x - QIU_PAD.x, z - QIU_PAD.z) < 22) {
    state.仁羿 = true;
  }
  let unlocked = false;
  for (const quest of state.quests) {
    const beat = STORY_BEATS.find((b) => b.id === quest.id);
    if (!beat) continue;
    if (Math.hypot(x - beat.x, z - beat.z) < 32) {
      quest.status = "done";
      unlocked = true;
    } else if (unlocked && quest.status === "locked") {
      quest.status = "active";
      unlocked = false;
    }
  }
}
