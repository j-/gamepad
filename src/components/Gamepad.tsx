import * as React from 'react';
import InputContainer from './InputContainer';
import GamepadId from './GamepadId';
import Buttons from './Buttons';
import GamepadVisuals from './GamepadVisuals';
import './Gamepad.css';

export interface Props extends React.Props<void> {
	gamepad: Gamepad;
}

export default class GamepadComponent extends React.Component<Props, void> {
	render () {
		const { gamepad } = this.props;
		return (
			<InputContainer>
				<div className="Gamepad">
					<div className="Gamepad-row">
						<GamepadId index={gamepad.index} id={gamepad.id} />
					</div>
					<div className="Gamepad-row">
						<strong>Mapping</strong>:&nbsp;
						<span>{gamepad.mapping}</span>,&nbsp;
						<strong>Connected</strong>:&nbsp;
						<span>{gamepad.connected ? 'Yes' : 'No'}</span>
					</div>
					<div className="Gamepad-row">
						<Buttons buttons={gamepad.buttons} />
					</div>
					<div className="Gamepad-row">
						<GamepadVisuals gamepad={gamepad} />
					</div>
				</div>
			</InputContainer>
		);
	}
}
