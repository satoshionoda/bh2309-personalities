import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Dimension } from "../const.ts";

const selectedDimensions = atom<Dimension[]>({
  key: "selectedDimensions",
  default: [],
});

export const useSelectedDimensionsState = () => {
  return useRecoilValue(selectedDimensions);
};

export const useSelectedDimensionsMutators = () => {
  const setSelectedDimensions = useSetRecoilState(selectedDimensions);
  return { setSelectedDimensions };
};
