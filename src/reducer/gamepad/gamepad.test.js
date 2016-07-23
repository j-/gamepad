import test from 'ava';
import { createStore } from 'redux';
import reducer from './';

import {
	gamepadConnected,
} from '../actions';

test('Can use reducer to create store', (t) => {
	t.plan(1);
	const store = createStore(reducer);
	t.truthy(store, 'Store was created');
});

test('Can create a new gamepad', (t) => {
	t.plan(1);
	const gamepad = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 0,
		connected: true,
		timestamp: 0,
		mapping: 'standard',
		axes: [0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
		buttons: [],
	};
	const action = gamepadConnected(gamepad);
	const actual = reducer(0)(undefined, action);
	const expected = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 0,
		connected: true,
		timestamp: 0,
		mapping: 'standard',
		axes: [0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
		buttons: [],
	};
	t.deepEqual(
		actual,
		expected,
		'Gamepad matches expected shape'
	);
});
