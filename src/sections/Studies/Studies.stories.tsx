import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Studies } from "./Studies";

export default {
  title: "Sections/Hero",
  component: Studies,
} as ComponentMeta<typeof Studies>;

const Template: ComponentStory<typeof Studies> = (args) => {
  return <Studies {...args} />;
};

export const StudiesSection = Template.bind({});

StudiesSection.args = {
  link: {
    text: "Sample Button Text",
    target: "/",
  },
};
