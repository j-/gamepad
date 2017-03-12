import React from 'react';

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

const Button = ({ button }) => (
	<div className="gamepad-button">
		<ButtonValue value={ button.value } />
		<ButtonPressed pressed={ button.pressed } />
	</div>
);

export default Button;
