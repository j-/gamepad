import React from 'react';
import Joystick from './Joystick';

const Axes = ({ axes }) => (
	<div>
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
