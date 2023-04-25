import type { Meta, StoryObj } from '@storybook/react';

import {UncontrolledRating} from "./UncontrolledRating";


const meta: Meta<typeof UncontrolledRating> = {
  title: 'Example/Rating',
  component: UncontrolledRating,
  tags: ['autodocs'],
  argTypes: {},
};
type Story = StoryObj<typeof UncontrolledRating>;


export const ChooseRating: Story = {
  args: {
    value: 0
  }
};

export default meta;



