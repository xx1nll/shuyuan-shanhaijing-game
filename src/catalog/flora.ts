export type PlantId = "gui" | "zhuyu" | "migu" | "yanmu" | "baigao" | "jianmu" | "fusang";

export interface FloraRecord {
  id: PlantId;
  name: string;
  analogue: string;
  quote: string;
  modern: string;
  visual: string;
  mountainId?: string;
}

export const FLORA: Record<PlantId, FloraRecord> = {
  gui: {
    id: "gui",
    name: "桂",
    analogue: "肉桂 Cinnamomum cassia",
    quote: "其首曰招搖之山，臨于西海之上，多桂，多金玉。",
    modern: "招搖之山臨西海，山上多桂，葉厚叢生、冬夏常青。",
    visual: "對生革質葉，肉桂色樹皮，圓密常綠冠。",
    mountainId: "zhaoyao",
  },
  zhuyu: {
    id: "zhuyu",
    name: "祝餘",
    analogue: "麥冬 Ophiopogon japonicus",
    quote: "有草焉，其狀如韭而青華，其名曰祝餘，食之不飢。",
    modern: "葉如韭叢生，開青白小花。食之據說不飢。",
    visual: "細長叢葉，青華點綴葉叢。",
    mountainId: "zhaoyao",
  },
  migu: {
    id: "migu",
    name: "迷穀",
    analogue: "桑 / 構，華四照",
    quote: "有木焉，其狀如穀而黑理，其華四照，其名曰迷穀，佩之不迷。",
    modern: "招搖之桑而木理深黑，花光向四面照射。佩之據說不迷路。",
    visual: "桑樹輪廓、近黑樹理，四向發光的頭狀花序。",
    mountainId: "zhaoyao",
  },
  yanmu: {
    id: "yanmu",
    name: "棪木",
    analogue: "君遷子 Diospyros lotus",
    quote: "又東三百里，曰堂庭之山，多棪木。",
    modern: "堂庭之山多棪。郭璞謂其子似柰而赤，可食。",
    visual: "烏木般深幹，卵狀葉，橙紅小果。",
    mountainId: "tangting",
  },
  baigao: {
    id: "baigao",
    name: "白䓘",
    analogue: "桑屬，赤理、汗如漆",
    quote: "有木焉，其狀如穀而赤理，其汗如漆，其味如飴，其名曰白䓘。",
    modern: "像桑而木理偏赤，汁如漆、味甜。未編入南山首列路，造島亦不種。",
    visual: "桑樹輪廓、赤褐木理，幹上有深色漆痕。",
  },
  jianmu: {
    id: "jianmu",
    name: "建木",
    analogue: "未至其經，需專用模型",
    quote: "有木，青葉紫莖，玄華黃實，名曰建木。",
    modern: "天地之中的神木，一株而已。未至其經，不作常木代用。",
    visual: "Singular god-tree. Custom mesh later.",
  },
  fusang: {
    id: "fusang",
    name: "扶桑",
    analogue: "未至其經，需專用模型",
    quote: "湯谷上有扶桑，十日所浴。",
    modern: "日出之木，一株而已。未至其經，不作桑、棕代用。",
    visual: "Singular god-tree. Custom mesh later.",
  },
};
