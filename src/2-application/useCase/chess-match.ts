import {Board} from "../../1-enterprise/entities/boardgame/board";
import {ColorEnum} from "../../shared/enum/color.enum";
import {Rook} from "../../1-enterprise/entities/chess/pieces/rook";
import {Position} from "../../1-enterprise/entities/boardgame/position";
import {King} from "../../1-enterprise/entities/chess/pieces/king";
import {ColumnEnum} from "../../shared/enum/column.enum";
import {Piece} from "../../1-enterprise/entities/boardgame/piece";
import {ChessPosition} from "../../1-enterprise/entities/chess/chess-position";

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
                let position = { row: i, column: j }
                this.things[i][j] = this._board.getPiece(position as Position) as unknown as StringOrNumber
            }
        }
    }

    getPieces():StringOrNumber[][] {
        return this.things
    }

    placeNewPiece(column: ColumnEnum, row: number, piece: Piece){
        this._board.placePiece(piece, new ChessPosition(column, row).toPosition())
    }

    initialSetup() {
        this.placeNewPiece( ColumnEnum.E, 8, new Rook(this._board, ColorEnum.BLACK))

        // this._board.placePiece(
        //
        // new Rook(this._board, ColorEnum.WHITE), new Position(2, 1))
        this._board.placePiece(new Rook(this._board, ColorEnum.BLACK), new Position(2, 2))
        this._board.placePiece(new King(this._board, ColorEnum.WHITE), new Position(2, 3))
        this._board.placePiece(new King(this._board, ColorEnum.BLACK), new Position(2, 4))
    }
}

