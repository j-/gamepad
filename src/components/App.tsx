import * as React from 'react';
import GamepadListContainer from './GamepadListContainer';
import { supported } from '../support';

const App = () => (
	<div>
		<h1>Gamepad</h1>
		<p>Connect a gamepad and press any button to activate.</p>
		<ul>
			<li><a href="https://www.w3.org/TR/gamepad/">Gamepad W3C specification</a></li>
			<li><a href="http://caniuse.com/#feat=gamepad">Can I use gamepad?</a></li>
		</ul>
		<p>Your device <strong>{supported ? 'does' : 'does not'}</strong> support the gamepad API.</p>
		{supported && <GamepadListContainer />}
	</div>
);

export default App;
