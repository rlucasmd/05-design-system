import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@ranieri-ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";
export const {
  css,
  globalCss,
  getCssText,
  styled,
  theme,
  createTheme,
  config,
  keyframes,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    fonts,
    colors,
    radii,
    lineHeights,
    fontSizes,
    space,
    fontWeights,
  },
});
