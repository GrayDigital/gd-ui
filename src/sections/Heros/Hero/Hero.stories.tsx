import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Hero } from "./Hero";

export default {
  title: "Sections/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return <Hero {...args} />;
};

export const DefaultHero = Template.bind({});

DefaultHero.args = {
  link: {
    text: "Sample Link",
    target: "/",
  },
};
