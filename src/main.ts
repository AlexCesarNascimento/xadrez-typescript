import { Position } from "./1-enterprise/boardgame/position";
import { Board } from "./1-enterprise/boardgame/board";
import {ChessMatch} from "./2-application/useCase/chess-match";



let b: Board;
b = new Board(8, 8);
console.log(b)
