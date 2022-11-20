const { mergeConfig } = require('vite');
const { default: tsconfigPaths } = require('vite-tsconfig-paths');
const viteSvgr = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths(), viteSvgr()],
      define: {
        ...config.define,
        global: 'window',
      },
    });
  },
};
