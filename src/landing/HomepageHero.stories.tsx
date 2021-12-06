import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HomepageHero } from "./HomepageHero";
import { Img } from "@chakra-ui/react";

export default {
  title: "Landing/Sections",
  component: HomepageHero,
  parameters: {
    chromatic: { viewports: [375, 768, 1200] },
  },
} as ComponentMeta<typeof HomepageHero>;

const Template: ComponentStory<typeof HomepageHero> = (args) => {
  return <HomepageHero {...args} />;
};

export const DefaultHomepageHeroSection = Template.bind({});

DefaultHomepageHeroSection.args = {
  Link: () => <a href={"/somewhere"}>{"Some Homepage Link"}</a>,
  title:
    "Gray is a human-centered digital services company using design and technology to transform critical government services. ",
  subtitle:
    "We deploy highly-efficient, cross-functional digital service teams to empower government agencies and civil servants. These multi-disciplinary groups leverage agile software development, DevOps, and human-centered design to deliver mission-critical products with a purpose. ",
  Image: () => (
    <Img alt="American Flag in Code" src="/american_flag_in_code.jpeg" />
  ),
};
