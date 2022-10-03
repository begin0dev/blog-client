import { globalCss } from '@stitches/react';
import './styleConfig';

const GlobalStyle = globalCss({
  'html, body, #root': {
    height: '100%',
  },

  body: {
    fontFamily: 'Nunito, "Spoqa Han Sans Neo", sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    color: '$TEXT_L0',
    backgroundColor: '$BACKGROUND_L0',
    overflowX: 'hidden',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  'body, header, footer, main, nav, div, article, section, button': {
    position: 'relative',
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
  },

  '*, *:before, *:after': {
    boxSizing: 'border-box',
    ' -webkit-tap-highlight-color': 'transparent',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    '-webkit-tap-highlight-color': 'transparent',
  },

  'input, textarea, select, button': {
    outline: 'none',
    '-webkit-tap-highlight-color': 'inherit',

    '&:active, &:focus, &:hover': {
      outline: 'none',
    },
  },

  button: {
    userSelect: 'none',
    borderStyle: 'none',

    '&:hover': {
      opacity: 0.9,
    },
  },

  'ol, ul, dl': {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
});

export default GlobalStyle;
