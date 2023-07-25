export type Key =
  | "home-row-left"
  | "home-row-right"
  | "top-left-keys"
  | "bottom-left-keys"
  | "middle-keys"
  | "top-right-keys"
  | "bottom-right-keys"
  | "all-keys"
  | "number-keys";

export interface DataItem {
  keys: Key;
  name: string;
  typing: string[];
}

export const data: DataItem[] = [
  {
    keys: "home-row-left",
    name: "왼손중앙자리",
    typing: ["ㅁ", "ㄴ", "ㅇ", "ㄹ"],
  },
  {
    keys: "home-row-right",
    name: "오른손중앙자리",
    typing: ["ㅓ", "ㅏ", "ㅣ", ";"],
  },
  {
    keys: "top-left-keys",
    name: "왼손윗자리",
    typing: ["ㅂ", "ㅈ", "ㄷ", "ㄱ"],
  },
  {
    keys: "bottom-left-keys",
    name: "왼손아랫자리",
    typing: ["ㅋ", "ㅌ", "ㅊ", "ㅍ"],
  },
  {
    keys: "middle-keys",
    name: "가운데자리",
    typing: ["ㅅ", "ㅛ", "ㅎ", "ㅗ", "ㅠ", "ㅜ"],
  },
  {
    keys: "top-right-keys",
    name: "오른손윗자리",
    typing: ["ㅕ", "ㅑ", "ㅐ", "ㅔ"],
  },
  {
    keys: "bottom-right-keys",
    name: "오른손아랫자리",
    typing: ["ㅜ", "ㅡ", ",", "."],
  },
  {
    keys: "all-keys",
    name: "전체자리",
    typing: [],
  },
  {
    keys: "number-keys",
    name: "숫자자리",
    typing: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      ".",
      "+",
      "-",
      "*",
      "/",
    ],
  },
];
