import {ChessPiece} from "./1-enterprise/entities/chess/chess-piece";

export class UI {

    public static printBoard(pieces: ChessPiece[][]): void {

        for (let i=0; i<pieces.length; i++) {
            console.log((8 - i) + " ")
            for (let j=0; j<pieces.length; j++) {
                this.printPiece(pieces[i][j])
            }
            console.log()
        }
        console.log("  a b c d e f g h")
    }

    public static printPiece(piece: ChessPiece): void {
        if(piece == null) {
            console.log('-')
        } else {
            console.log(piece)
        }
        console.log(' ')
    }
}