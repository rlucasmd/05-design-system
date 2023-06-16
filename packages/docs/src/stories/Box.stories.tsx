import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@ignite-ui/react";

export default {
  title: "Surfaces/box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento BOX</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
