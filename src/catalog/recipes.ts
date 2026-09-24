export type HeadId =
  | "tiger"
  | "cow"
  | "horse"
  | "fox"
  | "macaque"
  | "gibbon"
  | "sheep"
  | "bird"
  | "carp";

export type BodyId =
  | "horse"
  | "fox"
  | "cow"
  | "macaque"
  | "gibbon"
  | "civet"
  | "sheep"
  | "fish"
  | "turtle";

export type TailId = "none" | "horse" | "redHorse" | "fox" | "foxNine" | "longMonkey" | "snake" | "fish";

export type LimbId = "ungulate" | "digitigrade" | "gibbon" | "fins" | "none";

export type WingId = "none" | "feather";

export interface CreatureRecipe {
  head: HeadId;
  body: BodyId;
  tail: TailId;
  limbs: LimbId;
  wings?: WingId;
  lookBack?: boolean;
  extraEars?: boolean;
  backEye?: boolean;
  humanFace?: boolean;
  mane?: boolean;
  serpentine?: boolean;
  headTint?: "white" | "pink" | "default";
  bodyPelt?: "tiger" | "default";
  scale?: number;
}

export const HEAD_LABELS: { id: HeadId; name: string }[] = [
  { id: "tiger", name: "虎" },
  { id: "cow", name: "牛" },
  { id: "horse", name: "馬" },
  { id: "fox", name: "狐" },
  { id: "macaque", name: "獼猴" },
  { id: "gibbon", name: "猿" },
  { id: "sheep", name: "羊" },
  { id: "bird", name: "鳥" },
  { id: "carp", name: "鯉" },
];

export const BODY_LABELS: { id: BodyId; name: string }[] = [
  { id: "horse", name: "馬" },
  { id: "fox", name: "狐" },
  { id: "cow", name: "牛" },
  { id: "macaque", name: "獼猴" },
  { id: "gibbon", name: "猿" },
  { id: "civet", name: "狸" },
  { id: "sheep", name: "羊" },
  { id: "fish", name: "魚" },
  { id: "turtle", name: "龜" },
];

export const TAIL_LABELS: { id: TailId; name: string }[] = [
  { id: "none", name: "無" },
  { id: "horse", name: "馬" },
  { id: "redHorse", name: "赤馬" },
  { id: "fox", name: "狐" },
  { id: "foxNine", name: "九尾" },
  { id: "longMonkey", name: "猿" },
  { id: "snake", name: "蛇" },
  { id: "fish", name: "魚" },
];

export const LIMB_LABELS: { id: LimbId; name: string }[] = [
  { id: "ungulate", name: "蹄" },
  { id: "digitigrade", name: "趾行" },
  { id: "gibbon", name: "長臂" },
  { id: "fins", name: "鰭" },
  { id: "none", name: "無" },
];

export const RECIPES: Record<string, CreatureRecipe> = {
  shengsheng: {
    head: "macaque",
    body: "macaque",
    tail: "longMonkey",
    limbs: "digitigrade",
    headTint: "pink",
    scale: 1.35,
  },
  baiyuan: {
    head: "gibbon",
    body: "gibbon",
    tail: "none",
    limbs: "gibbon",
    scale: 1.25,
  },
  guaishen: {
    head: "carp",
    body: "fish",
    tail: "snake",
    limbs: "none",
    serpentine: true,
  },
  lushu: {
    head: "horse",
    body: "horse",
    tail: "redHorse",
    limbs: "ungulate",
    headTint: "white",
    bodyPelt: "tiger",
    scale: 1.2,
  },
  xuangui: {
    head: "bird",
    body: "turtle",
    tail: "snake",
    limbs: "none",
  },
  lu: {
    head: "cow",
    body: "fish",
    tail: "snake",
    limbs: "none",
    wings: "feather",
  },
  lei: {
    head: "fox",
    body: "civet",
    tail: "fox",
    limbs: "digitigrade",
    mane: true,
    scale: 1.2,
  },
  bochi: {
    head: "sheep",
    body: "sheep",
    tail: "foxNine",
    limbs: "ungulate",
    extraEars: true,
    backEye: true,
    scale: 1.15,
  },
  jiweihu: {
    head: "fox",
    body: "fox",
    tail: "foxNine",
    limbs: "digitigrade",
    lookBack: true,
    scale: 1.55,
  },
  guanguan: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 0.72,
  },
  chilu: {
    head: "carp",
    body: "fish",
    tail: "fish",
    limbs: "fins",
    humanFace: true,
  },
};

export const DEFAULT_CHIMERA: CreatureRecipe = {
  head: "tiger",
  body: "cow",
  tail: "fish",
  limbs: "ungulate",
  scale: 1.15,
};
