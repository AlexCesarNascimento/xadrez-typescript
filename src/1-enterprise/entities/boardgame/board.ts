import { Piece } from "./piece";
import {Position} from "./position";
import {BoardError} from "./error/board-error";

export class Board {
    private _rows: number
    private _columns: number
    pieces: any[][]

    constructor(rows: number, columns: number) {
        if(rows < 1 || columns < 1) {
            throw new BoardError('Error creating bord: there must be at least 1 row and 1 column')
        }
        this._rows = rows;
        this._columns = columns;
        this.pieces = []

        for (let i: number = 0; i < this._rows; i++) {
            this.pieces[i] = []
            for (let j: number = 0; j < this._columns; j++) {
                this.pieces[i][j] = null
            }
        }
    }

    get rows(): number {
        return this._rows;
    }

    get columns(): number {
        return this._columns;
    }

    getPiece(position: Position): Piece | null {
        if (!this.positionExists(position)){
            throw new BoardError('Position not on the board')
        }

        return  this.pieces[position.row][position.column]
    }

    removePiece(position: Position): Piece | null{
        if(!this.positionExists(position)){
            throw new BoardError('Position not on the board')
        }
        if(this.getPiece(position) == null) {
            return null
        }
        let aux: Piece = this.getPiece(position) as Piece
        // aux.position.row = null
        // aux.position.column = null
        this.pieces[position.row][position.column] = null
        return aux
    }

    placePiece(piece: any | null, position: Position): void {
        if(this.thereIsAPiece(position)){
            throw new BoardError('There is already a piece on position '+ position)
        }
        this.pieces[position.row][position.column] =  piece
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
        return this.getPiece(position) != null
    }
}