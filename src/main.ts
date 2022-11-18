import { Position } from "./1-enterprise/boardgame/position";

let p: Position;
p = new Position(0, 0);

console.log(`linha: GET: ${p.row} coluna: GET: ${p.column}` )

p.row = 4
p.column = 4

console.log(`linha: GET: ${p.row} coluna: GET: ${p.column}` )
console.log(`${p.toString()}`)

