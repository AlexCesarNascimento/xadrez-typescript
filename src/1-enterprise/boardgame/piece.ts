import { Position } from "./position";
import { Board } from "./board";


export class Piece {

    protected position: Position | null // é uma posição de matriz, ainda não é a posição do xadrez
    private _board: Board

    constructor(board: Board) {
        this._board = this.board;
        this.position = null
    }

    protected get board(): Board {
        return this._board;
    }
}

