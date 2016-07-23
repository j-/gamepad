const path = require('path');

module.exports = {
	entry: {
		'bundle': path.resolve(__dirname, './src/index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, './src'),
				],
				test: /\.jsx?$/,
			},
		],
	},
	devtool: 'source-map',
};
