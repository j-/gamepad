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
