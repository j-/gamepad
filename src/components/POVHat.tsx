import * as React from 'react';
import './POVHat.css';

export interface Props extends React.Props<void> {
	buttons: GamepadButton[];
}

export class Direction extends React.Component<Props, void> {
	render () {
		const { buttons } = this.props;
		const buttonN = buttons[0xc];
		const buttonS = buttons[0xd];
		const buttonW = buttons[0xe];
		const buttonE = buttons[0xf];
		if (buttonN.pressed && !buttonW.pressed && !buttonE.pressed) {
			return <div className="direction-n" />;
		} else if (buttonN.pressed && buttonE.pressed) {
			return <div className="direction-ne" />;
		} else if (buttonE.pressed && !buttonN.pressed && !buttonS.pressed) {
			return <div className="direction-e" />;
		} else if (buttonE.pressed && buttonS.pressed) {
			return <div className="direction-se" />;
		} else if (buttonS.pressed && !buttonE.pressed && !buttonW.pressed) {
			return <div className="direction-s" />;
		} else if (buttonS.pressed && buttonW.pressed) {
			return <div className="direction-sw" />;
		} else if (buttonW.pressed && !buttonS.pressed && !buttonN.pressed) {
			return <div className="direction-w" />;
		} else if (buttonW.pressed && buttonN.pressed) {
			return <div className="direction-nw" />;
		} else {
			return <div className="direction-none" />;
		}
	}
}

export default class POVHat extends React.Component<Props, void> {
	render () {
		const { buttons } = this.props;
		return (
			<div className="POVHat">
				<Direction buttons={buttons} />
			</div>
		);
	}
}
