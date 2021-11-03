import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HomepageHero } from "./HomepageHero";

export default {
  title: "Sections/HomepageHero",
  component: HomepageHero,
} as ComponentMeta<typeof HomepageHero>;

const Template: ComponentStory<typeof HomepageHero> = (args) => {
  return <HomepageHero {...args} />;
};

export const DefaultHomepageHero = Template.bind({});

DefaultHomepageHero.args = {
  Link: () => <a href="/services">Our Services</a>,
};
