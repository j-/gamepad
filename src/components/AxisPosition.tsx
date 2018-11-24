import * as React from 'react';
import './AxisPosition.css';

export interface Props {
	value: number;
}

export default class AxisPosition extends React.PureComponent<Props, void> {
	render () {
		const { value } = this.props;
		return (
			<div className="AxisPosition">
				<div
					className="AxisPosition-bar"
					style={{ transform: `scaleX(${value})` }}
				/>
				<div className="AxisPosition-value">
					{value}
				</div>
			</div>
		);
	}
}
