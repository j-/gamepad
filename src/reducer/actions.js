import {
	GAMEPAD_CONNECT,
	GAMEPAD_DISCONNECT,
	GAMEPAD_UPDATE,
} from './types';

export const gamepadConnected = (gamepad) => ({
	type: GAMEPAD_CONNECT,
	gamepad,
});

export const gamepadDisconnected = (gamepad) => ({
	type: GAMEPAD_DISCONNECT,
	gamepad,
});

export const gamepadUpdate = (gamepad) => ({
	type: GAMEPAD_UPDATE,
	gamepad,
});
