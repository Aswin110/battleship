import gameBoard from '../code/gameBoard.js';
import ship from '../code/ship.js';

let game; 

beforeEach(() => {
	game = gameBoard(); 
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