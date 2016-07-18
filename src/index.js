import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

window.addEventListener('gamepadconnected', (e) => {
	console.group('Gamepad connected');
	console.log(e);
	console.groupEnd();
});
