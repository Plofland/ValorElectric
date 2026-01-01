import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: system-ui, sans-serif;
    background-color: #80dbff;
  }

  #root {
    min-height: 100vh;
    width: 100%;
  }
`;

// Here are the colors of the logo
// Blue - #0038ff
// Red - #ff0000
// White - #ffffff
