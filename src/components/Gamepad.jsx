import React from 'react';
import Axes from './Axes';
import Buttons from './Buttons';
import POVHat from './POVHat';

const Gamepad = ({ gamepad }) => (
	<div>
		<h2>Gamepad { gamepad.index }: { gamepad.id }</h2>
		<div>
			<strong>Mapping</strong><br />
			<span>{ JSON.stringify(gamepad.mapping) }</span>
		</div>
		<div>
			<strong>Connected</strong><br />
			<span>{ JSON.stringify(gamepad.connected) }</span>
		</div>
		<div>
			<strong>Buttons</strong><br />
			<Buttons buttons={ gamepad.buttons } />
		</div>
		<div>
			<strong>Axes</strong><br />
			<Axes axes={ gamepad.axes } />
		</div>
		<div>
			<strong>Point of View Hat</strong><br />
			<POVHat buttons={ gamepad.buttons } />
		</div>
	</div>
);

export default Gamepad;
