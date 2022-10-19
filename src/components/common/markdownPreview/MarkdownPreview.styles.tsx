import './atom-one-dark.css';

import { theme, styled } from 'styles';

const { colors } = theme;

export const MarkdownPreviewWrapper = styled('div', {
  fontFamily: 'Fira Mono, "Spoqa Han Sans Neo", sans-serif',
  fontSize: 13,
  color: colors.TEXT_L1,
  flex: 1,
  padding: 10,

  h1: {
    fontSize: 28,
  },

  h2: {
    fontSize: 24,
  },

  h3: {
    fontSize: 20,
  },

  'h4, h5, h6': {
    fontSize: 18,
  },

  'h1, h2, h3, h4, h5, h6': {
    color: colors.TEXT_L0,
    lineHeight: 2,
    margin: 0,
  },

  'ol, ul': {
    listStyle: 'unset',
    paddingLeft: 30,
  },
});
