import globalStyle from '../src/styles/globalStyle';

globalStyle();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#141312' }],
  },
};
