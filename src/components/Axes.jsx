import React from 'react';
import Joystick from './Joystick';

const Axes = ({ axes }) => (
	<div className="gamepad-joysticks">
		<Joystick
			x={ axes[0] }
			y={ axes[1] }
		/>
		<Joystick
			x={ axes[2] }
			y={ axes[3] }
		/>
	</div>
);

export default Axes;
