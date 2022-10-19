import { Avatar, AvatarProps } from "@ignite-ui-caio/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/caiovinicius7.png",
    alt: "Caio Vinícius"
  },
  argTypes: {
    src: {
      control: {
        type: "text"
      }
    }
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};
