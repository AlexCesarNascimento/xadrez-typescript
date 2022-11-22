import { Position } from "./position";
import { Board } from "./board";
import {ChessMatch} from "../../2-application/useCase/chess-match";

export class Piece {

    private position: Position | null
    private _board: Board

    constructor(board: { rows: number , columns: number }) {
        this._board = this.board;
        this.position = null
    }

    protected get board(): Board {
        return this._board;
    }
}

