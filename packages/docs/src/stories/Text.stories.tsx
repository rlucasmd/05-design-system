import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus laboriosam amet dolorem aliquid magni obcaecati dolorum, libero tempora perferendis quisquam vitae, minus voluptates error ad a explicabo natus. Totam.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
