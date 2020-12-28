import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Meduim = Template.bind({});
Meduim.args = {
  size: "medium",
  children: "Button",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const sizes = () => {
  return (
    <div>
      <div>
        <div className="description" style={{ marginBottom: 15 }}>
          Small
        </div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div
          className="description"
          style={{ marginBottom: 15, marginTop: 15 }}
        >
          Medium
        </div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div
          className="description"
          style={{ marginBottom: 15, marginTop: 15 }}
        >
          Big
        </div>
        <Button size="large">BUTTON</Button>
      </div>
    </div>
  );
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
  children: "Button",
};
export const Success = Template.bind({});
Success.args = {
  color: "success",
  children: "Button",
};
export const Warining = Template.bind({});
Warining.args = {
  color: "warning",
  children: "Button",
};
export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  children: "Button",
};

export const Circle = Template.bind({});
Circle.args = {
  color: "danger",
  children: "Button",
  className: "btn-circle",
};
