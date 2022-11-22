import {Board} from "../../1-enterprise/boardgame/board";
import {ChessPiece} from "../../1-enterprise/entities/chess/chess-piece";
import {Piece} from "../../1-enterprise/boardgame/piece";

// noinspection TypeScriptValidateTypes
export class ChessMatch {
    board: Board
    constructor() {
        this.board = new Board(8, 8 );
    }

    getPieces() {
        let matriz: ChessPiece[][];
        matriz = new Board(this.board.rows, this.board.columns);
        for (let i=0; i<this.board.rows; i++) {
            for (let j=0; j<this.board.columns; j++) {
                // @ts-ignore
                matriz[i][j] = this.board.pieces({row: i, column: j})
            }
        }
        return matriz
    }

}
let CM: ChessMatch;
CM = new ChessMatch

CM.getPieces()
