/* eslint-disable no-undef */
import ship from '../code/ship.js';

test('create a carrier of length 5 ', () => {
	expect(ship(1, 'carrier' , 5).length).toBe(5);
});

test('check hit and isSunk ', () => {
	const firstShip = ship(1, 'carrier' , 5);
	firstShip.hit(0);
	firstShip.hit(1);
	firstShip.hit(2);
	firstShip.hit(3);
	firstShip.hit(4);
	expect(firstShip.isSunk()).toBeTruthy();
});
