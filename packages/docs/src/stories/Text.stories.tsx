import { Text, TextProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, consequatur vero? Quas ea, nemo perferendis, pariatur provident officiis eligendi fuga reiciendis libero cupiditate eum labore unde voluptatum corrupti praesentium ipsa."
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong"
  }
};
