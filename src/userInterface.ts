import {ChessPiece} from "./1-enterprise/entities/chess/chess-piece";
var strL1: string
type StringOrNumber = string | number | string[][] | number[][] | null
export class UserInterface {

    public static printBoard(pieces: StringOrNumber[][]): void {

        for (let i=0; i<8; i++) {
            strL1 = ((8 - i) + " ").toString()
            for (let j=0; j<8; j++) {
                this.printPiece(pieces[i][j])
            }
            console.log(strL1)
        }
        console.log("  a b c d e f g h")
    }

    public static printPiece(piece: StringOrNumber): void {
        if(piece == null) {
            strL1 = '-'
        } else {
            strL1 += `${piece}`
        }
        strL1 += ' '
    }
}