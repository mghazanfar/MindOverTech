import React from "react";
import "./method-card.css";
import { MethodCard } from "../components/MethodCard";

export default {
  title: "Example/MethodCard",
  component: MethodCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MethodCard {...args} />;

export const Purple = Template.bind({});
Purple.args = {
  color: "purple",
  title: "Write a test text for purple color variant",
  ripple: false,
  number: 50,
};

export const NavyBlue = Template.bind({});
NavyBlue.args = {
  color: "navyBlue",
  title: "Write a test text for navyBlue color variant",
  ripple: false,
  number: 3,
};

export const YellowWithRipple = Template.bind({});
YellowWithRipple.args = {
  color: "yellow",
  title: "Write a test text for yellow color variant",
  ripple: true,
  number: 50,
};
