import * as React from 'react';
import './GamepadId.css';

export interface Props {
	index: number;
	id: string;
}

export default class GamepadId extends React.Component<Props, void> {
	render () {
		const { index, id } = this.props;
		return (
			<h2 className="GamepadId" title={id}>
				{`#${index}: ${id}`}
			</h2>
		);
	}
}
