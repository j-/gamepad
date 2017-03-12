import React from 'react';

const Axis = ({ value }) => (
	<div className="gamepad-axis">
		<div className="gamepad-axis-bar" style={{
			transform: `scaleX(${value})`,
		}} />
		<div className="gamepad-axis-value">
			{ value }
		</div>
	</div>
);

export default Axis;
