import { Piece } from "../../boardgame/piece";
import {ColorEnum} from "../../enum/color.enum";
import { Board } from "../../boardgame/board";

export class ChessPiece extends Piece {

    private readonly _color: ColorEnum

    constructor(board: Board, color?: ColorEnum) {
        super(board);
        this._color = color;
    }
}