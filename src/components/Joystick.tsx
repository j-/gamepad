import * as React from 'react';
import Axis from './Axis';
import JoystickPosition from './JoystickPosition';
import './Joystick.css';

export interface Props extends React.Props<void> {
	x: number;
	y: number;
}

export default class Joystick extends React.Component<Props, void> {
	render () {
		const { x, y } = this.props;
		return (
			<div className="Joystick">
				<div className="Joystick-x">
					<Axis value={x} />
				</div>
				<div className="Joystick-y">
					<Axis value={y} />
				</div>
				<div className="Joystick-position">
					<JoystickPosition x={x} y={y} />
				</div>
			</div>
		);
	}
}
