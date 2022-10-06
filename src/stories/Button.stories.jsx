import React from "react";

import { Button, Icon } from "zmp-ui";
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  Primary as PR,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
Button.displayName = "Button";
Icon.displayName = "Icon";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description>this is button description</Description>
          <PR />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    type: { control: "select", options: ["highlight", "danger", "neutral"] },
    size: { control: "radio", options: ["large", "medium", "small"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    htmlType: {
      control: "select",
      options: ["submit", "button", "reset"],
      default: "button",
    },
    onClick: {
      action: "clicked",
      table: {
        type: { summary: "onClick handler" },
      },
    },
    fullWidth: {
      control: "boolean",
      table: {
        type: { summary: "Responsive Button" },
        defaultValue: { summary: "false" },
      },
    },
    prefixIcon: {
      control: "text",
      table: {
        type: { summary: "Add prefix button icon " },
      },
    },
    suffixIcon: {
      control: "text",
      table: {
        type: { summary: "Add suffix button icon" },
      },
    },
    icon: {
      control: "text",
      table: {
        type: { summary: "button icon only" },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const prefixIcon =
    typeof args?.prefixIcon === "string" && args.prefixIcon ? (
      <Icon icon={args?.prefixIcon} />
    ) : undefined;
  const suffixIcon =
    typeof args?.suffixIcon === "string" && args.suffixIcon ? (
      <Icon icon={args?.suffixIcon} />
    ) : undefined;
  const icon =
    typeof args?.icon === "string" && args.icon ? (
      <Icon icon={args?.icon} />
    ) : undefined;

  return (
    <Button
      {...args}
      prefixIcon={prefixIcon}
      icon={icon}
      suffixIcon={suffixIcon}
    />
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Button",
  variant: "tertiary",
};
