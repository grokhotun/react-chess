import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      whiteCell: string;
      blackCell: string;
      selectedCell: string;
      targetPoint: string;
    };
  }
}
