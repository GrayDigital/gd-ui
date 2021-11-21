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
};

export const SideBySideLeft = Template.bind({});

SideBySideLeft.args = {
  ...common,
  imageUrl: "storm_troopers.jpeg",
  contentOn: "left",
};

export const SideBySideRight = Template.bind({});

SideBySideRight.args = {
  ...common,
  imageUrl: "american_flag.jpeg",
  contentOn: "right",
};
