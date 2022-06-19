import { Cell as CellType } from 'models/Cell';
import React from 'react';

import { Cell as StyledCell } from './styled';

type CellProps = {
  cell: CellType;
};

export const Cell: React.FC<CellProps> = ({ cell }) => {
  const src = cell.piece?.image;
  const name = cell.piece?.name;
  const color = cell.colors;

  return (
    <StyledCell color={color}>
      <img src={src} title={name} alt={name} />
    </StyledCell>
  );
};
