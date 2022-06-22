import styled from 'styled-components';
import { Colors } from 'models/types';

import { theme } from 'theme';

const colorsMap = {
  black: theme.colors.blackCell,
  white: theme.colors.whiteCell,
};

export const Cell = styled.div<{
  $selected?: boolean;
  $color: Colors;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $selected, $color, theme }) =>
    $selected ? theme.colors.selectedCell : colorsMap[$color]};
`;

export const TargetPoint = styled.div`
  width: 24px;
  background-color: ${({ theme }) => theme.colors.targetPoint};
  height: 24px;
  opacity: 0.5;
  border-radius: 12px;
`;
