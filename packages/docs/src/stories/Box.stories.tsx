import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@ignite-ui/react";

export default {
  title: "Surfaces/box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento BOX</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
