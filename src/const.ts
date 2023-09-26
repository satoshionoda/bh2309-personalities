import { SerializedStyles } from "@emotion/react";

export type AcceptsEmotion = { css?: string | SerializedStyles; className?: string };
const personalities = ["E", "I", "S", "N", "T", "F", "J", "P"] as const;
type Personality = (typeof personalities)[number];
type PersonalityLabels = {
  [key in Personality]: string;
};
export const personalityLabels: PersonalityLabels = {
  E: "E(外向)",
  I: "I(内向)",
  S: "S(感覚)",
  N: "N(直感)",
  T: "T(思考)",
  F: "F(感情)",
  J: "J(判断)",
  P: "P(知覚)",
};

export const dimensions = ["EI", "SN", "TF", "JP"] as const;
export type Dimension = (typeof dimensions)[number];
export type SelectableDimension = Dimension | "";
type DimensionLabels = {
  [key in Dimension]: string;
};
const L = personalityLabels;
export const dimensionLabels: DimensionLabels = {
  EI: `${L.E} / ${L.I}`,
  SN: `${L.S} / ${L.N}`,
  TF: `${L.T} / ${L.F}`,
  JP: `${L.J} / ${L.P}`,
};

export const dimensionDescriptions: DimensionLabels = {
  EI: `Favorite world: 興味関心の方向`,
  SN: `Information: ものの見方`,
  TF: `Decisions: 判断の仕方`,
  JP: `Structure: 外界への接し方`,
};

export const results: [string, string][] = [
  ["INTJ", "建築家"],
  ["INTP", "倫理学者"],
  ["ENTJ", "指揮官"],
  ["ENTP", "討論者"],
  ["INFJ", "提唱者"],
  ["INFP", "仲介者"],
  ["ENFJ", "主人公"],
  ["ENFP", "運動家"],
  ["ISTJ", "管理者"],
  ["ISFJ", "養護者"],
  ["ESTJ", "幹部"],
  ["ESFJ", "領事"],
  ["ISTP", "巨匠"],
  ["ISFP", "冒険家"],
  ["ESTP", "起業家"],
  ["ESFP", "エンターテイナー"],
];
