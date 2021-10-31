import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Hero } from "./Hero";

export default {
  title: "Sections/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return <Hero {...args} />;
};

export const HomepageHero = Template.bind({});

HomepageHero.args = { Link: () => <a href="/services">Our Services</a> };
