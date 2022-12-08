import {Board} from "../../1-enterprise/entities/boardgame/board";
import {ColorEnum} from "../../shared/enum/color.enum";
import {Rook} from "../../1-enterprise/entities/chess/pieces/rook";
import {Position} from "../../1-enterprise/entities/boardgame/position";
import {King} from "../../1-enterprise/entities/chess/pieces/king";
import {ColumnEnum} from "../../shared/enum/column.enum";
import {Piece} from "../../1-enterprise/entities/boardgame/piece";
import {ChessPosition} from "../../1-enterprise/entities/chess/chess-position";
import {ChessError} from "../../1-enterprise/entities/chess/error/chess-error";
import {ChessPiece} from "../../1-enterprise/entities/chess/chess-piece";


export class ChessMatch {
    private _board: Board
    boardChessMatch: any[][];

    constructor() {
        this._board = new Board(8, 8);
        this.initialSetup()
        this.boardChessMatch = [];

        for (let i: number = 0; i < this._board.rows; i++) {
            this.boardChessMatch[i] = [];
            for (let j: number = 0; j < this._board.columns; j++) {
                let position = { row: i, column: j }
                this.boardChessMatch[i][j] = this._board.getPiece(position as Position)
            }
        }
    }

    getPieces():any[][] {
        return this.boardChessMatch
    }

    passPieces() {
        for (let i: number = 0; i < this._board.rows; i++) {
            for (let j: number = 0; j < this._board.columns; j++) {
                this.boardChessMatch[i][j] = this._board.pieces[i][j]
            }
        }
    }


    performChessMove(sourcePosition: ChessPosition, targetPosition: ChessPosition): ChessPiece {
        const source = sourcePosition.toPosition()
        const target = targetPosition.toPosition()
        this.validateSourcePosition(source)
        const capturedPiece: Piece | null  = this.makeMove(source, target)
        return capturedPiece as ChessPiece;
    }

    makeMove(source: Position, target: Position): Piece | null {
        const p = this._board.removePiece(source)
        const capturedPiece = this._board.removePiece(target)
        this._board.placePiece(p, target)
        return capturedPiece;
    }

    public validateSourcePosition(position: Position): void {
        if(!this._board.thereIsAPiece(position)){
            throw new ChessError("Error instantiating ChessPosition. Valid values are from a1 to h8")
        }
    }

    placeNewPiece(column: ColumnEnum, row: number, piece: Piece | null){
        this._board.placePiece(piece, new ChessPosition(column, row).toPosition())
    }

    initialSetup() {

        this.placeNewPiece( ColumnEnum.C, 1, new Rook(this._board, ColorEnum.BLACK))
        this.placeNewPiece( ColumnEnum.C, 2, new Rook(this._board, ColorEnum.BLACK))
        this.placeNewPiece( ColumnEnum.D, 2, new Rook(this._board, ColorEnum.BLACK))
        this.placeNewPiece( ColumnEnum.E, 2, new Rook(this._board, ColorEnum.BLACK))
        this.placeNewPiece( ColumnEnum.E, 1, new Rook(this._board, ColorEnum.BLACK))
        this.placeNewPiece( ColumnEnum.D, 1, new King(this._board, ColorEnum.BLACK))

        this.placeNewPiece( ColumnEnum.C, 7, new Rook(this._board, ColorEnum.WHITE))
        this.placeNewPiece( ColumnEnum.C, 8, new Rook(this._board, ColorEnum.WHITE))
        this.placeNewPiece( ColumnEnum.D, 7, new Rook(this._board, ColorEnum.WHITE))
        this.placeNewPiece( ColumnEnum.E, 7, new Rook(this._board, ColorEnum.WHITE))
        this.placeNewPiece( ColumnEnum.E, 8, new Rook(this._board, ColorEnum.WHITE))
        this.placeNewPiece( ColumnEnum.D, 8, new King(this._board, ColorEnum.WHITE))

    }
}

