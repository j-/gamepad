import * as React from 'react';

export interface Props {
	gamepad: Gamepad;
}

export default class GamepadDetails extends React.Component<Props, void> {
	render () {
		const { gamepad } = this.props;
		const { index, mapping, connected } = gamepad;
		return (
			<div className="GamepadDetails">
				<strong>Index</strong>:&nbsp;
				<span>{index}</span>,&nbsp;
				<strong>Mapping</strong>:&nbsp;
				<span>{mapping || <em>Unknown</em>}</span>,&nbsp;
				<strong>Connected</strong>:&nbsp;
				<span>{connected ? 'yes' : 'no'}</span>
			</div>
		);
	}
}
