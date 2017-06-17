import * as React from 'react';
import './InputContainer.css';

export interface Props {

}

export default class InputContainer extends React.PureComponent<Props, void> {
	render () {
		const { children } = this.props;
		return (
			<div className="InputContainer">
				{children}
			</div>
		);
	}
}
