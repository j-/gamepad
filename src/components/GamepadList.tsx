import * as React from 'react';
import GamepadComponent from './Gamepad';
import './GamepadList.css';

export interface Props {
	gamepads: Gamepad[];
}

export default class GamepadList extends React.Component<Props, void> {
	render () {
		const { gamepads } = this.props;
		const children = gamepads.map((gamepad, i) => (
			<div className="GamepadList-item" key={i}>
				<GamepadComponent gamepad={gamepad} />
			</div>
		));
		return (
			<div className="GamepadList">
				{children}
			</div>
		);
	}
}
