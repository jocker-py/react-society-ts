import type { Meta, StoryObj } from '@storybook/react';

import {OnOff} from "./OnOff";


const meta: Meta<typeof OnOff> = {
  title: 'Example/OnOff',
  component: OnOff,
  tags: ['autodocs'],
  argTypes: {},
};
type Story = StoryObj<typeof OnOff>;


export const ChooseOnOff: Story = {
  args: {}
};

export default meta;



