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

  private isEmpty() {
    return !this.piece;
  }

  isVerticalEmpty(target: Cell) {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) return false;
    }

    return true;
  }

  move(target: Cell) {
    if (!this.piece?.canMove(target)) return;

    this.piece.move(target);
    target.piece = this.piece;
    this.piece = undefined;
  }
}
