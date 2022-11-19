import { Position } from "./position";
import { Board } from "./Board";

export class Piece {

    protected position: Position
    private _board: Board

    constructor(board: Board) {
        this._board = board;
        this.position = null
    }

    protected get board(): Board {
        return this._board;
    }
}