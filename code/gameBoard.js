
const gameBoard = (player) => {
	const boardInfo = {
		board: [],
		player: player,
		shipsLeft: true,
		lastShot : {
			hit:false,
			coordinate:false
		}
	};

	const fillBoard = () => {
		for (let i = 0; i < 100; i++){
			boardInfo.board.push({ship: false, beenHit: false});
		}
	};

	if (boardInfo.board.length === 0){
		fillBoard();
	}

	
	const placeShip = (ship, startCoord) => {
		if (ship.isVertical){
			for (let i = 0; i < ship.length; i++){
				boardInfo.board[startCoord + i * 10].ship = ship.id; 
			}
		}
		else{
			for (let i = 0; i < ship.length; i++) {
				boardInfo.board[startCoord + i].ship = ship.id;
			}
		}
	};


	const receiveAttack = (coordinate, myArray) => {
		if (boardInfo.board[coordinate].ship) {

			let targetedShip = myArray.find(ship => ship.id === boardInfo.board[coordinate].ship);
			targetedShip.hit(coordinate);

			boardInfo.board[coordinate].beenHit = true;
			boardInfo.lastShot.hit = true;
			boardInfo.lastShot.coordinate = coordinate;

			if (targetedShip.isSunk()) {
				return `${targetedShip.shipName} has been sunk!`;
			} else {
				return `${targetedShip.shipName} has been hit!`;
			}
		} else {
			boardInfo.board[coordinate].beenHit = true;

			boardInfo.lastShot.hit = false;
			boardInfo.lastShot.coordinate = coordinate;
			return 'That is ocean; try another area.';
		}
	};
    
	const allShipSunk = () => {
		boardInfo.board.forEach(element => {
			if(element.ship !== false && element.beenHit === true) {
				boardInfo.shipsLeft = true;
				return false;
			} 
		});
		boardInfo.shipsLeft = true;
		return false;
	};

	return {boardInfo, placeShip, receiveAttack, allShipSunk };
};



export default gameBoard;