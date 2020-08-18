const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

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
