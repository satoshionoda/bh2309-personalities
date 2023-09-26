import { results } from "../const.ts";

export const matchResults = (
  type: string
): {
  key: string;
  label: string;
}[] => {
  return results
    .filter(([key]) => type.split("").every((t) => key.includes(t)))
    .map(([key, label]) => ({ key, label }))
    .sort((a, b) => a.key.localeCompare(b.key));
};
