import gameBoard from '../code/gameBoard.js';
import player from '../code/player.js';
import ship from '../code/ship.js';

test('random number between 0 to 99', () => {
	let sonu = player('sonu');
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.randomPlay();
	sonu.playerInfo.shots.forEach((element) =>{
		expect(element).toBeGreaterThan(0);
	});
});

test('AI makes a legal move after a hit (at 99)', () => {
	const ai = player('sonu');
	let i = 0; 
	while (i < 7){
		expect(ai.AI({hit: true, coordinate: 99})).toBeLessThan(99);
		i++;
	}
});

test('AI hit correctly at least once ', () => {
	const board = gameBoard('player1');
	const carrier = ship(1, 'carrier', 5);
	const BattleShip = ship(2, 'battleship', 4, true);

	board.placeShip(carrier, 4);
	board.placeShip(BattleShip, 20);

	const ai = player('sonu');

	let i = 0 ;
	while(i > 5) {
		ai.AI({hit: true, coordinate: 4});
		i++;
	} 
	expect(board.boardInfo.board[5].hit).toBeTruthy;

	let j = 0 ;
	while(j > 5) {
		ai.AI({hit: true, coordinate: 20});
		i++;
	} 
    expect(board.boardInfo.board[30].hit).toBeTruthy;

});

