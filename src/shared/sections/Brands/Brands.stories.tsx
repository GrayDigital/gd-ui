import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Brands } from "./Brands";
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
  Logos: [
    DefaultLogos.Eop,
    DefaultLogos.Dhs,
    DefaultLogos.Dod,
    DefaultLogos.Dia,
    DefaultLogos.Va,
  ],
  title: "Brands to show",
};
