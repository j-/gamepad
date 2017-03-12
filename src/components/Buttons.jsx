import React from 'react';
import Button from './Button';

const Buttons = ({ buttons }) => (
	<div className="gamepad-buttons">
		<Button index={0x0} button={ buttons[0x0] } />
		<Button index={0x1} button={ buttons[0x1] } />
		<Button index={0x2} button={ buttons[0x2] } />
		<Button index={0x3} button={ buttons[0x3] } />
		<Button index={0x4} button={ buttons[0x4] } />
		<Button index={0x5} button={ buttons[0x5] } />
		<Button index={0x6} button={ buttons[0x6] } />
		<Button index={0x7} button={ buttons[0x7] } />
		<Button index={0x8} button={ buttons[0x8] } />
		<Button index={0x9} button={ buttons[0x9] } />
		<Button index={0xa} button={ buttons[0xa] } />
		<Button index={0xb} button={ buttons[0xb] } />
		<Button index={0xc} button={ buttons[0xc] } />
		<Button index={0xd} button={ buttons[0xd] } />
		<Button index={0xe} button={ buttons[0xe] } />
		<Button index={0xf} button={ buttons[0xf] } />
	</div>
);

export default Buttons;
