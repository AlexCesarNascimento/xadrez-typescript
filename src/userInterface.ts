import { question } from "readline-sync";
import { ChessPosition } from "./1-enterprise/entities/chess/chess-position";
import {ColumnEnum} from "./shared/enum/column.enum";

var strL1: string
type StringOrNumber = string | number | string[][] | number[][] | null

export class UserInterface {

    static readChessPosition(mensagem: string ){
        try {
            const fieldPosition = question(mensagem)
            // @ts-ignore
            const firstChar:ColumnEnum = ColumnEnum[fieldPosition.charAt(0).toLocaleUpperCase()]
            const secondChar = Number(fieldPosition.charAt(1))
            return new ChessPosition(firstChar as unknown as ColumnEnum, secondChar)
        }
        catch (error) {
            console.error(error)
            throw new Error("Erro reading ChessPosition. Valid values are from a1 to h8")
        }
    }

    public static printBoard(pieces: any[][]): void {

        for (let i=0; i<8; i++) {
            strL1 = ((8 - i) + "  ").toString()
            for (let j=0; j<8; j++) {
                this.printPiece(pieces[i][j])
            }
            console.log(strL1)
        }
        console.log("   a  b  c  d  e  f  g  h")
    }

    public static printPiece(piece: StringOrNumber): void {
        if(piece == null) {
            strL1 += '-'
        } else {
            strL1 += `${piece}`
        }
        strL1 += '  '
    }

}