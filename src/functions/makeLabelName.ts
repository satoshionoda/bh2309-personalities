import { Dimension, dimensionDescriptions } from "../const.ts";

export const makeLabelName = (selected: Dimension[], index: number): string => {
  const currentSelection = selected[index];
  return currentSelection ? dimensionDescriptions[currentSelection] : `Dimension${index + 1}`;
};
