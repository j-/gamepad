import React from 'react';
import Axis from './Axis';
import JoystickPosition from './JoystickPosition';

const Joystick = ({ x, y }) => (
	<div className="gamepad-joystick">
		<div className="gamepad-joystick-x">
			<Axis value={ x } />
		</div>
		<div className="gamepad-joystick-y">
			<Axis value={ y } />
		</div>
		<div className="gamepad-joystick-position">
			<JoystickPosition x={ x } y={ y } />
		</div>
	</div>
);

export default Joystick;
