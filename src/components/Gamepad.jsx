import React from 'react';
import Axes from './Axes';

const Gamepad = ({ gamepad }) => (
	<div>
		<div>
			<strong>Index</strong><br />
			<span>{ JSON.stringify(gamepad.index) }</span>
		</div>
		<div>
			<strong>ID</strong><br />
			<span>{ JSON.stringify(gamepad.id) }</span>
		</div>
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
			<span>{ JSON.stringify(gamepad.buttons) }</span>
		</div>
		<div>
			<strong>Axes</strong><br />
			<Axes axes={ gamepad.axes } />
		</div>
	</div>
);

export default Gamepad;
