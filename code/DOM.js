import ship from './ship.js';
import gameBoard from './gameBoard.js';
import player from './player.js';

const game = () => {
	let carrier1 = ship(1, 'carrier', 5, true);
	let BattleShip1 = ship(2, 'BattleShip',4);
	let Destroyer1 = ship(3, 'Destroyer', 3);
	let Submarine1 = ship(4, 'Submarine', 3);
	let PatrolBoat1 = ship(2, 'PatrolBoat', 2);
	let computerArray = [carrier1, BattleShip1,	Destroyer1, Submarine1, PatrolBoat1];

	let carrier2 = ship(1, 'carrier', 5, true);
	let BattleShip2 = ship(2, 'BattleShip',4);
	let Destroyer2 = ship(3, 'Destroyer', 3);
	let Submarine2 = ship(4, 'Submarine', 3);
	let PatrolBoat2 = ship(2, 'PatrolBoat', 2);
	let humanArray = [carrier2, BattleShip2, Destroyer2,  Submarine2, PatrolBoat2];

	const computerBoard = gameBoard('computer');
	const playerBoard = gameBoard('human');

	const human = player('human');
	const computer = player('computer');

    
};

export default game;
