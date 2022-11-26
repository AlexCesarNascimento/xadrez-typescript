import {Board} from "../../1-enterprise/entities/boardgame/board";
import {ChessPiece} from "../../1-enterprise/entities/chess/chess-piece";
import {ColorEnum} from "../../1-enterprise/enum/color.enum";
import {Rook} from "../../1-enterprise/entities/chess/pieces/rook";
import {Position} from "../../1-enterprise/entities/boardgame/position";
import {King} from "../../1-enterprise/entities/chess/pieces/king";

type StringOrNumber = string | number | string[][] | number[][] | null
export class ChessMatch {
    private _board: Board

    things: StringOrNumber[][];
    constructor() {
        this._board = new Board(8, 8);
        this.initialSetup()
        this.things = [];

        for (let i: number = 0; i < 8; i++) {
            this.things[i] = [];
            for (let j: number = 0; j < 8; j++) {
                this.things[i][j] = this._board.getPiece(i, j) as unknown as StringOrNumber
            }
        }
    }

    getPieces():StringOrNumber[][] {
        return this.things
    }

    initialSetup() {
        this._board.placePiece(new Rook(this._board, ColorEnum.WHITE), new Position(2, 1))
        this._board.placePiece(new Rook(this._board, ColorEnum.BLACK), new Position(2, 2))
        this._board.placePiece(new King(this._board, ColorEnum.WHITE), new Position(2, 3))
        this._board.placePiece(new King(this._board, ColorEnum.BLACK), new Position(2, 4))
    }
}

