import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, FC, useEffect } from "react";
import { StatsCanvas } from "./StatsCanvas";
import { useSelectedDimensionsMutators } from "../states/selectedDimensions.ts";

type WrapperProps = {} & ComponentProps<typeof StatsCanvas>;

const Wrapper: FC<WrapperProps> = (props) => {
  const { setSelectedDimensions } = useSelectedDimensionsMutators();
  useEffect(() => {
    setSelectedDimensions(["EI", "SN", "TF", "JP"]);
  }, []);
  return <StatsCanvas {...props} />;
};

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
};
export default meta;

type Story = StoryObj<typeof Wrapper>;
export const Primary: Story = {
  args: {},
};
