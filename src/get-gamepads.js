let getGamepads;

if (typeof navigator.getGamepads === 'function') {
	getGamepads = () => (
		// Convert iterable to array
		[...navigator.getGamepads()]
			// Gamepads may be `undefined` despite `length` of iterable
			.filter(Boolean)
	);
} else {
	getGamepads = () => {
		throw new Error('Unable to find any gamepads');
	};
}

export default getGamepads;
