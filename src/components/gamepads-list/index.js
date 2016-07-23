import GamepadsList from './gamepads-list';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	gamepads: [],
});

const GamepadsListContainer = connect(
	mapStateToProps
)(GamepadsList);

export default GamepadsListContainer;
