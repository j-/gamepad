import React from 'react';
import CirclePositionIndicator from '../circle-position-indicator';

import {
	dualCirclePositionIndicators,
} from './styles';

const DualCirclePositionIndicators = ({ x1, y1, x2, y2 }) => (
	<div className={ dualCirclePositionIndicators }>
		<CirclePositionIndicator x={ x1 } y={ y1 } />
		<CirclePositionIndicator x={ x2 } y={ y2 } />
	</div>
);

export default DualCirclePositionIndicators;
