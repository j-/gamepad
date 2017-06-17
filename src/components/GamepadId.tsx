import * as React from 'react';
import './GamepadId.css';

export interface Props {
	id: string;
}

export default class GamepadId extends React.PureComponent<Props, void> {
	render () {
		const { id } = this.props;
		return (
			<h2 className="GamepadId" title={id}>
				{id}
			</h2>
		);
	}
}
