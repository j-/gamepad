import * as React from 'react';
import './POVHat.css';

export interface Props {
	pressedN: boolean;
	pressedS: boolean;
	pressedW: boolean;
	pressedE: boolean;
}

export class Direction extends React.Component<Props, void> {
	render () {
		const { pressedN, pressedS, pressedE, pressedW } = this.props;
		if (pressedN && !pressedW && !pressedE) {
			return <div className="direction-n" />;
		} else if (pressedN && pressedE) {
			return <div className="direction-ne" />;
		} else if (pressedE && !pressedN && !pressedS) {
			return <div className="direction-e" />;
		} else if (pressedE && pressedS) {
			return <div className="direction-se" />;
		} else if (pressedS && !pressedE && !pressedW) {
			return <div className="direction-s" />;
		} else if (pressedS && pressedW) {
			return <div className="direction-sw" />;
		} else if (pressedW && !pressedS && !pressedN) {
			return <div className="direction-w" />;
		} else if (pressedW && pressedN) {
			return <div className="direction-nw" />;
		} else {
			return <div className="direction-none" />;
		}
	}
}

export default class POVHat extends React.Component<Props, void> {
	render () {
		const { pressedN, pressedS, pressedE, pressedW } = this.props;
		return (
			<div className="POVHat">
				<Direction
					pressedN={pressedN}
					pressedS={pressedS}
					pressedW={pressedW}
					pressedE={pressedE}
				/>
			</div>
		);
	}
}
