import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Contact } from "./Contact";

export default {
  title: "Landing/Sections",
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => {
  return <Contact {...args} />;
};

export const DefaultContactSection = Template.bind({});

DefaultContactSection.args = {
  link: {
    text: "Sample Button Text",
    target: "/",
  },
};
