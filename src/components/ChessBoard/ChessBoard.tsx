import React, { useEffect, useState } from 'react';
import { Board } from 'models/Board';

import { Row, Cell } from 'components';

import { Wrapper, Container } from './styled';

export const ChessBoard = () => {
  const [board, setBoard] = useState(new Board());

  const start = () => {
    const boardInstance = new Board();
    boardInstance.init();
    boardInstance.setup();
    setBoard(boardInstance);
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <Container>
      <h1>React Chess</h1>
      <Wrapper>
        {board.cells.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell key={cellIndex} cell={cell} />
            ))}
          </Row>
        ))}
      </Wrapper>
    </Container>
  );
};
