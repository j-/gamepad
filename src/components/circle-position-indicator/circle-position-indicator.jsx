import React, { Component, PropTypes } from 'react';

import {
	positionIndicatorInner,
	positionIndicatorOuter,
} from './styles';

class CirclePositionIndicator extends Component {
	componentDidMount () {
		const { size } = this.props;
		const canvas = document.createElement('canvas');
		canvas.width = size;
		canvas.height = size;
		const context = canvas.getContext('2d');
		this.canvas = canvas;
		this.context = context;
	}

	componentWillUnmount () {
		this.canvas = null;
		this.context = null;
	}

	calculateLeftPosition (x, size) {
		return (x + 1) * (size / 2);
	}

	calculateTopPosition (y, size) {
		return (y + 1) * (size / 2);
	}

	drawIndicator () {
		const { context } = this;
		const { size, indicatorSize, x, y } = this.props;
		// Calculate position of indicator
		const left = this.calculateLeftPosition(x, size);
		const top = this.calculateTopPosition(y, size);
		// Remove previous indicator
		context.clearRect(0, 0, size, size);
		// Draw indicator
		context.fillRect(
			left - (indicatorSize / 2),
			top - (indicatorSize / 2),
			indicatorSize,
			indicatorSize
		);
	}

	appendCanvas () {
		this.refs.outer.appendChild(this.canvas);
	}

	render () {
		const element = (
			<div className={ positionIndicatorOuter } ref="outer" />
		);
		if (this.canvas && this.refs.outer) {
			this.drawIndicator();
			this.appendCanvas();
		}
		return element;
	}
}

CirclePositionIndicator.propTypes = {
	size: PropTypes.number,
	indicatorSize: PropTypes.number,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
};

CirclePositionIndicator.defaultProps = {
	size: 100,
	indicatorSize: 4,
};

export default CirclePositionIndicator;
