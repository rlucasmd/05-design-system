import type { StoryObj, Meta } from "@storybook/react";
import { Box, Button, Tooltip, TooltipProps } from "@ranieri-ignite-ui/react";

export default {
  title: "Form/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: "Hello, i'm a tooltip",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: "flex",
            padding: "$20",
            justifyContent: "center",
            alignItems: "center",
            background: "$gray500",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
