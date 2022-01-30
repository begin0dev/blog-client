import GlobalStyle from '../src/styles/globalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
