const ship = (id, shipName, length) => {
	let hitSize = Array(length);
	const hit = (coordinate) => {
		hitSize[coordinate] = 'x';
	};

	const isSunk = () => {
		hitSize.every((element) => element === 'x');
	};

	return { id, shipName, length, hit, isSunk };
};

export default ship;