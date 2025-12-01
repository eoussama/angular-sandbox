import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

/** @type { import('@storybook/angular').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#3b3b3b',
        },
        {
          name: 'light',
          value: '#eeeeee',
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { inlineStories: true },
  }
};

export default preview;