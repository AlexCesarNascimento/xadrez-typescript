import {ChessError} from "./error/chess-error";
import {Position} from "../boardgame/position";
import {ColumnEnum} from "../../../shared/enum/column.enum";

export class ChessPosition {
    private _column: ColumnEnum
    private _row: number

    constructor(column: ColumnEnum, row: number) {
        if( column < ColumnEnum.A || column > ColumnEnum.H || row < 1 || row > 8) {
            throw new ChessError("Error instantiating ChessPosition. Valid values are from a1 to h8")
        }
        this._column = column;
        this._row = row;
    }

    get column(): ColumnEnum {
        return this._column;
    }

    get row(): number {
        return this._row;
    }

    toPosition() {
        return new Position(8 - this._row, this._column - ColumnEnum.A)
    }

    protected fromPosition(position: Position): ChessPosition {
        return new ChessPosition(ColumnEnum.A - position.column, 8 - position.row)
    }

    toString() {
        return '' + this.column + this.row
    }
}