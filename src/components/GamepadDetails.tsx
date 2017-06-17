import * as React from 'react';

export interface Props extends Partial<Gamepad> {

}

export default class GamepadDetails extends React.PureComponent<Props, void> {
	render () {
		const { index, mapping, connected, timestamp } = this.props;
		return (
			<div className="GamepadDetails">
				<strong>Index</strong>:&nbsp;
				<span>{index}</span>,&nbsp;
				<strong>Mapping</strong>:&nbsp;
				<span>{mapping || <em>Unknown</em>}</span>,&nbsp;
				<strong>Connected</strong>:&nbsp;
				<span>{connected ? 'yes' : 'no'}</span>,&nbsp;
				<strong>Timestamp</strong>:&nbsp;
				<span>{timestamp}</span>
			</div>
		);
	}
}
