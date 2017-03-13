import React from 'react';

const Direction = ({ buttons }) => {
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
};

const POVHat = ({ buttons }) => (
	<div className="pov-hat">
		<Direction buttons={ buttons } />
	</div>
);

export default POVHat;
