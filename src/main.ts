
import {ChessMatch} from "./2-application/useCase/chess-match";
import {UserInterface} from "./userInterface";

let chessMatch: ChessMatch;
chessMatch = new ChessMatch();
UserInterface.printBoard(chessMatch.getPieces())
