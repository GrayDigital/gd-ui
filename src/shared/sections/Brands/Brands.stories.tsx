import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Brands } from "./Brands";
import { Img } from "@chakra-ui/react";
import React from "react";
import * as DefaultLogos from "./BrandLogos";

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

export const DefaultBrandsSection = Template.bind({});

DefaultBrandsSection.args = {
  title: "Brands to show",
  Logos: [
    <Img
      hw="40em"
      viewBox="0 0 152 27"
      fill="none"
      alt="Executive Office of the President Office of Management and Budget"
      src="/brands/omb.png"
    />,
    <Img
      hw="40em"
      viewBox="0 0 152 27"
      fill="none"
      alt="Department of Defense"
      src="/brands/dod.png"
    />,
    <Img
      hw="40em"
      viewBox="0 0 152 27"
      fill="none"
      alt="Department of Defense"
      src="/brands/va.png"
    />,
    <Img
      hw="40em"
      viewBox="0 0 152 27"
      fill="none"
      alt="Department of Defense"
      src="/brands/dhs.png"
    />,
    <Img
      hw="40em"
      viewBox="0 0 152 27"
      fill="none"
      alt="Seal of the US Defense Intelligence Agency"
      src="/brands/dia.png"
    />,
  ],
};
