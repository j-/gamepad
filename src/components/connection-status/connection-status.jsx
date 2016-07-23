import React from 'react';

const ConnectionStatusConnected = () => (
	<span className="connection-status connection-status-connected">
		Connected
	</span>
);

const ConnectionStatusDisconnected = () => (
	<span className="connection-status connection-status-disconnected">
		Disconnected
	</span>
);

const ConnectionStatusUnknown = () => (
	<span className="connection-status connection-status-unknown">
		Unknown
	</span>
);

const ConnectionStatus = ({ connected }) => {
	switch (connected) {
		case true:
			return <ConnectionStatusConnected />;
		case false:
			return <ConnectionStatusDisconnected />;
		default:
			return <ConnectionStatusUnknown />;
	}
};

export default ConnectionStatus;
