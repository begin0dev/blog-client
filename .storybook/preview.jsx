import GlobalStyle from '../src/styles/globalStyle';

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

const withThemeProvider = (Story, context) => {
  return (
    <>
      <GlobalStyle />
      <Story {...context} />
    </>
  );
};
export const decorators = [withThemeProvider];
