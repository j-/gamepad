import React, { Component } from 'react';

const WIDTH = 160;
const HEIGHT = 160;

const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;

export default class JoystickPosition extends Component {
	drawPosition (props) {
		const { x, y } = props;
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.save();
		ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		ctx.fillStyle = 'black';
		ctx.translate(HALF_WIDTH, HALF_HEIGHT);
		ctx.fillRect(x * HALF_WIDTH - 1, y * HALF_HEIGHT - 1, 2, 2);
		ctx.restore();
	}

	componentDidMount () {
		this.drawPosition(this.props);
	}

	componentWillReceiveProps (props) {
		this.drawPosition(props);
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
