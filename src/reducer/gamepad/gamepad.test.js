import test from 'ava';
import { createStore } from 'redux';
import reducer from './';

import {
	gamepadConnected,
	gamepadUpdate,
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

test('Can update a gamepad', (t) => {
	t.plan(1);
	const initial = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 0,
		connected: true,
		timestamp: 0,
		mapping: 'standard',
		axes: [0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
		buttons: [],
	};
	const updated = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 0,
		connected: true,
		timestamp: 100,
		mapping: 'standard',
		axes: [0.1525878906250000, -0.1525878906250000, 0.1525878906250000, -0.1525878906250000],
		buttons: [],
	};
	const action = gamepadUpdate(updated);
	t.deepEqual(
		reducer(0)(initial, action),
		{
			id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
			index: 0,
			connected: true,
			timestamp: 100,
			mapping: 'standard',
			axes: [0.1525878906250000, -0.1525878906250000, 0.1525878906250000, -0.1525878906250000],
			buttons: [],
		},
		'Gamepad matches expected shape'
	);
});

test('Ignores updates for other gamepads', (t) => {
	t.plan(1);
	const initial = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 0,
		connected: true,
		timestamp: 0,
		mapping: 'standard',
		axes: [0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
		buttons: [],
	};
	const updated = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 1, // Different index
		connected: true,
		timestamp: 100,
		mapping: 'standard',
		axes: [0.1525878906250000, -0.1525878906250000, 0.1525878906250000, -0.1525878906250000],
		buttons: [],
	};
	const action = gamepadUpdate(updated);
	t.deepEqual(
		reducer(0)(initial, action),
		{
			id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
			index: 0,
			connected: true,
			timestamp: 0,
			mapping: 'standard',
			axes: [0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
			buttons: [],
		},
		'Gamepad shape has not changed'
	);
});
