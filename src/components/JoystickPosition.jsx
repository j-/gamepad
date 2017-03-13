import React, { Component } from 'react';

const WIDTH = 160;
const HEIGHT = 160;

const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;

export default class JoystickPosition extends Component {
	drawPosition (props, oldProps) {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.save();
		ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		ctx.translate(HALF_WIDTH, HALF_HEIGHT);
		ctx.beginPath();
		ctx.moveTo(oldProps.x * HALF_WIDTH, oldProps.y * HALF_HEIGHT);
		ctx.lineTo(props.x * HALF_WIDTH, props.y * HALF_HEIGHT);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}

	componentDidMount () {
		this.drawPosition(this.props, { x: 0, y: 0 });
	}

	componentWillReceiveProps (nextProps) {
		this.drawPosition(nextProps, this.props);
	}

	render () {
		return (
			<div className="position-container">
				<canvas
					ref="canvas"
					className="position-canvas"
					width={ WIDTH }
					height= { HEIGHT }
				/>
			</div>
		);
	}
}
