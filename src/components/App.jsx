import React from 'react';
import GamepadListContainer from './GamepadListContainer';

const App = () => (
	<div>
		<h1>Gamepad</h1>
		<p>Connect a gamepad and press any button.</p>
		{ typeof navigator.getGamepads === 'function' && <GamepadListContainer /> }
	</div>
);

export default App;
