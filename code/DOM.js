import ship from './ship.js';
import gameBoard from './gameBoard.js';
import player from './player.js';

const gamePlay = () => {
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
	computerBoard.placeShip(carrier1, 10);
	computerBoard.placeShip(BattleShip1, 11);
	computerBoard.placeShip(Destroyer1, 31);
	computerBoard.placeShip(Submarine1, 51);
	computerBoard.placeShip(PatrolBoat1, 71);

	const playerBoard = gameBoard('human');
	playerBoard.placeShip(carrier2, 10);
	playerBoard.placeShip(BattleShip2, 15);
	playerBoard.placeShip(Destroyer2, 33);
	playerBoard.placeShip(Submarine2, 56);
	playerBoard.placeShip(PatrolBoat2, 71);

	const human = player('human');
	const computer = player('computer');

	const grid = document.querySelector('.grid');

	const buildGrid = (boardData, player) => {
		const boxGrid = document.createElement('div');
		const gridContainer = document.createElement('div');
		gridContainer.classList.add('grid-container');
		const thePlayer = document.createElement('div');
		thePlayer.classList.add('player');
		thePlayer.textContent = player;
		boxGrid.appendChild(thePlayer);
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const cellIndex = i * 10 + j;
				const cell = document.createElement('div');
				cell.classList.add('grid-item');
				cell.id = `${player}-cell${cellIndex}`;
				cell.value = boardData[cellIndex]; 
				cell.textContent = '';
				if(boardData === computerBoard.boardInfo.board) {
					cell.addEventListener('click', function () {                   
						if(!cell.textContent) {
							cell.textContent = 'x';
							if (!computerBoard.boardInfo.board[cellIndex].beenHit){
								computerBoard.boardInfo.board[cellIndex].beenHit = true;
								human.playerInfo.shots.push(cellIndex);
								computerBoard.receiveAttack(cellIndex, computerArray);
								checkWon(computerBoard, human);
								computerMove();
							}
						} else {
							console.log('try another area',cell.value);
						}
					});
				}
				const computerMove = () =>{				 
					let coord = computer.AI(playerBoard.boardInfo.lastShot);
					console.log('computer Hit',coord);
					playerBoard.receiveAttack(coord,humanArray);
					playerBoard.boardInfo.board.beenHt = true;
					
					checkWon(playerBoard, computer);
					if (computerBoard.boardInfo.board[cellIndex].ship !== false){
						cell.classList.add('ship');
					}	
					console.log('shots',computer.playerInfo.shots);
				};

				if (boardData === playerBoard.boardInfo.board && cell.value.ship !==false) {
					cell.classList.add('ship');
				}

				gridContainer.appendChild(cell);
			}
		}
		boxGrid.appendChild(gridContainer);
		grid.appendChild(boxGrid); 
		
	};
    
	buildGrid(playerBoard.boardInfo.board, 'Human'); 
	buildGrid(computerBoard.boardInfo.board, 'Computer');



	const checkWon = (theBoard, isPlayer) => {
		if(theBoard.allShipSunk()) {
			isPlayer.playerInfo.isWon = true;
			let result = `${isPlayer.playerInfo.name} has won`;
			alert(result);
		}
	};
	return {buildGrid };
};

export default gamePlay;
      