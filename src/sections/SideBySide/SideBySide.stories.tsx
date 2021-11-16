import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SideBySide } from "./SideBySide";

export default {
  title: "Sections/SideBySide",
  component: SideBySide,
} as ComponentMeta<typeof SideBySide>;

const Template: ComponentStory<typeof SideBySide> = (args) => {
  return <SideBySide {...args} />;
};

const common = {
  title: "Sample Title",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, ligula vel maximus finibus, felis ipsum cursus tellus, vitae suscipit nisi velit vel elit. Nam in purus nisi. Phasellus sem quam, facilisis sit amet tellus sed, blandit eleifend turpis. Sed hendrerit porttitor velit sit amet varius. Proin libero leo, ullamcorper posuere interdum quis, rhoncus id risus. Aliquam in risus tincidunt, tempor erat ac, pretium ex. Aliquam ullamcorper quis enim eu aliquet.",
  link: {
    text: "Sample Link",
    target: "/",
  },
  imageUrl: "american_flag.jpeg",
};

export const SideBySideLeft = Template.bind({});

SideBySideLeft.args = {
  ...common,
  imageOn: "left",
};

export const SideBySideRight = Template.bind({});

SideBySideRight.args = {
  ...common,
  title: "Sample Title",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, ligula vel maximus finibus, felis ipsum cursus tellus, vitae suscipit nisi velit vel elit. Nam in purus nisi. Phasellus sem quam, facilisis sit amet tellus sed, blandit eleifend turpis. Sed hendrerit porttitor velit sit amet varius. Proin libero leo, ullamcorper posuere interdum quis, rhoncus id risus. Aliquam in risus tincidunt, tempor erat ac, pretium ex. Aliquam ullamcorper quis enim eu aliquet.",
  link: {
    text: "Sample Link",
    target: "/",
  },
  imageUrl: "american_flag.jpeg",
  imageOn: "right",
};
