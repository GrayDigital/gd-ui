import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HomepageHero } from "./HomepageHero";

export default {
  title: "Sections/Heros",
  component: HomepageHero,
  parameters: {
    chromatic: { viewports: [375, 768, 1200] },
  },
} as ComponentMeta<typeof HomepageHero>;

const Template: ComponentStory<typeof HomepageHero> = (args) => {
  return <HomepageHero {...args} />;
};

export const DefaultHomepageHero = Template.bind({});

DefaultHomepageHero.args = {
  link: {
    text: "Some Homepage Link",
    target: "/somewhere",
  },
};
