import * as React from 'react';
import Joystick from './Joystick';
import POVHat from './POVHat';
import './GamepadVisuals.css';

export interface Props {
	gamepad: Gamepad;
}

export default class GamepadVisuals extends React.Component<Props, void> {
	render () {
		const { gamepad } = this.props;
		const { axes, buttons } = gamepad;
		return (
			<div className="GamepadVisuals">
				<div className="GamepadVisuals-item" title="Left joystick">
					<Joystick
						x={axes[0]}
						y={axes[1]}
					/>
				</div>
				<div className="GamepadVisuals-item" title="Right joystick">
					<Joystick
						x={axes[2]}
						y={axes[3]}
					/>
				</div>
				<div className="GamepadVisuals-item" title="Point of View Hat">
					<POVHat
						pressedN={buttons[0xc].pressed}
						pressedS={buttons[0xd].pressed}
						pressedW={buttons[0xe].pressed}
						pressedE={buttons[0xf].pressed}
					/>
				</div>
			</div>
		);
	}
}
