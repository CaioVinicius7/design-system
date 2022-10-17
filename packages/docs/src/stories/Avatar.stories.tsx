import { Avatar, AvatarProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/caiovinicius7.png",
    alt: "Caio Vinícius"
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};
