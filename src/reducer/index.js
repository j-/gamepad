import reducer from './gamepad';

import {
	GAMEPADS_UPDATE,
} from './types';

export default (state = {}, action) => {
	switch (action.type) {
		case GAMEPADS_UPDATE:
			const result = {};

			[...action.gamepads].forEach((gamepad) => {
				const index = gamepad.index;
				result[index] = reducer(index)(
					state[index],
					action
				);
			});

			return result;
		default:
			return state;
	}
};

/**
 * Get all gamepads from the store.
 * @param {Object} state Current state
 * @returns {Object[]} An array of gamepad objects sorted by ID
 */
export const getAllGamepads = (state) => (
	Object.keys(state).sort().map((key) => state[key])
);
