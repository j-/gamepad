import * as React from 'react';
import Axis from './Axis';
import JoystickPosition from './JoystickPosition';
import './Joystick.css';

export interface Props {
	x: number;
	y: number;
	width: number;
	height: number;
}

export default class Joystick extends React.PureComponent<Props, void> {
	render () {
		const { x, y, width, height } = this.props;
		return (
			<div className="Joystick">
				<div className="Joystick-x">
					<Axis value={x} />
				</div>
				<div className="Joystick-y">
					<Axis value={y} />
				</div>
				<div className="Joystick-position">
					<JoystickPosition
						x={x}
						y={y}
						width={width}
						height={height}
					/>
				</div>
			</div>
		);
	}
}
