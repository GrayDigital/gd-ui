import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  Link: () => <a href="/careers">Join Us</a>,
  asLogoLink: () => null,
  LogoImage: () => <img src="../images/gray_logo_white.png" />,
};
