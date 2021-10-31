import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "./Header";
import React from "react";

export default {
  title: "Sections/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const DefaultHeader = Template.bind({});

DefaultHeader.args = {
  Link: () => <a href="/careers">Join Us</a>,
  asLogoLink: null,
  LogoImage: () => (
    <img
      width={107}
      height={30}
      src="/gray_digital_logo_white.png"
      alt="gray logo"
    />
  ),
};
