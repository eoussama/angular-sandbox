/** @type { import('@storybook/angular').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  docs: {}
};
export default config;