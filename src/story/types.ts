/** Stubs for later 劇情. No story content in v1. */

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
}

export function emptyStory(): StoryState {
  return { npcs: [], quests: [] };
}
