import {Board} from "../../1-enterprise/boardgame/board";
import {ChessPiece} from "../../1-enterprise/entities/chess/chess-piece";

type StringOrNumber = string | number | string[][] | number[][] | null
export class ChessMatch {
    private _board: Board

    things: StringOrNumber[][];
    constructor() {
        this._board = new Board(8, 8);
        this.things = [];

        for (let i: number = 0; i < 8; i++) {
            this.things[i] = [];
            for (let j: number = 0; j < 8; j++) {
                this.things[i][j] = this._board.piece(i, j) as unknown as StringOrNumber
            }
        }
    }

    getPieces():StringOrNumber[][] {
        return this.things
    }
}

