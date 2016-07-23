let getGamepads;

if (typeof navigator.getGamepads === 'function') {
	getGamepads = () => navigator.getGamepads();
} else {
	getGamepads = () => {
		throw new Error('Unable to find any gamepads');
	};
}

export default getGamepads;
