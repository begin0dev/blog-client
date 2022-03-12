import { createGlobalStyle } from 'styled-components/macro';

import { themes } from './utils';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    font-family: 'Nunito', 'Spoqa Han Sans Neo', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${themes.TEXT_L1};
    background-color: ${themes.BACKGROUND_L0};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, header, footer, main, nav, div, article, section, button {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  input, textarea, select, button {
    font-family: inherit;
    outline: none;
    -webkit-tap-highlight-color: inherit;
    &:active, &:focus, &:hover {
      outline: none;
    }
  }
  button {
    user-select: none;
    border-style: none;
    &:hover {
      opacity: 0.9;
    }
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
