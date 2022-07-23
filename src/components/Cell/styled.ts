import styled from 'styled-components';
import { Colors } from 'models/types';

import { theme } from 'theme';

const colorsMap = {
  black: theme.colors.blackCell,
  white: theme.colors.whiteCell,
};

type CellProps = {
  $selected?: boolean;
  $enemy?: boolean;
  $color: Colors;
};

export const Cell = styled.div<CellProps>`
  user-select: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $selected, $enemy, $color, theme }) => {
    if ($enemy) return theme.colors.targetCell;
    if ($selected) return theme.colors.selectedCell;
    return colorsMap[$color];
  }};
`;

export const TargetPoint = styled.div`
  width: 24px;
  background-color: ${({ theme }) => theme.colors.targetPoint};
  height: 24px;
  opacity: 0.5;
  border-radius: 12px;
`;
