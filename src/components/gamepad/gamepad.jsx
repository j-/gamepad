import React, { PropTypes } from 'react';
import ConnectionStatus from '../connection-status';
import AxesList from '../axes-list';
import CirclePositionIndicator from '../circle-position-indicator';

const Gamepad = ({
	id,
	index,
	connected,
	timestamp,
	mapping,
	axes,
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

		<AxesList axes={ axes } />

		<CirclePositionIndicator x={ axes[0] } y={ axes[1] } />

		<CirclePositionIndicator x={ axes[2] } y={ axes[3] } />
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

	// Gyro or other rotational data
	axes: PropTypes.array.isRequired,
};

Gamepad.defaultProps = {
	connected: null,
	timestamp: 0,
	mapping: 'unknown',
};

export default Gamepad;
