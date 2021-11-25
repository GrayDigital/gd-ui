import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Studies } from "./Studies";

export default {
  title: "Landing/Sections",
  component: Studies,
} as ComponentMeta<typeof Studies>;

const Template: ComponentStory<typeof Studies> = (args) => {
  return <Studies {...args} />;
};

export const DefaultStudiesSection = Template.bind({});

DefaultStudiesSection.args = {
  link: {
    text: "Sample Button Text",
    target: "/",
  },
};
