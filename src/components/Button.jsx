import React from 'react';
import classNames from 'classnames';

const ButtonValue = ({ value }) => (
	<div>
		{ value }
	</div>
);

const Button = ({ index, button }) => (
	<div className={ classNames('gamepad-button', {
		'gamepad-button-pressed': button.pressed,
	}) }>
		<em>Button { index }</em>
		<ButtonValue value={ button.value } />
	</div>
);

export default Button;
