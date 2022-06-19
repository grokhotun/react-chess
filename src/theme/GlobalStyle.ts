import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }

  img {
    vertical-align: top;
    max-width: 100%;
    max-height: 100%;
  }
`;
