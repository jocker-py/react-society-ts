import React, {useMemo, useState} from "react";
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

export const SelectWithMemo = () => {
  const [value, setValue] = useState('');
  const cities = [{
    value: '1',
    title: 'Minsk',
    country: 'Belarus',
    population: 1975000,
  }, {
    value: '2',
    title: 'Grodno',
    country: 'Belarus',
    population: 368000,
  },{
    value: '3',
    title: 'Gomel',
    country: 'Belarus',
    population: 508000,
  }, {
    value: '4',
    title: 'Moscow',
    country: 'Russia',
    population: 11980000,
  }, {
    value: '5',
    title: 'St. Petersburg',
    country: 'Russia',
    population: 5600000,
  }, {
    value: '6',
    title: 'Krasnoyarsk',
    country: 'Russia',
    population: 1067000,
  }, {
    value: '7',
    title: 'Kiev',
    country: 'Ukraine',
    population: 2884000,
  }, {
    value: '8',
    title: 'Odessa',
    country: 'Ukraine',
    population: 993000,
  }, {
    value: '9',
    title: 'Lvov',
    country: 'Ukraine',
    population: 721000,
  }]

  const citiesWithK = useMemo(() => cities.filter(c => c.title.toLowerCase().includes('k')),[cities]);
  const citiesOfBelarus = useMemo(() => cities.filter(c => c.country === "Belarus"),[cities]);
  const bigCities = useMemo(() => cities.filter(c => c.population >= 1000000),[cities]);

  return <>
    <Select onChange={setValue} value={value} items={citiesWithK}>Города с буквой к</Select>
    <Select onChange={setValue} value={value} items={citiesOfBelarus}>Города Беларуси</Select>
    <Select onChange={setValue} value={value} items={bigCities}>Города с население больше 1млн людей</Select>
  </>
}
export default meta