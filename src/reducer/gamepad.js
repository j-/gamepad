import { combineReducers } from 'redux';

import {
	GAMEPAD_CONNECT,
	GAMEPAD_DISCONNECT,
	GAMEPAD_UPDATE,
} from './types';

const field = (id, field) => (state = null, action) => {
	if (!action.gamepad || action.gamepad.index !== id) {
		return state;
	}
	switch (action.type) {
		case GAMEPAD_CONNECT:
		case GAMEPAD_DISCONNECT:
		case GAMEPAD_UPDATE:
			return action.gamepad[field];
		default:
			return state;
	}
};

const connected = (id) => (state = false, action) => {
	if (!action.gamepad || action.gamepad.index !== id) {
		return state;
	}
	switch (action.type) {
		case GAMEPAD_CONNECT:
			return true;
		case GAMEPAD_DISCONNECT:
			return false;
		default:
			return state;
	}
};

const axis = (id) => (index) => (state = 0, action) => {
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

const axes = (id) => (state = [], action) => {
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
				axis(id)(i)(x, action)
			));
		default:
			return state;
	}
};

export default (id) => combineReducers({
	connected: connected(id),
	axes: axes(id),

	id: field(id, 'id'),
	index: field(id, 'index'),
	timestamp: field(id, 'timestamp'),
	mapping: field(id, 'mapping'),
	buttons: field(id, 'buttons'),
});
