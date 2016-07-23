import { combineReducers } from 'redux';
import axes from './axes';
import buttons from './buttons';

import {
	GAMEPADS_UPDATE,
} from '../types';

const field = (id, field) => (state = null, action) => {
	if (!action.gamepads || !(id in action.gamepads)) {
		return state;
	}
	switch (action.type) {
		case GAMEPADS_UPDATE:
			return action.gamepads[id][field];
		default:
			return state;
	}
};

export default (id) => combineReducers({
	axes: axes(id),
	buttons: buttons(id),

	id: field(id, 'id'),
	connected: field(id, 'connected'),
	index: field(id, 'index'),
	timestamp: field(id, 'timestamp'),
	mapping: field(id, 'mapping'),
});
