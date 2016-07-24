import React from 'react';
import GamepadsList from '../gamepads-list';

const Application = () => (
	<div className="gamepads-application">
		<h1>Gamepad</h1>
		<p>Connect gamepad and press any button to activate.</p>
		<GamepadsList />
	</div>
);

export default Application;
