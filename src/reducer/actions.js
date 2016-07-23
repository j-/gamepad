import {
	GAMEPADS_UPDATE,
} from './types';

export const gamepadsUpdate = (gamepads) => ({
	type: GAMEPADS_UPDATE,
	gamepads,
});
