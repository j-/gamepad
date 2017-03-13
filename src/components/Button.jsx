import React from 'react';
import classNames from 'classnames';

const formatValue = (value) => (
	value.toFixed(4)
);

const ButtonValue = ({ value }) => (
	<div className="gamepad-button-value">
		{ formatValue(value) }
	</div>
);

const Button = ({ index, button }) => (
	<div className={ classNames('gamepad-button', {
		'gamepad-button-pressed': button.pressed,
	}) }>
		<em>#{ index }</em>
		<ButtonValue value={ button.value } />
	</div>
);

export default Button;
