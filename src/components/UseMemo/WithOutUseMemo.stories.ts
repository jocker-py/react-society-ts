import {Meta, StoryObj} from "@storybook/react";
import WithOutUseMemo from "./WithOutUseMemo";

const meta: Meta<typeof WithOutUseMemo> = {
  title: "Example/WithOutUseMemo",
  component: WithOutUseMemo,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof WithOutUseMemo>;

export const WithoutUseMemoExample: Story = {
  args: {}
};


export default meta