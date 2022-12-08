import {ChessMatch} from "./2-application/useCase/chess-match";
import {UserInterface} from "./userInterface";
import {ChessPiece} from "./1-enterprise/entities/chess/chess-piece";
import {Piece} from "./1-enterprise/entities/boardgame/piece";

let chessMatch: ChessMatch;
chessMatch = new ChessMatch();

while (true){
    UserInterface.printBoard(chessMatch.getPieces())
    const source: any = UserInterface.readChessPosition('Source: ')
    const target: any = UserInterface.readChessPosition('Target: ')
    chessMatch.performChessMove(source, target)
    console.clear()
    chessMatch.passPieces()
}
