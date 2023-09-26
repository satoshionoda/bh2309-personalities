import { Meta, StoryObj } from "@storybook/react";
import { PersonalityPanel } from "./PersonalityPanel";
import { ComponentProps, FC } from "react";
import { css } from "@emotion/react";

type WrapperProps = {} & ComponentProps<typeof PersonalityPanel>;
const Wrapper: FC<WrapperProps> = (props) => {
  return (
    <div css={wrapper}>
      <PersonalityPanel {...props} />
    </div>
  );
};
const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
};
export default meta;

type Story = StoryObj<typeof Wrapper>;
export const Primary: Story = {
  args: {
    type: "IN",
  },
};

const wrapper = css`
  border: 1px solid gray;
  width: 300px;
  height: 200px;
`;
