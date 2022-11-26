export class Position {
    private _row: number = 0
    private _column: number = 0

    constructor(row: number, column: number) {
        this._row = row;
        this._column = column
    }

    get row(){
         return this._row
    }

    set row(row: number) {
        this._row = row
    }

    get column(){
        return this._column
    }

    set column(column: number) {
        this._column = column
    }

    toString() {
        return this.row + ", " + this.column
    }
}