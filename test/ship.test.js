/* eslint-disable no-undef */
import ship from '../code/ship.js';

test('create a carrier of length 5 ', () => {
	expect(ship(1, 'carrier' , 5).length).toBe(5);
});

test('check hit and isSunk ', () => {
	const firstShip = ship(1, 'carrier' , 5);
	firstShip.hit();
	firstShip.hit();
	firstShip.hit();
	firstShip.hit();
	firstShip.hit();
	expect(firstShip.isSunk()).toBeTruthy();
});
