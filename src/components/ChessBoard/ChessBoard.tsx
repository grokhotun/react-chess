import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Board } from 'models/Board';
import { Cell as CellModel } from 'models/Cell';
import { Typography } from 'antd';
import { useClickAway } from 'react-use';

import { Row, Cell } from 'components';

import { Wrapper, Container } from './styled';

export const ChessBoard = () => {
  const [board, setBoard] = useState(new Board());
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setSelectedCell(null);
  });

  const start = useCallback(() => {
    const boardInstance = new Board();
    boardInstance.init();
    boardInstance.setup();
    setBoard(boardInstance);
  }, []);

  const updateBoard = useCallback(() => {
    const newBoard = board.copyBoard();
    setBoard(newBoard);
  }, [board]);

  const handleClick = useCallback(
    (cell: CellModel) => {
      if (selectedCell === cell) {
        setSelectedCell(null);
        return;
      }

      if (
        selectedCell &&
        selectedCell !== cell &&
        selectedCell.piece?.canMove(cell)
      ) {
        selectedCell.move(cell);
        setSelectedCell(null);
        return;
      }

      if (!cell.piece) {
        setSelectedCell(null);
        return;
      }

      setSelectedCell(cell);
    },
    [selectedCell]
  );

  const showMoves = useCallback(() => {
    if (!selectedCell) return;
    board.showMoves(selectedCell);
    updateBoard();
  }, [board, selectedCell, updateBoard]);

  useEffect(() => {
    showMoves();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCell]);

  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Typography.Title level={1}>React Chess</Typography.Title>
      <Wrapper ref={ref}>
        {board.cells.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
                key={cellIndex}
                cell={cell}
                onClick={handleClick}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell.y
                }
              />
            ))}
          </Row>
        ))}
      </Wrapper>
    </Container>
  );
};
