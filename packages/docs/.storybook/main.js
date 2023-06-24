/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
  },
  core: {
    builder: "@storybook/builder-vite",
  },

  features: {
    storyStoreV7: true,
  },
  viteFinal: (config, { configType }) => {
    if(configType === "PRODUCTION"){
      config.base = "/05-design-system/"
    }
    return config
  }
};
export default config;
