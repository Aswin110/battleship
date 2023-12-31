const player = (player) => {

	let playerInfo = {
		name : player,
		shots: [],
		IsWon : false
	};

	const randomPlay = () => {
		let randomMove = Math.floor((Math.random() * 100) - 1);
		while (playerInfo.shots.includes(randomMove)) {
			randomMove = Math.floor((Math.random() * 100) - 1);
		}
		playerInfo.shots.push(randomMove);
		return randomMove;
	};

	const AI = (playerBoardLastShot) => {
		if(playerBoardLastShot.hit) {
			const betterMove = (playerBoardLastShot) => {
				let randomNum = Math.floor((Math.random() * 4));
				let nextShot;
				switch(randomNum) {
				case 0:
					nextShot = playerBoardLastShot.coordinate + 1;
					break;

				case 1:
					nextShot = playerBoardLastShot.coordinate - 1;
					break;

				case 2:
					nextShot = playerBoardLastShot.coordinate + 10;
					break;

				case 3:
					nextShot = playerBoardLastShot.coordinate - 10;
					break;
				}
				return nextShot;
			};

			let move = betterMove(playerBoardLastShot);
			let breakLoop = 0;
			while (playerInfo.shots.includes(move) || move > 99 || move < 0) {
				move = betterMove(playerBoardLastShot);
				breakLoop++;
				if (breakLoop === 10) {
					return randomPlay();
				}
			}
			playerInfo.shots.push(move);
			return move;

		} else {
			return randomPlay();
		}
	};

	return {playerInfo, randomPlay, AI};
};

export default player;