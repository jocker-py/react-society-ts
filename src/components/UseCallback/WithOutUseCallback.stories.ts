import {Meta, StoryObj} from "@storybook/react";
import WithOutUseCallback from "./WithOutUseCallback";

const meta: Meta<typeof WithOutUseCallback> = {
  title: "Example/WithOutUseCallback",
  component: WithOutUseCallback,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof WithOutUseCallback>;

export const WithOutUseCallbackExample: Story = {
  args: {}
};


export default meta