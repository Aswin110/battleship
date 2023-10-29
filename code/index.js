import ship from './ship.js';
import gameBoard from './gameBoard.js';

let carrier = ship(1, 'carrier', 5, true);
let BattleShip = ship(2, 'BattleShip',4);
let Destroyer = ship(3, 'Destroyer', 3);
let Submarine = ship(4, 'Submarine', 3);
let PatrolBoat = ship(2, 'PatrolBoat', 2);

let myArray = [carrier, BattleShip,	Destroyer, 	Submarine, 	PatrolBoat];

console.log(myArray);

let object = myArray.find(object => object.id === 1);
console.log(object);

let game = gameBoard();
console.log(game.boardInfo.board);
game.placeShip(carrier, 5);
console.log(game.receiveAttack(5, myArray));