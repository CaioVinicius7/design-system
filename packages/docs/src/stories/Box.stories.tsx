import { Box, BoxProps, Text } from "@ignite-ui-caio/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Box Element</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
