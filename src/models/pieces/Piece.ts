import { Cell } from 'models/Cell';
import { Colors } from 'models/types';

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

  abstract canMove(): boolean;
  abstract move(): void;
}
