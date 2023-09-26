import { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { Dimension, dimensionLabels, dimensions, SelectableDimension } from "../const.ts";
import {
  useSelectedDimensionsMutators,
  useSelectedDimensionsState,
} from "../states/selectedDimensions.ts";
import { makeLabelName } from "../functions/makeLabelName.ts";

type Props = {};

export const SelectPane: FC<Props> = () => {
  const selected = useSelectedDimensionsState();
  const { setSelectedDimensions } = useSelectedDimensionsMutators();
  const handleChange = (value: SelectableDimension, index: number) => {
    setSelectedDimensions((currVal: Dimension[]) => {
      switch (true) {
        case index === currVal.length:
          return [...currVal, value].filter((s) => s !== "") as Dimension[];
        case index === currVal.length - 1:
          return [...currVal]
            .map((v, i) => (i === index ? value : v))
            .filter((s) => s !== "") as Dimension[];
        default:
          return currVal;
      }
    });
  };
  return (
    <Stack direction={"column"} spacing={2}>
      {dimensions.map((d, i) => (
        <FormControl fullWidth disabled={!getFormAvailable(selected, i)} key={`d${i}`}>
          <InputLabel id={`d${i}-label`}>{makeLabelName(selected, i)}</InputLabel>
          <Select<SelectableDimension>
            labelId={`d${i}-label`}
            id={`d${i}`}
            value={selected[i] ?? ""}
            label={makeLabelName(selected, i)}
            onChange={(e) => handleChange(e.target.value as SelectableDimension, i)}
          >
            <MenuItem value={""}>未選択</MenuItem>
            {filterLabels(selected, i).map(({ key, label }) => (
              <MenuItem value={key} key={key}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Stack>
  );
};

const getFormAvailable = (selected: SelectableDimension[], index: number): boolean => {
  const isCurrent = selected.length === index;
  const current = selected[index];
  const next = selected[index + 1];
  return isCurrent || (!next && !!current);
};

const filterLabels = (
  selected: SelectableDimension[],
  index: number
): { key: string; label: string }[] =>
  Object.entries(dimensionLabels)
    .filter(([key]) => {
      const isSelected = !!selected.find((str) => str === key);
      const currentSelection = selected[index] === key;
      console.log();
      return !isSelected || currentSelection;
    })
    .map(([key, label]) => ({ key, label }));
