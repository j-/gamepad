import React from 'react';
import Button from '../button';

const buildButtonsList = (buttons) => (
	buttons.map((button, i) => (
		<li className="gamepad-button-item" key={ i }>
			<Button
				value={ button.value }
				pressed={ button.pressed }
			/>
		</li>
	))
);

const ButtonsList = ({ buttons }) => (
	<ol className="gamepad-buttons-list" start="0">
		{ buildButtonsList(buttons) }
	</ol>
);

export default ButtonsList;
