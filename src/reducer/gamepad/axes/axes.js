import {
	GAMEPADS_UPDATE,
} from '../../types';

const DEFAULT_AXIS_STATE = 0;

const DEFAULT_AXES_STATE = [
	DEFAULT_AXIS_STATE, // 0x0
	DEFAULT_AXIS_STATE, // 0x1
	DEFAULT_AXIS_STATE, // 0x2
	DEFAULT_AXIS_STATE, // 0x3
];

export const axis = (id, index) => (state = DEFAULT_AXIS_STATE, action) => {
	if (!action.gamepads || !(id in action.gamepads)) {
		return state;
	}
	switch (action.type) {
		case GAMEPADS_UPDATE:
			return action.gamepads[id].axes[index];
		default:
			return state;
	}
};

export const axes = (id) => (state = DEFAULT_AXES_STATE, action) => {
	if (!action.gamepads || !(id in action.gamepads)) {
		return state;
	}
	switch (action.type) {
		case GAMEPADS_UPDATE:
			return state.map((x, i) => (
				axis(id, i)(x, action)
			));
		default:
			return state;
	}
};

export default axes;
