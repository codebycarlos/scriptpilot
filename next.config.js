const CircularDependencyPlugin = require("circular-dependency-plugin");
module.exports = {
	reactStrictMode: true,
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(png|jpg|gif)$/i,
			use: [
				{
					loader: "url-loader",
					options: {
						limit: 500000,
					},
				},
			],
		});
		config.plugins.push(
			new CircularDependencyPlugin({
				// exclude detection of files based on a RegExp
				exclude: /a\.js|node_modules/,
				// add errors to webpack instead of warnings
				failOnError: false,
				// allow import cycles that include an asyncronous import,
				// e.g. via import(/* webpackMode: "weak" */ './file.js')
				allowAsyncCycles: false,
				// set the current working directory for displaying module paths
				cwd: process.cwd(),
			})
		);
		if (!options.isServer) {
			config.node = {
				fs: "empty",
			};
		}
		return config;
	},
};
