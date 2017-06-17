import * as React from 'react';
import './JoystickPosition.css';

interface XYCoords {
	x: number;
	y: number;
}

export interface Props extends XYCoords {
	width: number;
	height: number;
}

export default class JoystickPosition extends React.PureComponent<Props, void> {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D | null;

	constructor (props: Props) {
		super(props);
		this.updateCanvas = this.updateCanvas.bind(this);
	}

	componentDidMount () {
		this.drawPosition(this.props, { x: 0, y: 0 });
	}

	componentWillReceiveProps (nextProps: Props) {
		this.drawPosition(nextProps, this.props);
	}

	render () {
		const { width, height } = this.props;
		return (
			<div className="JoystickPosition">
				<canvas
					ref={this.updateCanvas}
					className="JoystickPosition-canvas"
					width={width}
					height={height}
				/>
			</div>
		);
	}

	private updateCanvas (canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
	}

	private drawPosition (newCoords: XYCoords, oldCoords: XYCoords) {
		const { ctx } = this;
		if (!ctx) {
			return;
		}
		const { width, height } = this.props;
		const halfWidth = width / 2;
		const halfHeight = height / 2;
		ctx.save();
		ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.strokeStyle = 'black';
		ctx.fillRect(0, 0, width, height);
		ctx.translate(halfWidth, halfHeight);
		ctx.beginPath();
		ctx.moveTo(oldCoords.x * halfWidth, oldCoords.y * halfHeight);
		ctx.lineTo(newCoords.x * halfWidth, newCoords.y * halfHeight);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}
}
