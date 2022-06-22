import { Cell } from 'models/Cell';
import { Piece } from 'models/pieces/Piece';
import { Colors, Pieces } from 'models/types';

import black from 'assets/black-pawn.svg';
import white from 'assets/white-pawn.svg';

const imageMap = {
  black,
  white,
};

export class Pawn extends Piece {
  name = Pieces.PAWN;
  image: string;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = imageMap[color];
  }

  canMove(target: Cell) {
    if (!super.canMove(target)) return false;
    return true;
  }

  move(): void {
    console.log('Moving');
  }
}
