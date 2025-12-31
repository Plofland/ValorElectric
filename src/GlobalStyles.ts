import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: system-ui, sans-serif;
    background-color: #242424;
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
