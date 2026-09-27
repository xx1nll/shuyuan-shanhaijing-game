export type FeatureSource = "jing" | "huainan" | "zhuangzi" | "sanwu" | "戲";

export type MeshId =
  | "pad"
  | "megalith"
  | "dolmen"
  | "thatchHut"
  | "thatchLean"
  | "jadeWell"
  | "godSlab"
  | "boneRib"
  | "stoneCircle"
  | "caveMouth"
  | "chimera"
  | "figure"
  | "ore"
  | "tuft"
  | "logPile"
  | "crack"
  | "drum"
  | "tray"
  | "basin"
  | "mound"
  | "staff"
  | "flag"
  | "kiln"
  | "fruit"
  | "twig"
  | "gravel"
  | "namingRock"
  | "skip";

export interface BibleFeature {
  id: string;
  mountainId: string;
  name: string;
  x: number;
  z: number;
  fp: number;
  source: FeatureSource;
  mesh: MeshId;
  chimera?: string;
  scale?: number;
  yaw?: number;
  color?: string;
  w?: number;
  h?: number;
  d?: number;
  n?: number;
  r?: number;
}

const f = (
  id: string,
  mountainId: string,
  name: string,
  x: number,
  z: number,
  fp: number,
  source: FeatureSource,
  mesh: MeshId,
  extra: Partial<BibleFeature> = {},
): BibleFeature => ({ id, mountainId, name, x, z, fp, source, mesh, ...extra });

const wells: BibleFeature[] = [];
{
  const cx = -2840;
  const cz = -380;
  const spots: [number, number][] = [];
  for (let iz = -1; iz <= 1; iz += 1) {
    for (let ix = -1; ix <= 1; ix += 1) {
      if (ix === 0 && iz === 0) continue;
      spots.push([cx + ix * 8, cz + iz * 8]);
    }
  }
  spots.push([-2824, -364]);
  spots.forEach((p, i) => {
    wells.push(f(`xu-well-${i}`, "kunlun-xu", "九井", p[0], p[1], 4, "jing", "jadeWell"));
  });
}

const gates: BibleFeature[] = [-32, -24, -16, -8, 0, 8, 16, 24, 32].map((oz, i) =>
  f(`xu-gate-${i}`, "kunlun-xu", "九門", -2765, -380 + oz, 6, "jing", "dolmen", { yaw: -Math.PI / 2 }),
);

const witches = ["巫彭", "巫抵", "巫陽", "巫履", "巫凡", "巫相"].map((name, i) =>
  f(`xu-wu-${i}`, "kunlun-xu", name, -2735, -380 + [-25, -15, -5, 5, 15, 25][i]!, 4, "jing", "figure", {
    color: "#c8c0b0",
    h: 4,
  }),
);

const corners: BibleFeature[] = [];
for (let i = 0; i < 8; i += 1) {
  const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
  corners.push(
    f(`xu-corner-${i}`, "kunlun-xu", "八隅之巖", -2840 + Math.cos(a) * 80, -380 + Math.sin(a) * 80, 10, "jing", "megalith", {
      w: 8,
      h: 14,
      d: 6,
    }),
  );
}

const gods: BibleFeature[] = [0, 1, 2, 3, 4, 5].map((i) =>
  f(`xu-god-${i}`, "kunlun-xu", "百神隙", corners[i]!.x + 6, corners[i]!.z, 4, "jing", "godSlab"),
);

