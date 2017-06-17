import * as React from 'react';
import './Axis.css';

export interface Props {
	value: number;
}

export default class Axis extends React.PureComponent<Props, void> {
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
