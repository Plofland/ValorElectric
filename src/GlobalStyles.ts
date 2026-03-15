import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: system-ui, sans-serif;

    // look into the light-dark() CCS function
    // note, it will need "color-scheme: light dark;" in order to work
    
    // Soft Neutral (Modern & Balanced)
    background-color: #f6f6f6;
    color: #2a2a2a;
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
