import React from 'react';
import Gamepad from './Gamepad';

const makeGamepad = (gamepad, i) => (
	<div key={ i }>
		<Gamepad gamepad={ gamepad } />
	</div>
);

const GamepadList = ({ gamepads }) => (
	<div className="gamepad-list">
		{ gamepads.map(makeGamepad) }
	</div>
);

export default GamepadList;
