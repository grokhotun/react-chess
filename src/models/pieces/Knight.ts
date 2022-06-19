import { Cell } from 'models/Cell';
import { Piece } from 'models/pieces/Piece';
import { Colors, Pieces } from 'models/types';

import black from 'assets/black-knight.svg';
import white from 'assets/white-knight.svg';

const imageMap = {
  black,
  white,
};

export class Knight extends Piece {
  name = Pieces.KNIGHT;
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
