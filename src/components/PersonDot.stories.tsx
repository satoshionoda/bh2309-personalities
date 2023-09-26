import { Meta, StoryObj } from "@storybook/react";
import { PersonDot } from "./PersonDot";

const meta: Meta<typeof PersonDot> = {
  component: PersonDot,
};
export default meta;

type Story = StoryObj<typeof PersonDot>;
export const Primary: Story = {
  args: {},
};
