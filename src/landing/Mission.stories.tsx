import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Mission } from "./Mission";

export default {
  title: "Landing/Sections",
  component: Mission,
} as ComponentMeta<typeof Mission>;

const Template: ComponentStory<typeof Mission> = (args) => {
  return <Mission {...args} />;
};

export const DefaultMissionSection = Template.bind({});

DefaultMissionSection.args = {
  link: {
    text: "Sample Link",
    target: "/",
  },
};
