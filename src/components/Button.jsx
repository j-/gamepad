import React from 'react';
import classNames from 'classnames';

const ButtonValue = ({ value }) => (
	<div>
		{ value }
	</div>
);

const ButtonPressed = ({ pressed }) => (
	<div>
		{ pressed ? 'Yes' : 'No' }
	</div>
);

const Button = ({ index, button }) => (
	<div className={ classNames('gamepad-button', {
		'gamepad-button-pressed': button.pressed,
	}) }>
		<em>Button { index }</em>
		<ButtonValue value={ button.value } />
		<ButtonPressed pressed={ button.pressed } />
	</div>
);

export default Button;
