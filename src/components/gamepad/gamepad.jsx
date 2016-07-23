import React, { PropTypes } from 'react';
import ConnectionStatus from '../connection-status';

const Gamepad = ({
	id,
	index,
	connected,
	timestamp,
	mapping,
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
		<br />

		<label>Timestamp: </label>
		<span>{ timestamp }</span>
		<br />

		<label>Mapping: </label>
		<span>{ mapping }</span>
		<br />
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

	// Last time the data for this gamepad was updated -- relative to the
	// `navigationStart` attribute of the `PerformanceTiming` interface
	timestamp: PropTypes.number,

	// Really only ever 'standard'
	mapping: PropTypes.string,
};

Gamepad.defaultProps = {
	connected: null,
	timestamp: 0,
	mapping: 'unknown',
};

export default Gamepad;
