import { Piece } from "./piece";

export class Board {
    private _rows: number
    private _columns: number
    private pieces: Piece[][]

    constructor(rows: number, columns: number) {
        this._rows = rows;
        this._columns = columns;
        this.pieces = new Piece[rows][columns]
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
}
