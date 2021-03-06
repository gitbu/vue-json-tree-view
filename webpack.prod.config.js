/**
 * @file webpack prod config file
 */
const webpack = require('webpack');
const config = require('./webpack.base.config');

config.entry = './src/index.js';
config.output = {
	filename: './dist/vue-json-tree-view.min.js',
	library: 'TreeView',
	libraryTarget: 'umd'
};

config.plugins = (config.plugins || []).concat([
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		compress: {
			warnings: false
		}
	})
]);
module.exports = config;
