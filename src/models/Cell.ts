import { Board } from 'models/Board';
import { Piece } from 'models/pieces/Piece';
import { Colors } from 'models/types';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly colors: Colors;
  board: Board;
  empty = false;
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

  isHorizontalEmpty(target: Cell) {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) return false;
    }

    return true;
  }

  setPiece(piece: Piece) {
    this.piece = piece;
    this.piece.cell = this;
  }

  move(target: Cell) {
    if (!this.piece?.canMove(target)) return;

    this.piece.move(target);
    target.setPiece(this.piece);
    this.piece = undefined;
  }
}
