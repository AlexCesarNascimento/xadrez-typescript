import { Piece } from "./piece";

type StringOrNumber = string | number | string[][] | number[][] | null | string[]
export class Board {
    private _rows: number
    private _columns: number
    private pieces: string[][]

    constructor(rows: number, columns: number) {
        this._rows = rows;
        this._columns = columns;
        this.pieces = []

        for(let i: number = 0; i < this._rows; i++) {
            this.pieces[i] = [];
            for(let j: number = 0; j< this._columns; j++) {
                this.pieces[i][j] = '-';
            }
        }
    }

    get rows(): number {
        return this._rows;
    }
    set rows(value: number) {
        this._rows = value;
    }
    get columns(): number {
        return this._columns;
    }
    set columns(value: number) {
        this._columns = value;
    }

    piece( row: number, column: number): StringOrNumber { //retorna a matriz pieces na linha row e na coluna column
        return this.pieces[row][column]
    }
}


