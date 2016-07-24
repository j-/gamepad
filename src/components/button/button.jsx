import React from 'react';
import Value from '../value';

import {
	pressed as pressedClassName,
	unpressed as unpressedClassName,
} from './styles';

const Button = ({ pressed, value }) => (
	<div className={ pressed ? pressedClassName : unpressedClassName }>
		<Value value={ value } places={ 8 } />
	</div>
);

export default Button;
