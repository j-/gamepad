import * as React from 'react';
import Joystick from './Joystick';
import POVHat from './POVHat';
import './GamepadVisuals.css';

export interface Props extends React.Props<void> {
	gamepad: Gamepad;
}

export default class GamepadVisuals extends React.Component<Props, void> {
	render () {
		const { gamepad } = this.props;
		return (
			<div className="GamepadVisuals">
				<div className="GamepadVisuals-item" title="Left joystick">
					<Joystick
						x={gamepad.axes[0]}
						y={gamepad.axes[1]}
					/>
				</div>
				<div className="GamepadVisuals-item" title="Right joystick">
					<Joystick
						x={gamepad.axes[2]}
						y={gamepad.axes[3]}
					/>
				</div>
				<div className="GamepadVisuals-item" title="Point of View Hat">
					<POVHat
						pressedN={gamepad.buttons[0xc].pressed}
						pressedS={gamepad.buttons[0xd].pressed}
						pressedW={gamepad.buttons[0xe].pressed}
						pressedE={gamepad.buttons[0xf].pressed}
					/>
				</div>
			</div>
		);
	}
}
