import React, { PropTypes } from 'react';
import ConnectionStatus from '../connection-status';
import AxesList from '../axes-list';
import DualCirclePositionIndicators from '../dual-circle-position-indicators';
import ButtonsList from '../buttons-list';

const Gamepad = ({
	id,
	index,
	connected,
	timestamp,
	mapping,
	axes,
	buttons,
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

		<DualCirclePositionIndicators
			x1={ axes[0] }
			y1={ axes[1] }
			x2={ axes[2] }
			y2={ axes[3] }
		/>

		<ButtonsList buttons={ buttons } />
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

	// Input data
	buttons: PropTypes.array.isRequired,
};

Gamepad.defaultProps = {
	connected: null,
	timestamp: 0,
	mapping: 'unknown',
};

export default Gamepad;
