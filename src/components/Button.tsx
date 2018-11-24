import * as React from 'react';
import * as classNames from 'classnames';
import './Button.css';

const formatValue = (value: number) => (
	value.toFixed(4)
);

export interface Props {
	index: number;
	value: number;
	pressed: boolean;
}

export default class Button extends React.PureComponent<Props, void> {
	render () {
		const { index, value, pressed } = this.props;
		const className = classNames('Button', {
			'Button-pressed': pressed,
		});
		const transform = `scaleX(${value})`;
		return (
			<div className={className}>
				<div className="Button-graph">
					<div className="Button-graph-bar" style={{ transform }} />
				</div>
				<div className="Button-content">
					<div className="Button-label">{'#' + index}</div>
					<div className="Button-value">{formatValue(value)}</div>
				</div>
			</div>
		);
	}
}
