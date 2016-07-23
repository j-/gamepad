import React from 'react';
import Axis from '../axis';

const buildAxis = (axis, index) => (
	<Axis
		value={ axis }
		key={ index }
	/>
);

const buildAxesList = (axes) => (
	axes.map((axis, i) => buildAxis(axis, i))
);

const AxesList = ({ axes }) => (
	<div className="gamepad-axes-list">
		{ buildAxesList(axes) }
	</div>
);

export default AxesList;
