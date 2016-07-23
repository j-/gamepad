let getGamepads;

if (typeof navigator.getGamepads === 'function') {
	getGamepads = () => (
		// Convert iterable to array
		[...navigator.getGamepads()]
			// Gamepads may be `undefined` despite `length` of iterable
			.filter(Boolean)
	);
} else {
	getGamepads = () => [];
}

export default getGamepads;
