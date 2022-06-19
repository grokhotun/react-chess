import { Board } from 'models/Board';
import { Piece } from 'models/pieces/Piece';
import { Colors } from 'models/types';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly colors: Colors;
  board: Board;
  empty = true;
  piece?: Piece;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    piece?: Piece
  ) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.colors = color;
    this.piece = piece;
  }
}
