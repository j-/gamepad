import { createStore } from 'redux';
import reducer from './reducer';

import {
	gamepadConnected,
	gamepadDisconnected,
	gamepadUpdate,
} from './reducer/actions';

const store = createStore(reducer);

window.addEventListener('gamepadconnected', function (e) {
	let gamepad = e.gamepad;

	console.info(
		'Gamepad connected',
		`${gamepad.id} (${gamepad.index})`
	);

	// Notify store that a new gamepad has been connected
	store.dispatch(
		gamepadConnected(gamepad)
	);

	// Start watching gamepad for changes
	let timer = setInterval(() => {
		store.dispatch(
			gamepadUpdate(gamepad)
		);
	}, 10);

	// Start watching gamepad for a disconnection
	window.addEventListener('gamepaddisconnected', function handler (e) {
		if (e.gamepad.index !== gamepad.index) {
			// Ignore other gamepads being disconnected
		}

		console.info(
			'Gamepad disconnected',
			`${gamepad.id} (${gamepad.index})`
		);

		// Notify the store that this gamepad was disconnected
		store.dispatch(
			gamepadDisconnected(gamepad)
		);

		// This gamepad was disconnected. Clean up.
		clearInterval(timer);
		timer = null;
		gamepad = null;
		window.removeEventListener('gamepaddisconnected', handler);
	});
});
