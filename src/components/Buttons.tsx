import * as React from 'react';
import Button from './Button';
import './Buttons.css';

export interface Props {
	buttons: GamepadButton[];
}

export default class Buttons extends React.Component<Props, void> {
	render () {
		const { buttons } = this.props;
		const children = buttons.map((button, i) => (
			<div className="Buttons-button" key={i}>
				<Button
					index={i}
					value={button.value}
					pressed={button.pressed}
				/>
			</div>
		));
		return (
			<div className="Buttons">
				{children}
			</div>
		);
	}
}
