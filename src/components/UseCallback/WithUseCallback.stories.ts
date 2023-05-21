import {Meta, StoryObj} from "@storybook/react";
import WithUseCallback from "./WithUseCallback";

const meta: Meta<typeof WithUseCallback> = {
  title: "Example/WithUseCallback",
  component: WithUseCallback,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof WithUseCallback>;

export const WithUseCallbackExample: Story = {
  args: {}
};


export default meta