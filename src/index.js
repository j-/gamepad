window.addEventListener('gamepadconnected', (e) => {
	console.group('Gamepad connected');
	console.log(e);
	console.groupEnd();
});
