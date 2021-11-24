import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SectionButton } from "./SectionButton";

export default {
  title: "Shared/Button",
  component: SectionButton,
  parameters: {
    chromatic: { viewports: [375, 768, 1200] },
  },
} as ComponentMeta<typeof SectionButton>;

const Template: ComponentStory<typeof SectionButton> = (args) => {
  return <SectionButton {...args}>I am a section button</SectionButton>;
};

export const DefaultSectionButton = Template.bind({});

DefaultSectionButton.args = {
  colorScheme: "dark",
};

export const LightSectionButton = Template.bind({});

LightSectionButton.args = {
  colorScheme: "light",
};
