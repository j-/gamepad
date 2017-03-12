import React from 'react';
import Axis from './Axis';

const Joystick = ({ x, y }) => (
	<div>
		<Axis value={ x } />
		<Axis value={ y } />
	</div>
);

export default Joystick;
