import {ChessPiece} from "../chess-piece";
import {Board} from "../../boardgame/board";
import {ColorEnum} from "../../../../shared/enum/color.enum";


export class Rook extends ChessPiece {
    colorTest
    constructor(board: Board, color: ColorEnum) {
        super(board, color);
        this.colorTest = color
    }

    toString() {
        return (this.colorTest) ? '\u2656' : '\u265C'
    }
}