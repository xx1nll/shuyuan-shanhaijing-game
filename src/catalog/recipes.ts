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
  fenghuang: {
    head: "bird",
    body: "sheep",
    tail: "redHorse",
    limbs: "none",
    wings: "feather",
    scale: 1.8,
  },
  tuanyu: {
    head: "carp",
    body: "fish",
    tail: "fish",
    limbs: "fins",
    mane: true,
    scale: 1.3,
  },
  jingwei: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 0.85,
  },
  zhurong: {
    head: "tiger",
    body: "cow",
    tail: "snake",
    limbs: "ungulate",
    humanFace: true,
    scale: 1.6,
  },
  dijiang: {
    head: "sheep",
    body: "sheep",
    tail: "none",
    limbs: "ungulate",
    wings: "feather",
    scale: 1.4,
  },
  luwu: {
    head: "tiger",
    body: "cow",
    tail: "foxNine",
    limbs: "digitigrade",
    humanFace: true,
    bodyPelt: "tiger",
    scale: 1.7,
  },
  tulou: {
    head: "sheep",
    body: "sheep",
    tail: "fox",
    limbs: "ungulate",
    extraEars: true,
    scale: 1.3,
  },
  qinyuan: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 0.55,
  },
  chunniao: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 0.9,
  },
  kaiming: {
    head: "tiger",
    body: "cow",
    tail: "foxNine",
    limbs: "digitigrade",
    humanFace: true,
    bodyPelt: "tiger",
    scale: 2.1,
  },
  bifang: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 1.1,
  },
  luan: {
    head: "bird",
    body: "sheep",
    tail: "redHorse",
    limbs: "none",
    wings: "feather",
    scale: 1.4,
  },
  lizhu: {
    head: "bird",
    body: "fox",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 1.0,
  },
  yayu: {
    head: "tiger",
    body: "fish",
    tail: "snake",
    limbs: "none",
    humanFace: true,
    serpentine: true,
    scale: 1.5,
  },
  liushou: {
    head: "bird",
    body: "sheep",
    tail: "snake",
    limbs: "none",
    wings: "feather",
    scale: 1.3,
  },
  bao: {
    head: "tiger",
    body: "fox",
    tail: "fox",
    limbs: "digitigrade",
    bodyPelt: "tiger",
    scale: 1.4,
  },
  huangshou: {
    head: "tiger",
    body: "cow",
    tail: "horse",
    limbs: "ungulate",
    scale: 1.3,
  },
  heilong: {
    head: "tiger",
    body: "fish",
    tail: "snake",
    limbs: "none",
    serpentine: true,
    scale: 1.8,
  },
  xiwangmu: {
    head: "tiger",
    body: "sheep",
    tail: "fox",
    limbs: "digitigrade",
    humanFace: true,
    mane: true,
    scale: 1.35,
  },
  jiao: {
    head: "fox",
    body: "fox",
    tail: "fox",
    limbs: "digitigrade",
    extraEars: true,
    scale: 1.2,
  },
  shengyu: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 0.95,
  },
  qingniao: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    scale: 0.7,
  },
  xingtian: {
    head: "cow",
    body: "cow",
    tail: "none",
    limbs: "ungulate",
    scale: 1.7,
  },
  xihe: {
    head: "bird",
    body: "sheep",
    tail: "none",
    limbs: "none",
    wings: "feather",
    humanFace: true,
    scale: 1.2,
  },
  kui: {
    head: "cow",
    body: "cow",
    tail: "none",
    limbs: "ungulate",
    scale: 1.9,
  },
};

export const DEFAULT_CHIMERA: CreatureRecipe = {
  head: "tiger",
  body: "cow",
  tail: "fish",
  limbs: "ungulate",
  scale: 1.15,
};
