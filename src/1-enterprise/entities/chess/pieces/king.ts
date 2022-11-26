import {ChessPiece} from "../chess-piece";
import {Board} from "../../boardgame/board";
import {ColorEnum} from "../../../enum/color.enum";

export class King extends ChessPiece {

    colorTest
    constructor(board: Board, color: ColorEnum) {
        super(board, color);
        this.colorTest = color
    }

    toString() {
        return (this.colorTest) ? '\u2654' : '\u265A'
    }
}