import { Cell } from 'models/Cell';
import { Piece } from 'models/pieces/Piece';
import { Colors, Pieces } from 'models/types';

import white from 'assets/white-bishop.svg';
import black from 'assets/black-bishop.svg';

const imageMap = {
  black,
  white,
};

export class Bishop extends Piece {
  name = Pieces.BISHOP;
  image: string;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = imageMap[color];
  }

  canMove(): boolean {
    return true;
  }

  move(): void {
    console.log('Moving');
  }
}
