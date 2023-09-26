import { data } from "../data/data.ts";
import { matchResults } from "./matchResults.ts";

export type Person = {
  name: string;
  type: string;
  typeLabel: string;
};
export const findPeople = (selectedType: string): Person[] =>
  data
    .filter(([name, type]) => selectedType.split("").every((t) => type.includes(t)))
    .map(([name, type]) => ({ name, type, typeLabel: matchResults(type)[0].label }))
    .sort((a, b) => a.type.localeCompare(b.type));
