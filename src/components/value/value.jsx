import React, { PropTypes } from 'react';

import {
	value as valueClass,
} from './styles';

const Value = ({
	value,
	places,
}) => (
	<span className={ valueClass }>
		{ value >= 0 ? '+' : '' }
		{ value.toFixed(places) }
	</span>
);

Value.propTypes = {
	value: PropTypes.number,
	places: PropTypes.number,
};

Value.defaultProps = {
	value: 0,
	places: 0,
};

export default Value;
