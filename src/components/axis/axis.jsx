import React from 'react';
import Value from '../value';

const Axis = ({ value }) => (
	<div className="gamepad-axis">
		<Value value={ value } places={ 8 } />
	</div>
);

export default Axis;
