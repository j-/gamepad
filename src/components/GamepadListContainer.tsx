import * as React from 'react';
import GamepadList from './GamepadList';

const getGamepads = () => {
	const result: Gamepad[] = [];
	const gamepads = navigator.getGamepads();
	for (let i = 0; i < gamepads.length; i++) {
		if (gamepads[i]) {
			result.push(gamepads[i]);
		}
	}
	return result;
};

interface State {
	gamepads: Gamepad[];
}

export default class GamepadListContainer extends React.Component<{}, State> {
	private requestId: number;

	constructor () {
		super();
		this.state = {
			gamepads: [],
		};
		this.handleAnimationFrame = this.handleAnimationFrame.bind(this);
	}

	componentDidMount () {
		this.handleAnimationFrame();
	}

	componentWillUnmount () {
		cancelAnimationFrame(this.requestId);
		delete this.requestId;
	}

	handleAnimationFrame () {
		this.setState(() => ({
			gamepads: getGamepads(),
		}));
		this.requestId = requestAnimationFrame(this.handleAnimationFrame);
	}

	render () {
		const { gamepads } = this.state;
		return <GamepadList gamepads={gamepads} />;
	}
}
