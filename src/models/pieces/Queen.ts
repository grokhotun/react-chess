import { Cell } from 'models/Cell';
import { Piece } from 'models/pieces/Piece';
import { Colors, Pieces } from 'models/types';

import black from 'assets/black-queen.svg';
import white from 'assets/white-queen.svg';

const imageMap = {
  black,
  white,
};

export class Queen extends Piece {
  name = Pieces.QUEEN;
  image: string;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = imageMap[color];
  }

  canMove(target: Cell) {
    if (!super.canMove(target)) return false;
    if (this.cell.isVerticalEmpty(target)) return true;
    return false;
  }

  move(): void {
    console.log('Moving');
  }
}
