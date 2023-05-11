import type { Meta, StoryObj } from '@storybook/react';
import {userEvent, within} from "@storybook/testing-library";
import UncontrolledAccordion from "./UncontrolledAccordion";


const meta: Meta<typeof UncontrolledAccordion> = {
  title: 'Example/Accordion',
  component: UncontrolledAccordion,
  tags: ['autodocs'],
  argTypes: {},
};
type Story = StoryObj<typeof UncontrolledAccordion>;


export const CollapsedMenu: Story = {
  args: {
    title: "Menu",
    collapsed: false,
  }
};

export const UncollapsedUser: Story = {
  args: {
    title: "User",
    collapsed: true,
  }
};

export const ChooseCollapse: Story = {
  args: {
    title: "User",
    collapsed: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const userTitle = await canvas.getByText('User');
    await userEvent.click(userTitle);
  }
}

export default meta;



