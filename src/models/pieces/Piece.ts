import { Cell } from 'models/Cell';
import { Colors, Pieces } from 'models/types';

export abstract class Piece {
  color: Colors;
  cell: Cell;
  abstract name: string;
  abstract image: string;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.piece = this;
  }

  canMove(target: Cell) {
    if (
      [
        target.piece?.color === this.color,
        target.piece?.name === Pieces.KING,
      ].some(Boolean)
    )
      return false;

    return true;
  }
  abstract move(target: Cell): void;
}
