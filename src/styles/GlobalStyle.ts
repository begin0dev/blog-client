import { createGlobalStyle } from 'styled-components';
import { palette } from './palette';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    font-family: 'Nunito', 'Noto Sans KR', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: ${palette.gray9};
    background-color: ${palette.gray0};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body, header, footer, main, nav, div, article, section, ol, ul {
    position: relative;
    padding: 0;
    border: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  input, button, textarea {
    font-family: inherit;
  }
  button {
    &:active, &:focus, &:hover {
      outline: none;
    }
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
