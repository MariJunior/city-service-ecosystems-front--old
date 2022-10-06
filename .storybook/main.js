const BASE_URL = process.env.STORYBOOK_BASE_URL;
const baseTag = BASE_URL ? `<base href="${BASE_URL}">` : '';

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  managerHead: head => [head, baseTag].filter(Boolean).join("\n"),
}
