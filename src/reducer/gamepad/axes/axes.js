import {
	GAMEPAD_UPDATE,
	GAMEPAD_CONNECT,
} from '../../types';

export const axis = (id, index) => (state = 0, action) => {
	if (!action.gamepad || action.gamepad.index !== id) {
		return state;
	}
	switch (action.type) {
		case GAMEPAD_UPDATE:
			return action.gamepad.axes[index];
		default:
			return state;
	}
};

export const axes = (id) => (state = [], action) => {
	if (!action.gamepad || action.gamepad.index !== id) {
		return state;
	}
	switch (action.type) {
		case GAMEPAD_CONNECT:
			return [
				...action.gamepad.axes,
			];
		case GAMEPAD_UPDATE:
			return state.map((x, i) => (
				axis(id, i)(x, action)
			));
		default:
			return state;
	}
};

export default axes;
