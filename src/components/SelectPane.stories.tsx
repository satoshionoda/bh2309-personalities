import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, FC, useEffect } from "react";
import { SelectPane } from "./SelectPane";
import { SelectableDimension } from "../const.ts";
import { useSelectedDimensionsMutators } from "../states/selectedDimensions.ts";

type WrapperProps = {
  d1: SelectableDimension;
  d2: SelectableDimension;
  d3: SelectableDimension;
  d4: SelectableDimension;
} & ComponentProps<typeof SelectPane>;

const Wrapper: FC<WrapperProps> = (props) => {
  const { setSelectedDimensions } = useSelectedDimensionsMutators();
  useEffect(() => {
    // setSelectedDimensions([props.d1, props.d2, props.d3, props.d4].filter((r) => r !== ""));
  }, [props.d1, props.d2, props.d3, props.d4]);
  return <SelectPane />;
};

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
};
export default meta;

type Story = StoryObj<typeof Wrapper>;
export const Primary: Story = {
  args: {
    d1: "",
    d2: "",
    d3: "",
    d4: "",
  },
};
