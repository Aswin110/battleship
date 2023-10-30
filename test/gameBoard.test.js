/* eslint-disable no-undef */
import gameBoard from '../code/gameBoard.js';
import ship from '../code/ship.js';

let game; 

beforeEach(() => {
	game = gameBoard('player1'); 
});

test('length of board', () => {
	expect(game.boardInfo.board.length).toBe(100);
});

test('place ship horizontally', () => {
	let firstShip = ship(1, 'carrier', 5);
	game.placeShip(firstShip, 5);
	for (let i = 0; i < firstShip.length; i++) {
		expect(game.boardInfo.board[5 + i].ship).toBe(1);
	}
});

test('place ship vertically', () => {
	let firstShip = ship(1, 'carrier', 5, true);
	game.placeShip(firstShip, 5);
	for (let i = 0; i < firstShip.length; i++) {
		expect(game.boardInfo.board[5 + i * 10].ship).toBe(1);
	}
});

test('received Attack ', () => {
	let carrier = ship(1, 'carrier', 5, true);
	let myArray = [carrier]; 
	game.placeShip(carrier, 5);
	expect(game.receiveAttack(5, myArray)).toBe('carrier has been hit!');
});

test('do all ship sunk should return true ', () => {
	let carrier = ship(1, 'carrier', 5, true);
	let myArray = [carrier]; 
	game.placeShip(carrier, 5);
	game.receiveAttack(5, myArray);
	game.receiveAttack(15, myArray);
	game.receiveAttack(25, myArray);
	game.receiveAttack(35, myArray);
	game.receiveAttack(45, myArray);
	// console.log(game.boardInfo.board);
	expect(game.allShipSunk()).toBeFalsy();
});

// test('do all ship sunk should return false', () => {
// 	let carrier = ship(1, 'carrier', 5, true);
// 	let myArray = [carrier]; 
// 	game.placeShip(carrier, 5);
// 	game.receiveAttack(5, myArray);
// 	game.receiveAttack(15, myArray);
// 	game.receiveAttack(25, myArray);
// 	game.receiveAttack(35, myArray);
// 	// game.receiveAttack(45, myArray);
// 	console.log(game.boardInfo.board);
// 	expect(game.allShipSunk()).toBeTruthy();
// });