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
		extensions: ['', '.js', '.jsx', '.css', '.less'],
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
			{
				// Use CSS Modules for React components
				loader: 'style!css?modules!less',
				include: [
					path.resolve(__dirname, 'src/components'),
				],
				test: /\.(css|less)$/,
			},
			{
				// Regular LESS loader for general styles
				loader: 'style!css!less',
				include: [
					path.resolve(__dirname, 'src/styles'),
				],
				test: /\.(css|less)$/,
			},
		],
	},
	devtool: 'source-map',
};
