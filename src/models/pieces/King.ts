import { Colors, Pieces } from 'models/types';
import { Cell } from 'models/Cell';
import { Piece } from 'models/pieces/Piece';

import black from 'assets/black-king.svg';
import white from 'assets/white-king.svg';

const imageMap = {
  black,
  white,
};

export class King extends Piece {
  name = Pieces.KING;
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
