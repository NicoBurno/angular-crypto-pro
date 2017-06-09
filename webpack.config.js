const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const srcPath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

const rules = [
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	}
];

const plugins = [];

if (isProduction) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	);
}

var config = module.exports = {
    context: srcPath,
    entry: './index.js',
    output: {
        path: distPath,
        filename: 'angular-crypto-pro.js',
        library: "angular-crypto-pro",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    devtool: isProduction ? 'source-map' : 'eval',
    watch: !isProduction,
    module: {
    	rules
    },
    plugins,
    externals: [
    	"angular",
    	"crypto-pro"
    ]
};