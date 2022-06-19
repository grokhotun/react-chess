import { COLS_AMOUNT, ROWS_AMOUNT } from 'models/constants';
import { Cell } from 'models/Cell';
import { Bishop } from 'models/pieces/Bishop';
import { Castle } from 'models/pieces/Castle';
import { King } from 'models/pieces/King';
import { Knight } from 'models/pieces/Knight';
import { Pawn } from 'models/pieces/Pawn';
import { Queen } from 'models/pieces/Queen';
import { Colors } from 'models/types';

export class Board {
  cells: Cell[][] = [];

  public init() {
    Array.from({ length: ROWS_AMOUNT }).forEach((r, yAxis) => {
      const row: Cell[] = [];

      Array.from({ length: COLS_AMOUNT }).forEach((c, xAxis) => {
        if ((yAxis + xAxis) % 2 !== 0) {
          row.push(new Cell(this, xAxis, yAxis, Colors.BLACK));
        } else {
          row.push(new Cell(this, xAxis, yAxis, Colors.WHITE));
        }
      });

      this.cells.push(row);
    });
  }

  private getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private setPawns() {
    Array.from({ length: ROWS_AMOUNT }).forEach((_, idx) => {
      new Pawn(Colors.WHITE, this.getCell(idx, 1));
      new Pawn(Colors.BLACK, this.getCell(idx, 6));
    });
  }

  private setKings() {
    new King(Colors.WHITE, this.getCell(4, 0));
    new King(Colors.BLACK, this.getCell(4, 7));
  }

  private setQueens() {
    new Queen(Colors.WHITE, this.getCell(3, 0));
    new Queen(Colors.BLACK, this.getCell(3, 7));
  }

  private setKnights() {
    new Knight(Colors.WHITE, this.getCell(1, 0));
    new Knight(Colors.WHITE, this.getCell(6, 0));
    new Knight(Colors.BLACK, this.getCell(1, 7));
    new Knight(Colors.BLACK, this.getCell(6, 7));
  }

  private setBishops() {
    new Bishop(Colors.WHITE, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 7));
  }

  private setCastles() {
    new Castle(Colors.WHITE, this.getCell(0, 0));
    new Castle(Colors.WHITE, this.getCell(7, 0));
    new Castle(Colors.BLACK, this.getCell(0, 7));
    new Castle(Colors.BLACK, this.getCell(7, 7));
  }

  public setup() {
    this.setPawns();
    this.setKings();
    this.setQueens();
    this.setBishops();
    this.setKnights();
    this.setCastles();
  }
}
