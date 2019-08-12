import { createGlobalStyle } from 'styled-components';
import { themes } from './utils';
import { palette } from './palette';

const GlobalStyle = createGlobalStyle`
  html, body, #react-root {
    height: 100%;
  }
  body {
    font-family: 'Nunito', 'Spoqa Han Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: ${palette.black};
    background-color: ${themes.backgroundColor};
    overflow-x: hidden;
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
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    user-select: none;
    &:active, &:focus, &:hover {
      outline: none;
    }
  }
  ol, ul {
    list-style: none;
  }
  body, header, footer, main, nav, div, article, section, ol, ul {
    position: relative;
    padding: 0;
    border: 0;
  }
`;

export default GlobalStyle;
