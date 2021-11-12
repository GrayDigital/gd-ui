import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Problems } from "./Problems";

export default {
  title: "Sections/Problems",
  component: Problems,
} as ComponentMeta<typeof Problems>;

const Template: ComponentStory<typeof Problems> = (args) => {
  return <Problems {...args} />;
};

export const ProblemsSection = Template.bind({});

ProblemsSection.args = {
  link: {
    text: "Sample Link",
    target: "/",
  },
};
