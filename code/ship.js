const ship = (id, shipName, length, isVertical = false) => {
	let hitSize = Array(length).fill(null);
	const hit = (coordinate) => {
		hitSize[coordinate] = 'x';
	};

	const isSunk = () => {
		return hitSize.every(element => element === 'x');
	};

	return { id, shipName, length, isVertical, hit, isSunk };
};

export default ship;