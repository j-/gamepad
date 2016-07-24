import React from 'react';

import {
	pressed as pressedClassName,
	unpressed as unpressedClassName,
} from './styles';

const Button = ({ pressed, value }) => (
	<div className={ pressed ? pressedClassName : unpressedClassName }>
		{ value }
	</div>
);

export default Button;
