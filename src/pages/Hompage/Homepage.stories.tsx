import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Homepage } from "./Homepage";
import React from "react";

export default {
  title: "Pages/Homepage",
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => {
  return <Homepage {...args} />;
};

export const DefaultHomepage = Template.bind({});

DefaultHomepage.args = {
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
