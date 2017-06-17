import * as React from 'react';
import InputContainer from './InputContainer';
import GamepadId from './GamepadId';
import GamepadDetails from './GamepadDetails';
import Buttons from './Buttons';
import GamepadVisuals from './GamepadVisuals';
import './Gamepad.css';

export interface Props {
	gamepad: Gamepad;
}

export default class GamepadComponent extends React.Component<Props, void> {
	private lastTimestamp: number;

	constructor (props: Props) {
		super(props);
		this.lastTimestamp = props.gamepad.timestamp;
	}

	shouldComponentUpdate (nextProps: Props) {
		const { gamepad } = nextProps;
		const { timestamp } = gamepad;
		const shouldUpdate = this.lastTimestamp !== timestamp;
		this.lastTimestamp = timestamp;
		return shouldUpdate;
	}

	render () {
		const { gamepad } = this.props;
		return (
			<InputContainer>
				<div className="Gamepad">
					<div className="Gamepad-row">
						<GamepadId id={gamepad.id} />
					</div>
					<div className="Gamepad-row">
						<GamepadDetails gamepad={gamepad} />
					</div>
					<div className="Gamepad-row">
						<Buttons buttons={gamepad.buttons} />
					</div>
					<div className="Gamepad-row">
						<GamepadVisuals gamepad={gamepad} joystickSize={160} />
					</div>
				</div>
			</InputContainer>
		);
	}
}
