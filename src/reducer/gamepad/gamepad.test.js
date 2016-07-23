import test from 'ava';
import { createStore } from 'redux';
import reducer from './';

import {
	gamepadsUpdate,
} from '../actions';

test('Can use reducer to create store', (t) => {
	t.plan(1);
	const store = createStore(reducer);
	t.truthy(store, 'Store was created');
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
		buttons: [
			{ pressed: false, value: 0 },
		],
	};

	const action = gamepadsUpdate({
		0: {
			id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
			index: 0,
			connected: true,
			timestamp: 100,
			mapping: 'standard',
			axes: [0.1525878906250000, -0.1525878906250000, 0.1525878906250000, -0.1525878906250000],
			buttons: [
				{ pressed: true, value: 1 },
			],
		}
	});

	const actual = reducer(0)(initial, action);

	t.deepEqual(
		actual,
		{
			id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
			index: 0,
			connected: true,
			timestamp: 100,
			mapping: 'standard',
			axes: [0.1525878906250000, -0.1525878906250000, 0.1525878906250000, -0.1525878906250000],
			buttons: [
				{ pressed: true, value: 1 },
			],
		},
		'Gamepad matches expected shape'
	);
});

test('Ignores updates for other gamepads', (t) => {
	t.plan(7);

	const initial = {
		id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		index: 0,
		connected: true,
		timestamp: 0,
		mapping: 'standard',
		axes: [0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
		buttons: [
			{ pressed: false, value: 0 },
		],
	};

	const action = gamepadsUpdate({
		1: {
			id: 'Another Xbox 360 Controller (XInput STANDARD GAMEPAD)',
			index: 1, // Different index
			connected: true,
			timestamp: 100,
			mapping: 'standard',
			axes: [0.1525878906250000, -0.1525878906250000, 0.1525878906250000, -0.1525878906250000],
			buttons: [
				{ pressed: true, value: 1 },
			],
		}
	});

	const actual = reducer(0)(initial, action);

	t.is(
		actual.id,
		'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
		'`id` field has not changed'
	);
	t.is(
		actual.index,
		0,
		'`index` field has not changed'
	);
	t.is(
		actual.connected,
		true,
		'`connected` field has not changed'
	);
	t.is(
		actual.timestamp,
		0,
		'`timestamp` field has not changed'
	);
	t.is(
		actual.mapping,
		'standard',
		'`mapping` field has not changed'
	);
	t.deepEqual(
		actual.axes,
		[0.0000152587890625, -0.0000152587890625, 0.0000152587890625, -0.0000152587890625],
		'`axes` field has not changed'
	);
	t.deepEqual(
		actual.buttons,
		[{ pressed: false, value: 0 }],
		'`buttons` field has not changed'
	);
});
