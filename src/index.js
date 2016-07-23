import { createStore } from 'redux';
import reducer from './reducer';
import getGamepads from './get-gamepads';

import {
	gamepadsUpdate,
} from './reducer/actions';

const store = createStore(reducer);

const updater = () => {
	const gamepads = getGamepads();
	const action = gamepadsUpdate(gamepads);
	store.dispatch(action);
	requestAnimationFrame(updater);
};

updater();
