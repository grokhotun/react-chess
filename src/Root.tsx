import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ChessBoard } from 'components';

import { theme, GlobalStyle } from './theme';

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChessBoard />
    </ThemeProvider>
  );
};
