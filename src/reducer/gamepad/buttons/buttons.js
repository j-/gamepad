import {
	GAMEPAD_UPDATE,
	GAMEPAD_CONNECT,
} from '../../types';

const DEFAULT_BUTTON_STATE = {
	pressed: false,
	value: 0,
};

export const button = (id, index) => (state = DEFAULT_BUTTON_STATE, action) => {
	if (!action.gamepad || action.gamepad.index !== id) {
		return state;
	}
	switch (action.type) {
		case GAMEPAD_UPDATE:
			return {
				...action.gamepad.buttons[index],
			};
		default:
			return state;
	}
};

export const buttons = (id) => (state = [], action) => {
	if (!action.gamepad || action.gamepad.index !== id) {
		return state;
	}
	switch (action.type) {
		case GAMEPAD_CONNECT:
			return action.gamepad.buttons.map((x, i) => (
				button(id, i)(x, action)
			));
		case GAMEPAD_UPDATE:
			return state.map((x, i) => (
				button(id, i)(x, action)
			));
		default:
			return state;
	}
};

export default buttons;
