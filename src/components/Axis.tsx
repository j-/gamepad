import * as React from 'react';
import './Axis.css';

export interface Props extends React.Props<void> {
	value: number;
}

export default class Axis extends React.Component<Props, void> {
	render () {
		const { value } = this.props;
		return (
			<div className="Axis">
				<div
					className="Axis-bar"
					style={{ transform: `scaleX(${value})` }}
				/>
				<div className="Axis-value">
					{value}
				</div>
			</div>
		);
	}
}
