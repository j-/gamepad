import React from 'react';
import Axis from './Axis';

const Joystick = ({ x, y }) => (
	<div className="gamepad-joystick">
		<div className="gamepad-joystick-x">
			<Axis value={ x } />
		</div>
		<div className="gamepad-joystick-y">
			<Axis value={ y } />
		</div>
	</div>
);

export default Joystick;
