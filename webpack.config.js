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
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-2'],
				},
			},
		],
	},
	devtool: 'source-map',
};
