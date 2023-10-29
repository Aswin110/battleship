import ship from './ship.js';

test('create a carrier of length 5 ', () => {
	expect(ship(1, 'carrier' , 5).length).toBe(5);
});
