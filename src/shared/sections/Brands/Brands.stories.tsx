import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Brands } from "./Brands";
import React from "react";

export default {
  title: "Landing/Sections",
  component: Brands,
  parameters: {
    chromatic: { viewports: [375, 768, 1200] },
  },
} as ComponentMeta<typeof Brands>;

const Template: ComponentStory<typeof Brands> = (args) => {
  return <Brands {...args} />;
};

export const DefaultBrands = Template.bind({});

DefaultBrands.args = {
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
