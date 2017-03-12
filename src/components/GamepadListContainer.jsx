import React, { Component } from 'react';
import GamepadList from './GamepadList';

const getGamepads = () => (
	// Convert iterable to array
	[...navigator.getGamepads()]
		// Gamepads may be `undefined` despite `length` of iterable
		.filter(Boolean)
);

export default class GamepadListContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			gamepads: [],
		};
		this.handleAnimationFrame = this.handleAnimationFrame.bind(this);
		this.requestID = null;
	}

	componentDidMount () {
		this.handleAnimationFrame();
	}

	componentWillUnmount () {
		cancelAnimationFrame(this.requestID);
		this.requestID = null;
	}

	handleAnimationFrame () {
		this.setState({
			gamepads: getGamepads(),
		});
		this.requestID = requestAnimationFrame(this.handleAnimationFrame);
	}

	render () {
		const { gamepads } = this.state;
		return <GamepadList gamepads={ gamepads } />;
	}
}
