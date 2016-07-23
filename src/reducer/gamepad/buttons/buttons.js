import {
	GAMEPADS_UPDATE,
} from '../../types';

const DEFAULT_BUTTON_STATE = {
	pressed: false,
	value: 0,
};

const DEFAULT_BUTTONS_STATE = [
	DEFAULT_BUTTON_STATE, // 0x0
	DEFAULT_BUTTON_STATE, // 0x1
	DEFAULT_BUTTON_STATE, // 0x2
	DEFAULT_BUTTON_STATE, // 0x3
	DEFAULT_BUTTON_STATE, // 0x4
	DEFAULT_BUTTON_STATE, // 0x5
	DEFAULT_BUTTON_STATE, // 0x6
	DEFAULT_BUTTON_STATE, // 0x7
	DEFAULT_BUTTON_STATE, // 0x8
	DEFAULT_BUTTON_STATE, // 0x9
	DEFAULT_BUTTON_STATE, // 0xa
	DEFAULT_BUTTON_STATE, // 0xb
	DEFAULT_BUTTON_STATE, // 0xc
	DEFAULT_BUTTON_STATE, // 0xd
	DEFAULT_BUTTON_STATE, // 0xe
	DEFAULT_BUTTON_STATE, // 0xf
];

export const button = (id, index) => (state = DEFAULT_BUTTON_STATE, action) => {
	if (!action.gamepads || !(id in action.gamepads)) {
		return state;
	}
	switch (action.type) {
		case GAMEPADS_UPDATE:
			return {
				...action.gamepads[id].buttons[index],
			};
		default:
			return state;
	}
};

export const buttons = (id) => (state = DEFAULT_BUTTONS_STATE, action) => {
	if (!action.gamepads || !(id in action.gamepads)) {
		return state;
	}
	switch (action.type) {
		case GAMEPADS_UPDATE:
			return state.map((x, i) => (
				button(id, i)(x, action)
			));
		default:
			return state;
	}
};

export default buttons;
