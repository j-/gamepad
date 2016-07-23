import React, { PropTypes } from 'react';

const Gamepad = ({
	id,
	index,
}) => (
	<div className="gamepad">
		<strong>
			{ /* "1: " */ }
			<em>{ index + 1 }</em>{ ': ' }
			{ /* "Xbox 360 Controller ..." */ }
			{ id }
		</strong>
	</div>
);

Gamepad.propTypes = {
	// Identifies controller type
	id: PropTypes.string.isRequired,

	// Uniquely identifies this controller
	index: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Gamepad;
