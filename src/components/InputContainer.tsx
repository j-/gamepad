import * as React from 'react';
import './InputContainer.css';

export interface Props extends React.Props<void> {

}

export default class InputContainer extends React.Component<Props, void> {
	render () {
		const { children } = this.props;
		return (
			<div className="InputContainer">
				{children}
			</div>
		);
	}
}
