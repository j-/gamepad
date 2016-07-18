const path = require('path');

module.exports = {
	entry: {
		'bundle': path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					path.resolve(__dirname, './src'),
				],
				test: /\.js?$/,
			},
		],
	},
	devtool: 'source-map',
};
