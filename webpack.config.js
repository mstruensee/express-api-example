const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
	mode: "production",
	entry: {
		server: "./src/server.js"
	},
	output: {
		filename: "server.js",
		path: path.resolve(__dirname, "dist"),
	},
	target: "node",
	optimization: {
		minimizer: [
			new TerserWebpackPlugin({
				terserOptions: {
					mangle: false //https://github.com/mysqljs/mysql/issues/1655
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.(js)?$/i,
				include: [
					path.resolve("src"),
				],
				loader: "babel-loader"
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
}
