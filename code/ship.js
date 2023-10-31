const ship = (id, shipName, length, isVertical = false) => {
	let hitSize = Array(length).fill(null);
	const hit = ()=> {
		const index = hitSize.indexOf(null); 
		if (index !== -1) {
			hitSize[index] = 'x'; 
			console.log(shipName,hitSize ,'isSunk',isSunk()); 
		} else {
			console.log(shipName,'All slots are filled.'); 
		}
	};

	const isSunk = () => {
		return hitSize.every(element => element === 'x');
	};

	return { id, shipName, length, isVertical, hit, isSunk };
};

export default ship;