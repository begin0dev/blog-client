import { createGlobalStyle } from 'styled-components';

import { palette } from './palette';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    font-family: 'Nunito', 'Spoqa Han Sans Neo', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${palette.gray9};
    background-color: ${palette.gray0};
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
  input, button, textarea {
    font-family: inherit;
  }
  button {
    border-style: none;
    &:active, &:focus, &:hover {
      outline: none;
    }
    &:hover {
      opacity: 0.9;
    }
  }
  ol, ul {
    list-style: none;
  }
  input {
    outline: none;
    -webkit-tap-highlight-color: inherit;
  }
`;

export default GlobalStyle;
