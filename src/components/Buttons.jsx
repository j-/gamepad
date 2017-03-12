import React from 'react';
import Button from './Button';

const Buttons = ({ buttons }) => (
	<div className="gamepad-buttons">
		<Button button={ buttons[0x0] } />
		<Button button={ buttons[0x1] } />
		<Button button={ buttons[0x2] } />
		<Button button={ buttons[0x3] } />
		<Button button={ buttons[0x4] } />
		<Button button={ buttons[0x5] } />
		<Button button={ buttons[0x6] } />
		<Button button={ buttons[0x7] } />
		<Button button={ buttons[0x8] } />
		<Button button={ buttons[0x9] } />
		<Button button={ buttons[0xa] } />
		<Button button={ buttons[0xb] } />
		<Button button={ buttons[0xc] } />
		<Button button={ buttons[0xd] } />
		<Button button={ buttons[0xe] } />
		<Button button={ buttons[0xf] } />
	</div>
);

export default Buttons;
