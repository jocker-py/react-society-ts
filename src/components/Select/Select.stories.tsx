import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Select from "./Select";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof Select> = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof Select>;

export const FirstValue: Story = {
  args: {
    value: "1",
    items: [
      {
        value: "1",
        title: "Minks",
      },
      {
        value: "2",
        title: "Moscow",
      },
    ],
    onChange: action("Value changed"),
  },
};

export const SecondValue: Story = {
  args: {
    value: "2",
    items: [
      {
        value: "1",
        title: "Minks",
      },
      {
        value: "2",
        title: "Moscow",
      },
    ],
    onChange: action("Value changed"),
  },
};

export const WithOutValue: Story = {
  args: {
    value: "",
    items: [
      {
        value: "1",
        title: "Minsk",
      },
      {
        value: "2",
        title: "Moscow",
      },
      {
        value: "3",
        title: "Paris",
      },
      {
        value: "4",
        title: "London",
      },
    ],
    onChange: action("Value changed"),
  },
};

export const ChooseSelect = () => {
  const [value, setValue] = useState('');
  const items = [
    {
      value: "1",
      title: "Minks",
    },
    {
      value: "2",
      title: "Moscow",
    },
    {
      value: "3",
      title: "Paris",
    },
    {
      value: "4",
      title: "London",
    },
  ]
  return <Select onChange={setValue} value={value} items={items}/>
}
export default meta