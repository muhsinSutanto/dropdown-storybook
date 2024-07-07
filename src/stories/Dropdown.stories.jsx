import React from "react";
import Dropdown from "../components/Dropdown";
import { dummy_options } from "../helpers/const";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    withSearch: {
      control: "boolean",
      description: "Enable or disable search functionality",
    },
    options: {
      control: "object",
      description: "Array of option objects",
    },
    multipleSelect: {
      control: "boolean",
      description: "Allow multiple selections",
    },
    outlined: {
      control: "boolean",
      description: "Use outlined style",
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: dummy_options,
  withSearch: true,
  multipleSelect: true,
  outlined: false,
};
