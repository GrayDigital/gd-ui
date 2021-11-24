import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Mission } from "./Mission";

export default {
  title: "Landing/Sections",
  component: Mission,
} as ComponentMeta<typeof Mission>;

const Template: ComponentStory<typeof Mission> = (args) => {
  return <Mission {...args} />;
};

export const DefaultMission = Template.bind({});

DefaultMission.args = {
  link: {
    text: "Sample Link",
    target: "/",
  },
};
