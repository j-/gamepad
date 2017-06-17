import * as React from 'react';
import './JoystickPosition.css';

const WIDTH = 160;
const HEIGHT = 160;

const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;

export interface Props {
	x: number;
	y: number;
}

export default class JoystickPosition extends React.PureComponent<Props, void> {
	private canvas: HTMLCanvasElement;

	componentDidMount () {
		this.drawPosition(this.props, { x: 0, y: 0 });
	}

	componentWillReceiveProps (nextProps: Props) {
		this.drawPosition(nextProps, this.props);
	}

	render () {
		return (
			<div className="JoystickPosition">
				<canvas
					ref={(ref) => this.canvas = ref}
					className="JoystickPosition-canvas"
					width={WIDTH}
					height={HEIGHT}
				/>
			</div>
		);
	}

	private drawPosition (props: Props, oldProps: Props) {
		const canvas = this.canvas;
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}
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
}
