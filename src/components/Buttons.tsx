import * as React from 'react';
import Button from './Button';
import './Buttons.css';

export interface Props {
	buttons: GamepadButton[];
}

export default class Buttons extends React.Component<Props, void> {
	render () {
		const { buttons } = this.props;
		return (
			<div className="Buttons">
				<Button index={0x0} value={buttons[0x0].value} pressed={buttons[0x0].pressed} />
				<Button index={0x1} value={buttons[0x1].value} pressed={buttons[0x1].pressed} />
				<Button index={0x2} value={buttons[0x2].value} pressed={buttons[0x2].pressed} />
				<Button index={0x3} value={buttons[0x3].value} pressed={buttons[0x3].pressed} />
				<Button index={0x4} value={buttons[0x4].value} pressed={buttons[0x4].pressed} />
				<Button index={0x5} value={buttons[0x5].value} pressed={buttons[0x5].pressed} />
				<Button index={0x6} value={buttons[0x6].value} pressed={buttons[0x6].pressed} />
				<Button index={0x7} value={buttons[0x7].value} pressed={buttons[0x7].pressed} />
				<Button index={0x8} value={buttons[0x8].value} pressed={buttons[0x8].pressed} />
				<Button index={0x9} value={buttons[0x9].value} pressed={buttons[0x9].pressed} />
				<Button index={0xa} value={buttons[0xa].value} pressed={buttons[0xa].pressed} />
				<Button index={0xb} value={buttons[0xb].value} pressed={buttons[0xb].pressed} />
				<Button index={0xc} value={buttons[0xc].value} pressed={buttons[0xc].pressed} />
				<Button index={0xd} value={buttons[0xd].value} pressed={buttons[0xd].pressed} />
				<Button index={0xe} value={buttons[0xe].value} pressed={buttons[0xe].pressed} />
				<Button index={0xf} value={buttons[0xf].value} pressed={buttons[0xf].pressed} />
			</div>
		);
	}
}
