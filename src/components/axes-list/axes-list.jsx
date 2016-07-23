import React from 'react';
import Axis from '../axis';

const buildAxesList = (axes) => (
	axes.map((axis, i) => (
		<li className="gamepad-axis-item" key={ i }>
			<Axis value={ axis } />
		</li>
	))
);

const AxesList = ({ axes }) => (
	<ol className="gamepad-axes-list" start="0">
		{ buildAxesList(axes) }
	</ol>
);

export default AxesList;
