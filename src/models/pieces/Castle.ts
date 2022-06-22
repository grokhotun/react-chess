import { Cell } from 'models/Cell';
import { Piece } from 'models/pieces/Piece';
import { Colors, Pieces } from 'models/types';

import black from 'assets/black-castle.svg';
import white from 'assets/white-castle.svg';

const imageMap = {
  black,
  white,
};

export class Castle extends Piece {
  name = Pieces.CASTLE;
  image: string;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = imageMap[color];
  }

  canMove() {
    return false;
  }

  move(): void {
    console.log('Moving');
  }
}
