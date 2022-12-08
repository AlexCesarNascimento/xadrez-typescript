import {BoardError} from "../../boardgame/error/board-error";

export class ChessError extends BoardError {
    constructor(message: string) {
        super(message);
    }
}