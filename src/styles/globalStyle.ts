import { globalCss } from '@stitches/react';
import { theme } from './styleConfig';

const { colors, fontSizes } = theme;

const GlobalStyle = globalCss({
  [`html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video`]: {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
  },

  'html, body, #root': {
    height: '100%',
  },

  body: {
    fontFamily: 'Nunito, "Spoqa Han Sans Neo", sans-serif',
    fontSize: fontSizes.body1,
    fontWeight: 400,
    color: colors.TEXT_L0,
    backgroundColor: '$BACKGROUND_L0',
    overflowX: 'hidden',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  'input, textarea, select, button': {
    outline: 'none',
    '-webkit-tap-highlight-color': 'inherit',

    '&:active, &:focus, &:hover': {
      outline: 'none',
    },
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    '-webkit-tap-highlight-color': 'transparent',
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

  '*, *:before, *:after': {
    boxSizing: 'border-box',
    ' -webkit-tap-highlight-color': 'transparent',
  },
});

export default GlobalStyle;