export const BIBLE: BibleFeature[] = [
  f("zhao-cliff-0", "zhaoyao", "西海崖", -150, 0, 8, "jing", "megalith", { w: 6, h: 10, d: 4 }),
  f("zhao-cliff-1", "zhaoyao", "西海崖", -150, 26, 8, "jing", "megalith", { w: 6, h: 12, d: 4 }),
  f("zhao-cliff-2", "zhaoyao", "西海崖", -150, 52, 8, "jing", "megalith", { w: 5, h: 11, d: 4 }),
  f("zhao-cliff-3", "zhaoyao", "西海崖", -150, 80, 8, "jing", "megalith", { w: 6, h: 10, d: 4 }),
  f("zhao-ore", "zhaoyao", "金玉西坡", -70, 70, 28, "jing", "ore", { color: "#c4a35a" }),
  f("zhao-zhuyu", "zhaoyao", "祝餘", -50, 50, 16, "jing", "tuft", { n: 12 }),
  f("zhao-xingxing", "zhaoyao", "狌狌", 50, 0, 12, "jing", "chimera", { chimera: "shengsheng", scale: 2.4 }),
  f("zhao-yupei-0", "zhaoyao", "育沛", -40, 48, 4, "jing", "ore", { color: "#e8dcc8", w: 1.2, h: 0.6, d: 1.2 }),
  f("zhao-yupei-1", "zhaoyao", "育沛", -100, 40, 4, "jing", "ore", { color: "#e8dcc8", w: 1.1, h: 0.5, d: 1.1 }),
  f("zhao-ci", "zhaoyao", "䧿山祠", 0, 90, 18, "jing", "godSlab"),
  f("zhao-ci-mat", "zhaoyao", "白菅席", 2, 94, 6, "jing", "megalith", { w: 3.2, h: 0.12, d: 2.2, color: "#c8c090" }),
  f("zhao-ci-jade", "zhaoyao", "璋玉", -2, 88, 3, "jing", "ore", { color: "#90b0a0", w: 0.8, h: 0.2, d: 0.4 }),
  f("zhao-qiao", "zhaoyao", "樵夫棚", 90, 90, 8, "戲", "thatchLean"),

  f("yuan-blade", "yuanyi", "刃脊", 520, 20, 20, "jing", "skip"),
  f("yuan-jade", "yuanyi", "白玉崩壁", 450, 28, 18, "jing", "ore", { color: "#e8e0d4", w: 8, h: 5, d: 6 }),
  f("yuan-viper-0", "yuanyi", "蝮虫", 540, 0, 6, "jing", "chimera", { chimera: "guaishen", scale: 1.6 }),
  f("yuan-viper-1", "yuanyi", "蝮虫", 536, 6, 6, "jing", "chimera", { chimera: "guaishen", scale: 1.4 }),
  f("yuan-viper-2", "yuanyi", "蝮虫", 544, -4, 6, "jing", "chimera", { chimera: "guaishen", scale: 1.3 }),
  f("yuan-snake-0", "yuanyi", "怪蛇", 556, 2, 8, "jing", "chimera", { chimera: "guaishen", scale: 2.2 }),
  f("yuan-snake-1", "yuanyi", "怪蛇", 560, -6, 8, "jing", "chimera", { chimera: "guaishen", scale: 2.0 }),
  f("yuan-beast", "yuanyi", "怪獸影", 490, -30, 16, "jing", "chimera", { chimera: "guaishen", scale: 3.2 }),
  f("yuan-shed", "yuanyi", "東麓棚", 600, 28, 8, "戲", "thatchLean"),

  f("qing-yang", "qingqiu", "陽玉坡", 1060, 120, 18, "jing", "ore", { color: "#c8d0c4", w: 7, h: 4, d: 6 }),
  f("qing-yin", "qingqiu", "陰青雘", 950, 0, 18, "jing", "ore", { color: "#1e4a40", w: 8, h: 3, d: 6 }),
  f("qing-fox", "qingqiu", "九尾狐", 1030, 84, 14, "jing", "chimera", { chimera: "jiweihu", scale: 2.8 }),
  f("qing-guan", "qingqiu", "灌灌巢", 1056, 16, 10, "jing", "megalith", { w: 4, h: 2.2, d: 3.4, color: "#6a5c4c" }),
  f("qing-chilu-0", "qingqiu", "赤鱬", 1048, 110, 8, "jing", "chimera", { chimera: "chilu", scale: 1.8 }),
  f("qing-chilu-1", "qingqiu", "赤鱬", 1040, 118, 8, "jing", "chimera", { chimera: "chilu", scale: 1.6 }),
  f("qing-chilu-2", "qingqiu", "赤鱬", 1056, 116, 8, "jing", "chimera", { chimera: "chilu", scale: 1.5 }),
  f("qing-hunter", "qingqiu", "獵人棚", 1000, 22, 8, "戲", "thatchLean"),

  f("dan-ore", "danxue", "金玉坡", 1640, 30, 16, "jing", "ore", { color: "#c4a35a", w: 8, h: 4, d: 6 }),
  f("dan-feng", "danxue", "鳳皇", 1560, -2, 20, "jing", "chimera", { chimera: "fenghuang", scale: 3.6 }),

  f("ji-gold", "ji-nanshan", "上金", 2100, -34, 16, "jing", "ore", { color: "#c4a35a", w: 7, h: 3, d: 6 }),
  f("ji-dan", "ji-nanshan", "下丹雘", 1970, 36, 16, "jing", "ore", { color: "#9c2b1a", w: 8, h: 3, d: 6 }),
  f("ji-fish-0", "ji-nanshan", "鱄魚", 2072, 106, 8, "jing", "chimera", { chimera: "tuanyu", scale: 1.8 }),
  f("ji-fish-1", "ji-nanshan", "鱄魚", 2078, 112, 8, "jing", "chimera", { chimera: "tuanyu", scale: 1.6 }),
  f("ji-step-0", "ji-nanshan", "黑水踏石", 2072, 110, 4, "jing", "megalith", { w: 2.4, h: 0.6, d: 2.2 }),
  f("ji-step-1", "ji-nanshan", "黑水踏石", 2076, 114, 4, "jing", "megalith", { w: 2.2, h: 0.6, d: 2 }),
  f("ji-step-2", "ji-nanshan", "黑水踏石", 2080, 118, 4, "jing", "megalith", { w: 2.4, h: 0.6, d: 2.2 }),

  f("fajiu-bird", "fajiu", "精衛", 420, -988, 6, "jing", "chimera", { chimera: "jingwei", scale: 1.4 }),

  f("jw-pile-0", "jingwei", "木石填海", 2218, 480, 10, "jing", "logPile"),
  f("jw-pile-1", "jingwei", "木石填海", 2240, 480, 10, "jing", "logPile"),
  f("jw-pile-2", "jingwei", "木石填海", 2262, 480, 10, "jing", "logPile"),
  f("jw-gravel-0", "jingwei", "未滿之海", 2250, 510, 8, "jing", "gravel"),
  f("jw-gravel-1", "jingwei", "未滿之海", 2270, 500, 8, "jing", "gravel"),
  f("jw-gravel-2", "jingwei", "未滿之海", 2220, 520, 8, "jing", "gravel"),
  f("jw-gravel-3", "jingwei", "未滿之海", 2290, 490, 8, "jing", "gravel"),
  f("jw-gravel-4", "jingwei", "未滿之海", 2200, 505, 8, "jing", "gravel"),
  f("jw-gravel-5", "jingwei", "未滿之海", 2260, 530, 8, "jing", "gravel"),
  f("jw-gravel-6", "jingwei", "未滿之海", 2230, 540, 8, "jing", "gravel"),
  f("jw-gravel-7", "jingwei", "未滿之海", 2280, 515, 8, "jing", "gravel"),
  f("jw-shed", "jingwei", "漁棚", 2210, 504, 8, "戲", "thatchLean"),

  f("zhu-god", "zhurong", "祝融", 1560, 520, 20, "jing", "chimera", { chimera: "zhurong", scale: 4.2 }),
  f("zhu-east", "zhurong", "東龍", 1576, 528, 12, "jing", "chimera", { chimera: "guaishen", scale: 3.4 }),
  f("zhu-west", "zhurong", "西龍", 1544, 528, 12, "jing", "chimera", { chimera: "guaishen", scale: 3.4 }),
  f("zhu-ring", "zhurong", "熔岩環", 1560, 500, 16, "jing", "stoneCircle", { r: 14, n: 12, color: "#4a3028" }),

  f("hun-dijiang", "hundun", "帝江", -1080, 8, 16, "jing", "chimera", { chimera: "dijiang", scale: 3.2 }),
  f("hun-rock-0", "hundun", "光堆", -1090, 2, 3, "sanwu", "namingRock", { color: "#e8e0d4" }),
  f("hun-rock-1", "hundun", "暗堆", -1069, 0, 3, "sanwu", "namingRock", { color: "#3a322c" }),
  f("hun-rock-2", "hundun", "濕堆", -1086, 20, 3, "sanwu", "namingRock", { color: "#4a6860" }),
  f("hun-rock-3", "hundun", "硬堆", -1071, 18, 3, "sanwu", "namingRock", { color: "#6a5c4c" }),

  f("court-seat-0", "court", "帝席", -1724, -334, 10, "huainan", "godSlab"),
  f("court-seat-1", "court", "帝席", -1716, -334, 10, "huainan", "godSlab"),
  f("court-sang-0", "court", "三桑無枝", -1720, -310, 6, "jing", "skip"),
  f("court-sang-1", "court", "三桑無枝", -1736, -308, 6, "jing", "skip"),
  f("court-sang-2", "court", "三桑無枝", -1704, -308, 6, "jing", "skip"),
  f("court-tomb-0", "court", "九嬪葬陰", -1720, -380, 8, "jing", "mound"),
  f("court-tomb-1", "court", "九嬪葬陰", -1744, -376, 8, "jing", "mound"),
  f("court-tomb-2", "court", "九嬪葬陰", -1696, -376, 8, "jing", "mound"),
  f("court-bone", "court", "骨曆", -1712, -338, 6, "戲", "megalith", { w: 2.8, h: 0.35, d: 1.8, color: "#d8d0c4" }),

  f("bu-beast-0", "buzhou", "兩黃獸", -1698, 20, 10, "jing", "chimera", { chimera: "huangshou", scale: 2.2 }),
  f("bu-beast-1", "buzhou", "兩黃獸", -1662, 20, 10, "jing", "chimera", { chimera: "huangshou", scale: 2.2 }),
  f("bu-crack", "buzhou", "觸點斷縫", -1676, 34, 8, "huainan", "crack"),
  f("bu-tai", "buzhou", "共工之臺", -1660, -150, 16, "jing", "megalith", { w: 12, h: 4, d: 12, color: "#6a5c4c" }),
  f("bu-snake-0", "buzhou", "臺隅蛇", -1654, -144, 4, "jing", "chimera", { chimera: "guaishen", scale: 1.2 }),
  f("bu-snake-1", "buzhou", "臺隅蛇", -1666, -144, 4, "jing", "chimera", { chimera: "guaishen", scale: 1.2 }),
  f("bu-snake-2", "buzhou", "臺隅蛇", -1654, -156, 4, "jing", "chimera", { chimera: "guaishen", scale: 1.2 }),
  f("bu-snake-3", "buzhou", "臺隅蛇", -1666, -156, 4, "jing", "chimera", { chimera: "guaishen", scale: 1.2 }),

  f("kiln-body", "kiln", "窑身", -1440, 70, 12, "huainan", "kiln"),
  f("kiln-gold", "kiln", "金石", -1450, 75, 6, "huainan", "ore", { color: "#c4a35a", w: 2.4, h: 2.8, d: 2.4 }),
  f("kiln-jade", "kiln", "玉石", -1445, 79, 6, "huainan", "ore", { color: "#90b0a0", w: 2.4, h: 2.8, d: 2.4 }),
  f("kiln-dan", "kiln", "丹石", -1435, 79, 6, "huainan", "ore", { color: "#9c2b1a", w: 2.4, h: 2.8, d: 2.4 }),
  f("kiln-white", "kiln", "白石", -1430, 75, 6, "huainan", "ore", { color: "#e8e0d4", w: 2.4, h: 2.8, d: 2.4 }),
  f("kiln-empty", "kiln", "第五空", -1440, 60, 6, "huainan", "megalith", { w: 2.6, h: 0.4, d: 2.6, color: "#3a322c" }),
  f("kiln-ao-0", "kiln", "鰲足", -1400, 110, 8, "huainan", "boneRib", { yaw: 0.4 }),
  f("kiln-ao-1", "kiln", "鰲足", -1480, 110, 8, "huainan", "boneRib", { yaw: 1.2 }),
  f("kiln-ao-2", "kiln", "鰲足", -1400, 30, 8, "huainan", "boneRib", { yaw: 2.2 }),
  f("kiln-ao-3", "kiln", "鰲足", -1480, 30, 8, "huainan", "boneRib", { yaw: 3.4 }),
  f("kiln-ash", "kiln", "蘆灰", -1440, 96, 20, "huainan", "gravel"),
  f("kiln-long", "kiln", "黑龍骸", -1410, 90, 14, "huainan", "chimera", { chimera: "heilong", scale: 3.4 }),

  f("xia-he", "xiayi", "阿禾茅屋", -1250, 265, 8, "戲", "thatchHut"),
  f("xia-east", "xiayi", "東屋", -1244, 257, 8, "戲", "thatchHut"),
  f("xia-west", "xiayi", "西屋", -1274, 255, 8, "戲", "thatchHut"),
  f("xia-north", "xiayi", "北屋", -1264, 274, 8, "戲", "thatchHut"),
  f("xia-south", "xiayi", "南屋", -1252, 244, 8, "戲", "thatchHut"),

  f("qiu-tai", "kunlun-qiu", "帝之下都臺", -3120, -90, 40, "jing", "megalith", { w: 36, h: 2, d: 36, color: "#d8d0c4" }),
  f("qiu-luwu", "kunlun-qiu", "陸吾", -3112, -100, 22, "jing", "chimera", { chimera: "luwu", scale: 3.8 }),
  f("qiu-wall-0", "kunlun-qiu", "陸吾室", -3118, -106, 8, "jing", "megalith", { w: 10, h: 8, d: 1.2, color: "#c8c0b0" }),
  f("qiu-wall-1", "kunlun-qiu", "陸吾室", -3104, -94, 8, "jing", "megalith", { w: 1.2, h: 8, d: 10, color: "#c8c0b0" }),
  f("qiu-wall-2", "kunlun-qiu", "陸吾室", -3122, -94, 8, "jing", "megalith", { w: 1.2, h: 8, d: 10, color: "#c8c0b0" }),
  f("qiu-tulou", "kunlun-qiu", "土螻", -3080, -70, 12, "jing", "chimera", { chimera: "tulou", scale: 2.4 }),
  f("qiu-qinyuan", "kunlun-qiu", "欽原", -3150, -80, 8, "jing", "chimera", { chimera: "qinyuan", scale: 1.6 }),
  f("qiu-chun", "kunlun-qiu", "鶉鳥", -3130, -110, 8, "jing", "chimera", { chimera: "chunniao", scale: 1.8 }),
  f("qiu-pin", "kunlun-qiu", "薲草", -3100, -50, 12, "jing", "tuft", { n: 8 }),
  f("qiu-fruit", "kunlun-qiu", "一果可摘", -3128, -40, 4, "jing", "fruit"),

  f("xu-he", "kunlun-xu", "木禾", -2840, -380, 16, "jing", "megalith", { w: 4, h: 18, d: 4, color: "#c4b48a" }),
  ...wells,
  ...gates,
  f("xu-kaiming", "kunlun-xu", "開明", -2755, -380, 24, "jing", "chimera", { chimera: "kaiming", scale: 4.6, yaw: Math.PI / 2 }),
  ...corners,
  f("xu-bifang", "kunlun-xu", "畢方", -2780, -340, 10, "jing", "chimera", { chimera: "bifang", scale: 2.2 }),
  f("xu-feng", "kunlun-xu", "鳳皇", -2884, -380, 10, "jing", "chimera", { chimera: "fenghuang", scale: 2.4 }),
  f("xu-luan", "kunlun-xu", "鸞鳥", -2876, -380, 10, "jing", "chimera", { chimera: "luan", scale: 2.2 }),
  f("xu-shirou", "kunlun-xu", "視肉", -2840, -430, 8, "jing", "megalith", { w: 3.2, h: 1.4, d: 3.2, color: "#9c5a48" }),
  f("xu-lizhu", "kunlun-xu", "離朱", -2820, -438, 8, "jing", "chimera", { chimera: "lizhu", scale: 1.8 }),
  f("xu-shengmu", "kunlun-xu", "聖木曼兌", -2850, -440, 8, "jing", "skip"),
  ...witches,
  f("xu-yayu", "kunlun-xu", "窫窳之尸", -2735, -380, 10, "jing", "chimera", { chimera: "yayu", scale: 2.6 }),
  f("xu-sixbird", "kunlun-xu", "六首樹鳥", -2840, -300, 10, "jing", "chimera", { chimera: "liushou", scale: 2.4 }),
  f("xu-jiao", "kunlun-xu", "蛟", -2860, -280, 10, "jing", "chimera", { chimera: "guaishen", scale: 2.2 }),
  f("xu-fu", "kunlun-xu", "蝮", -2830, -275, 10, "jing", "chimera", { chimera: "guaishen", scale: 1.6 }),
  f("xu-she", "kunlun-xu", "蛇", -2810, -282, 10, "jing", "chimera", { chimera: "guaishen", scale: 1.8 }),
  f("xu-wei", "kunlun-xu", "蜼", -2850, -268, 10, "jing", "chimera", { chimera: "shengsheng", scale: 1.8 }),
  f("xu-bao", "kunlun-xu", "豹", -2824, -272, 10, "jing", "chimera", { chimera: "bao", scale: 2.2 }),
  f("xu-sand-0", "kunlun-xu", "流沙", -3000, -400, 20, "jing", "gravel"),
  f("xu-sand-1", "kunlun-xu", "流沙", -3100, -300, 20, "jing", "gravel"),
  f("xu-sand-2", "kunlun-xu", "流沙", -3200, -200, 20, "jing", "gravel"),
  f("xu-ruo-twig-0", "kunlun-xu", "弱水沉枝", -2990, -250, 3, "jing", "twig"),
  f("xu-ruo-twig-1", "kunlun-xu", "弱水沉枝", -2980, -240, 3, "jing", "twig"),
  f("xu-ruo-twig-2", "kunlun-xu", "弱水沉枝", -3000, -260, 3, "jing", "twig"),
  ...gods,

  f("yu-xiwangmu", "yushan", "西王母", -2540, -660, 14, "jing", "chimera", { chimera: "xiwangmu", scale: 2.6 }),
  f("yu-ji", "yushan", "几", -2540, -660, 8, "jing", "megalith", { w: 3, h: 0.6, d: 2, color: "#c8c0b0" }),
  f("yu-tray", "yushan", "空藥臺", -2534, -660, 4, "huainan", "tray"),
  f("yu-jiao", "yushan", "狡", -2520, -650, 10, "jing", "chimera", { chimera: "jiao", scale: 2.2 }),
  f("yu-shengyu", "yushan", "勝遇", -2556, -652, 8, "jing", "chimera", { chimera: "shengyu", scale: 1.8 }),
  f("yu-daju", "yushan", "大鵹", -2547, -654, 6, "jing", "chimera", { chimera: "qingniao", scale: 1.4 }),
  f("yu-shaohu", "yushan", "少鵹", -2532, -655, 6, "jing", "chimera", { chimera: "qingniao", scale: 1.2 }),
  f("yu-qingniao", "yushan", "青鳥", -2540, -651, 6, "jing", "chimera", { chimera: "qingniao", scale: 1.3 }),
  f("yu-cave", "yushan", "穴門", -2524, -670, 10, "jing", "caveMouth"),

  f("cy-ring", "changyang", "舞環", -1880, 380, 16, "jing", "stoneCircle", { r: 12, n: 10, color: "#5a5248" }),
  f("cy-xing", "changyang", "刑天", -1880, 380, 14, "jing", "chimera", { chimera: "xingtian", scale: 3.2 }),
  f("cy-gan", "changyang", "干", -1874.6, 380, 4, "jing", "staff", { color: "#6a4030", h: 4 }),
  f("cy-qi", "changyang", "戚", -1885.2, 380, 4, "jing", "staff", { color: "#4a4540", h: 3.4 }),
  f("cy-tomb", "changyang", "首塚", -1880, 368, 10, "jing", "mound"),

  f("kf-flag-0", "kuafu", "路石", 160, -620, 4, "jing", "flag"),
  f("kf-flag-1", "kuafu", "路石", 320, -720, 4, "jing", "flag"),
  f("kf-flag-2", "kuafu", "路石", 500, -860, 4, "jing", "flag"),
  f("kf-flag-3", "kuafu", "路石", 700, -1100, 4, "jing", "flag"),
  f("kf-staff", "kuafu", "棄杖", 920, -1320, 6, "jing", "staff", { h: 5, color: "#5a4030" }),

  f("hei-folk-0", "heichi", "黑齒民", 3194, 90, 4, "jing", "figure", { color: "#2a221c", h: 2.4 }),
  f("hei-folk-1", "heichi", "黑齒民", 3200, 94, 4, "jing", "figure", { color: "#2a221c", h: 2.5 }),
  f("hei-folk-2", "heichi", "黑齒民", 3206, 88, 4, "jing", "figure", { color: "#2a221c", h: 2.3 }),
  f("hei-folk-3", "heichi", "黑齒民", 3202, 84, 4, "jing", "figure", { color: "#2a221c", h: 2.4 }),
  f("hei-rice", "heichi", "稻場", 3208, 96, 12, "jing", "tuft", { n: 16 }),
  f("hei-red", "heichi", "赤蛇", 3210, 84, 6, "jing", "chimera", { chimera: "guaishen", scale: 1.6, color: "#9c2b1a" }),
  f("hei-qing", "heichi", "青蛇", 3190, 84, 6, "jing", "chimera", { chimera: "guaishen", scale: 1.6, color: "#3a6a58" }),
  f("hei-bird-0", "heichi", "四鳥", 3180, 70, 4, "jing", "chimera", { chimera: "qingniao", scale: 1.1 }),
  f("hei-bird-1", "heichi", "四鳥", 3174, 78, 4, "jing", "chimera", { chimera: "qingniao", scale: 1.1 }),
  f("hei-bird-2", "heichi", "四鳥", 3188, 64, 4, "jing", "chimera", { chimera: "qingniao", scale: 1.1 }),
  f("hei-bird-3", "heichi", "四鳥", 3170, 66, 4, "jing", "chimera", { chimera: "qingniao", scale: 1.1 }),
  f("hei-yi-0", "heichi", "羿營", 3074, 52, 6, "戲", "thatchLean"),
  f("hei-yi-1", "heichi", "羿營", 3086, 44, 6, "戲", "thatchLean"),
  f("hei-yi-2", "heichi", "羿營", 3076, 42, 6, "戲", "thatchLean"),
  f("hei-bow", "heichi", "彤弓架", 3073, 52, 4, "戲", "staff", { h: 2.2, color: "#9c2b1a" }),
  f("hei-moon", "heichi", "月臺", 2980, -70, 10, "戲", "stoneCircle", { r: 8, n: 8, color: "#c8c0b0" }),
  f("hei-change", "heichi", "嫦娥", 2980, -70, 8, "戲", "figure", { color: "#d8d0c4", h: 2.8 }),

  f("tang-fusang", "tanggu", "扶桑", 3520, 4, 30, "jing", "skip"),

  f("gan-xihe", "ganyuan", "羲和", 3780, 260, 10, "jing", "chimera", { chimera: "xihe", scale: 2.4 }),
  ...Array.from({ length: 10 }, (_, k) => {
    const a = (k / 10) * Math.PI * 2;
    return f(`gan-slot-${k}`, "ganyuan", "十槽", 3780 + Math.cos(a) * 16, 260 + Math.sin(a) * 16, 5, "jing", "basin");
  }),
  f("gan-inlet", "ganyuan", "甘水口", 3798, 282, 6, "jing", "megalith", { w: 3, h: 0.8, d: 2, color: "#7aa090" }),
  f("gan-changxi", "ganyuan", "常羲浴月不在此", 3810, 220, 4, "jing", "godSlab"),

  f("liu-kui", "liubo", "夔", 3960, -420, 18, "jing", "chimera", { chimera: "kui", scale: 3.8 }),
  f("liu-drum", "liubo", "黃帝鼓", 3944, -408, 12, "jing", "drum"),
  f("liu-peg", "liubo", "鼓橛", 3944, -400, 8, "jing", "boneRib", { yaw: 0.3 }),
];

