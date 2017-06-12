import * as React from 'react';
import * as classNames from 'classnames';
import './Button.css';

const formatValue = (value: number) => (
	value.toFixed(4)
);

interface ButtonValueProps extends React.Props<void> {
	value: number;
}

const ButtonValue = (props: ButtonValueProps): React.ReactElement<ButtonValueProps> => (
	<div className="Button-value">
		{formatValue(props.value)}
	</div>
);

export interface Props extends React.Props<void> {
	index: number;
	button: GamepadButton;
}

export default class Button extends React.Component<Props, void> {
	render () {
		const { index, button } = this.props;
		const { value, pressed } = button;
		const className = classNames('Button', {
			'Button-pressed': pressed,
		});
		const transform = `scaleY(${value})`;
		return (
			<div className={className}>
				<div className="Button-graph">
					<div className="Button-graph-bar" style={{ transform }} />
				</div>
				<div className="Button-content">
					<em>{'#' + index}</em>
					<ButtonValue value={value} />
				</div>
			</div>
		);
	}
}
