import React from 'react';
import CirclePositionIndicator from '../circle-position-indicator';

import {
	dualCirclePositionIndicators,
	leftCirclePositionIndicator,
	rightCirclePositionIndicator,
} from './styles';

const DualCirclePositionIndicators = ({ x1, y1, x2, y2 }) => (
	<div className={ dualCirclePositionIndicators }>
		<div className={ leftCirclePositionIndicator }>
			<CirclePositionIndicator x={ x1 } y={ y1 } />
		</div>
		<div className={ rightCirclePositionIndicator }>
			<CirclePositionIndicator x={ x2 } y={ y2 } />
		</div>
	</div>
);

export default DualCirclePositionIndicators;
