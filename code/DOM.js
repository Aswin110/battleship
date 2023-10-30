import ship from './ship.js';
import gameBoard from './gameBoard.js';
import player from './player.js';

const game = () => {
	let carrier = ship(1, 'carrier', 5, true);
	let BattleShip = ship(2, 'BattleShip',4);
	let Destroyer = ship(3, 'Destroyer', 3);
	let Submarine = ship(4, 'Submarine', 3);
	let PatrolBoat = ship(2, 'PatrolBoat', 2);
	let myArray = [carrier, BattleShip,	Destroyer, 	Submarine, 	PatrolBoat];

	const computerBoard = gameBoard('computer');
	const playerBoard = gameBoard('human');

	const human = player('human');
	const computer = player('computer');

    
};

