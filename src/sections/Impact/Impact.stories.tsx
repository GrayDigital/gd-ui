import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Impact } from "./Impact";

export default {
  title: "Sections/Impact",
  component: Impact,
  parameters: {
    chromatic: { viewports: [375, 768, 1200] },
  },
} as ComponentMeta<typeof Impact>;

const Template: ComponentStory<typeof Impact> = (args) => {
  return <Impact {...args} />;
};

export const ImpactSection = Template.bind({});

ImpactSection.args = {
  title: "Sample Title",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, ligula vel maximus finibus, felis ipsum cursus tellus, vitae suscipit nisi velit vel elit. Nam in purus nisi. Phasellus sem quam, facilisis sit amet tellus sed, blandit eleifend turpis. Sed hendrerit porttitor velit sit amet varius. Proin libero leo, ullamcorper posuere interdum quis, rhoncus id risus. Aliquam in risus tincidunt, tempor erat ac, pretium ex. Aliquam ullamcorper quis enim eu aliquet.",
  link: {
    text: "Sample Link",
    target: "/",
  },
};
