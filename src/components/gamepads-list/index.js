import GamepadsList from './gamepads-list';
import { connect } from 'react-redux';
import { getAllGamepads } from '../../reducer';

const mapStateToProps = (state) => ({
	gamepads: getAllGamepads(state),
});

const GamepadsListContainer = connect(
	mapStateToProps
)(GamepadsList);

export default GamepadsListContainer;
