import { Piece } from "./piece";
import {Position} from "./position";
import {BoardError} from "./error/board-error";
interface PositionInterface {row: number, column: number}
type StringOrNumber = string | number | string[][] | number[][] | null | string[]
export class Board {
    private _rows: number
    private _columns: number
    pieces: string[][]

    constructor(rows: number, columns: number) {
        if(rows < 1 || columns < 1) {
            throw new BoardError('Error creating bord: there must be at least 1 row and 1 column')
        }
        this._rows = rows;
        this._columns = columns;
        this.pieces = []

        for (let i: number = 0; i < this._rows; i++) {
            this.pieces[i] = [];
            for (let j: number = 0; j < this._columns; j++) {
                this.pieces[i][j] = '-';
            }
        }
    }

    get rows(): number {
        return this._rows;
    }

    get columns(): number {
        return this._columns;
    }


    getPiece(position: Position): StringOrNumber {
        if (!this.positionExists(position)){
            throw new BoardError('Position not on the board')
        }
        return this.pieces[position.row][position.column]
    }

    placePiece(piece: Piece, position: Position): void {
        if(this.thereIsAPiece(position)){
            throw new BoardError('There is already a piece on position '+ position)
        }
        this.pieces[position.row][position.column] =  piece.toString()
    }

    positionExists(position: Position): boolean{
        return position.row >= 0
            && position.row < this.rows
            && position.column >= 0
            && position.column < this.columns
    }

    thereIsAPiece(position: Position): boolean {
        if (!this.positionExists(position)){
            throw new BoardError('Position not on the board')
        }
        return this.getPiece(position) != '-';
    }
}