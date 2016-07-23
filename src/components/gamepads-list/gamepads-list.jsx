import React, { PropTypes } from 'react';
import Gamepad from '../gamepad';

const buildGamepad = (gamepad) => (
	<Gamepad
		gamepad={ gamepad }
		key={ gamepad.index }
	/>
);

const buildGamepadsList = (gamepads) => (
	gamepads.map((gamepad) => buildGamepad(gamepad))
);

const GamepadsList = ({ gamepads }) => (
	<div className="gamepads-list">
		{ buildGamepadsList(gamepads) }
	</div>
);

GamepadsList.propTypes = {
	gamepads: PropTypes.array.isRequired,
};

export default GamepadsList;
