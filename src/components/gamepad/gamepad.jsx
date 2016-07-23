import React, { PropTypes } from 'react';
import ConnectionStatus from '../connection-status';

const Gamepad = ({
	id,
	index,
	connected,
}) => (
	<div className="gamepad">
		<strong>
			{ /* "1: " */ }
			<em>{ index + 1 }</em>{ ': ' }
			{ /* "Xbox 360 Controller ..." */ }
			{ id }{ ' ' }
			{ /* "Connected" */ }
			<ConnectionStatus connected={ connected } />
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

	// Whether or not this controller is connected
	connected: PropTypes.bool,
};

Gamepad.defaultProps = {
	connected: null,
};

export default Gamepad;
