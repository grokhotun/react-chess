import styled from 'styled-components';
import { Colors } from 'models/types';

import { theme } from 'theme';

const colorsMap = {
  black: theme.colors.blackCell,
  white: theme.colors.whiteCell,
};

export const Cell = styled.div<{
  color: Colors;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => colorsMap[color]};
`;
