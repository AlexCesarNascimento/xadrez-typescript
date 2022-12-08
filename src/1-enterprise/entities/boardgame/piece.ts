import { Position } from "./position";
import { Board } from "./board";


export class Piece {

    position: Position | null
    private _board: Board

    constructor(board: Board) {
        this._board = board
        this.position = null
    }

    protected get board(): Board {
        return this._board
    }
}
