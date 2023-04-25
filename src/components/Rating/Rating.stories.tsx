import type { Meta, StoryObj } from '@storybook/react';

import {Rating} from "./Rating";


const meta: Meta<typeof Rating> = {
  title: 'Example/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {},
};
type Story = StoryObj<typeof Rating>;


export const One: Story = {
  args: {
    value: 1
  }
};

export const Two: Story = {
  args: {
    value: 2
  }
};

export const Three: Story = {
  args: {
    value: 3
  }
};

export const Four: Story = {
  args: {
    value: 4
  }
};


export const Five: Story = {
  args: {
    value: 5
  }
};

export default meta;