export const SPINES: { mountainId: string; points: [number, number][] }[] = [
  { mountainId: "zhaoyao", points: [[-80, 36], [-40, 40], [0, 40]] },
  { mountainId: "yuanyi", points: [[580, 8], [560, 12]] },
  { mountainId: "qingqiu", points: [[1046, 12], [1030, 50], [1030, 84]] },
  { mountainId: "danxue", points: [[1560, 50], [1560, 20]] },
  { mountainId: "ji-nanshan", points: [[2100, 40], [2072, 80]] },
  { mountainId: "kunlun-qiu", points: [[-3162, -82], [-3120, -90]] },
  { mountainId: "kunlun-xu", points: [[-2840, -344], [-2840, -360]] },
];

export const BUZHOU_LANDINGS: [number, number][] = [0.2, 1.2, 2.2, 3.4].map((a) => [
  -1680 + Math.cos(a) * 48,
  36 + Math.sin(a) * 48,
]);

export const STORY_BEATS = [
  { id: "hundun", name: "帝江", x: -1080, z: 8, mountainId: "hundun" },
  { id: "court", name: "帝席", x: -1720, z: -334, mountainId: "court" },
  { id: "buzhou", name: "觸點", x: -1676, z: 34, mountainId: "buzhou" },
  { id: "zhaoyao", name: "䧿山祠", x: 0, z: 90, mountainId: "zhaoyao" },
  { id: "heichi", name: "月臺", x: 2980, z: -70, mountainId: "heichi" },
  { id: "qiu", name: "陸吾", x: -3112, z: -100, mountainId: "kunlun-qiu" },
  { id: "xu", name: "開明", x: -2755, z: -380, mountainId: "kunlun-xu" },
] as const;
