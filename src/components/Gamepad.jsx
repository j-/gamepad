import React from 'react';
import Joystick from './Joystick';
import Buttons from './Buttons';
import POVHat from './POVHat';

const Gamepad = ({ gamepad }) => (
	<div className="gamepad">
		<h2>#{ gamepad.index }: { gamepad.id }</h2>
		<div>
			<strong>Mapping</strong>:&nbsp;
			<span>{ gamepad.mapping }</span>
		</div>
		<div>
			<strong>Connected</strong>:&nbsp;
			<span>{ String(gamepad.connected) }</span>
		</div>
		<div>
			<Buttons buttons={ gamepad.buttons } />
		</div>
		<div className="gamepad-visuals">
			<div className="gamepad-visuals-item" title="Left joystick">
				<Joystick
					x={ gamepad.axes[0] }
					y={ gamepad.axes[1] }
				/>
			</div>
			<div className="gamepad-visuals-item" title="Right joystick">
				<Joystick
					x={ gamepad.axes[2] }
					y={ gamepad.axes[3] }
				/>
			</div>
			<div className="gamepad-visuals-item" title="Point of View Hat">
				<POVHat
					buttons={ gamepad.buttons }
				/>
			</div>
		</div>
	</div>
);

export default Gamepad;
