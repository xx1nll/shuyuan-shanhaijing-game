export interface CreatureRecord {
  id: string;
  name: string;
  quote: string;
  modern: string;
  visual: string;
  mountainId: string;
}

export const CREATURES: Record<string, CreatureRecord> = {
  shengsheng: {
    id: "shengsheng",
    name: "狌狌",
    quote: "有獸焉，其狀如禺而白耳，伏行人走，其名曰狌狌。",
    modern: "像大猿、白耳，匍匐而行。食之據說善走。",
    visual: "猿形、白耳、四足伏行。",
    mountainId: "zhaoyao",
  },
  baiyuan: {
    id: "baiyuan",
    name: "白猿",
    quote: "堂庭之山，多棪木，多白猿。",
    modern: "堂庭山上白猿成群，臂長善攀。",
    visual: "通體淺白，長臂短軀。",
    mountainId: "tangting",
  },
  guaishen: {
    id: "guaishen",
    name: "怪蛇",
    quote: "猨翼之山……多怪蛇，多怪木，不可以上。",
    modern: "山不可上，蛇蟲出沒於霧中。",
    visual: "粗長、斑紋扭曲。",
    mountainId: "yuanyi",
  },
  lushu: {
    id: "lushu",
    name: "鹿蜀",
    quote: "有獸焉，其狀如馬而白首，其文如虎而赤尾，其名曰鹿蜀。",
    modern: "馬身白首、虎紋赤尾。佩之宜子孫。",
    visual: "馬形、白頭、身有虎斑、尾赤。",
    mountainId: "niuyang",
  },
  xuangui: {
    id: "xuangui",
    name: "旋龜",
    quote: "其中多玄龜，其狀如龜而鳥首虺尾，其名曰旋龜。",
    modern: "龜身、鳥首、蛇尾，鳴如破木。",
    visual: "甲背、喙如鳥、尾如蛇。",
    mountainId: "niuyang",
  },
  lu: {
    id: "lu",
    name: "鯥",
    quote: "有魚焉，其狀如牛，陵居，蛇尾有翼……其名曰鯥。",
    modern: "牛形之魚，陸上居，有翼蛇尾。冬死夏生。",
    visual: "牛首魚身、腋下有羽、蛇尾。",
    mountainId: "di",
  },
  lei: {
    id: "lei",
    name: "類",
    quote: "有獸焉，其狀如狸而有髦，其名曰類，自為牝牡。",
    modern: "像狸而有鬣毛，一身兼雌雄。",
    visual: "狸形、頸有鬣。",
    mountainId: "danyuan",
  },
  bochi: {
    id: "bochi",
    name: "猼訑",
    quote: "有獸焉，其狀如羊，九尾四耳，其目在背，其名曰猼訑。",
    modern: "羊形，九尾四耳，目生背上。",
    visual: "羊身、九尾、四耳、背有目。",
    mountainId: "ji",
  },
  jiweihu: {
    id: "jiweihu",
    name: "九尾狐",
    quote: "有獸焉，其狀如狐而九尾，其音如嬰兒。",
    modern: "九尾之狐，鳴如嬰兒。",
    visual: "狐身赤褐，九條長尾。",
    mountainId: "qingqiu",
  },
  guanguan: {
    id: "guanguan",
    name: "灌灌",
    quote: "有鳥焉，其狀如鳩，其音若呵，名曰灌灌。",
    modern: "形如鳩，鳴如呵斥。佩之不惑。",
    visual: "鳩形短尾。",
    mountainId: "qingqiu",
  },
  chilu: {
    id: "chilu",
    name: "赤鱬",
    quote: "其中多赤鱬，其狀如魚而人面，其音如鴛鴦。",
    modern: "魚身人面，出即翼之澤。",
    visual: "魚身、人面。",
    mountainId: "qingqiu",
  },
};

export const CREATURE_STAMPS = ["shengsheng", "baiyuan", "lushu", "jiweihu"] as const;
