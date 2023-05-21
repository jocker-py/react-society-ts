import {Meta, StoryObj} from "@storybook/react";
import WithUseMemo from "./WithUseMemo";

const meta: Meta<typeof WithUseMemo> = {
  title: "Example/WithUseMemo",
  component: WithUseMemo,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof WithUseMemo>;

export const WithUseMemoExample: Story = {
  args: {}
};


export default meta