import React, { PropTypes } from 'react';

import {
	positionIndicatorInner,
	positionIndicatorOuter,
} from './styles';

const Position = ({ x, y }) => (
	<div
		className={ positionIndicatorInner }
		style={{
			left: ((x + 1) * 50) + '%',
			top: ((y + 1) * 50) + '%',
		}}
	/>
);

const CirclePositionIndicator = ({ x, y }) => (
	<div className={ positionIndicatorOuter }>
		<Position x={ x } y={ y } />
	</div>
);

CirclePositionIndicator.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
};

export default CirclePositionIndicator;
