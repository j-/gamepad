import React from 'react';
import Gamepad from './Gamepad';

const makeGamepad = (gamepad, i) => (
	<Gamepad gamepad={ gamepad } key={ i } />
);

const GamepadList = ({ gamepads }) => (
	<div className="gamepad-list">
		{ gamepads.map(makeGamepad) }
	</div>
);

export default GamepadList;
