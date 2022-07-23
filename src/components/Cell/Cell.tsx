import { Cell as CellType } from 'models/Cell';
import React, { useCallback } from 'react';

import { Cell as StyledCell, TargetPoint } from './styled';
import { Piece } from './Piece';

type CellProps = {
  selected?: boolean;
  cell: CellType;
  onClick: (cell: CellType) => void;
};

export const Cell: React.FC<CellProps> = ({ cell, selected, onClick }) => {
  const src = cell.piece?.image;
  const name = cell.piece?.name;
  const color = cell.colors;
  const showTarget = cell.empty && !cell.piece;
  const hasPiece = !!cell.piece;
  const isEnemy = Boolean(!selected && cell.empty && cell.piece);

  const handleClick = useCallback(() => {
    onClick(cell);
  }, [cell, onClick]);

  return (
    <StyledCell
      onClick={handleClick}
      $selected={selected}
      $enemy={isEnemy}
      $color={color}
    >
      {showTarget && <TargetPoint />}
      {hasPiece && <Piece src={src} name={name} />}
    </StyledCell>
  );
};
