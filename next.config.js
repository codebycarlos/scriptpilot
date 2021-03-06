const CircularDependencyPlugin = require("circular-dependency-plugin")
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")

const securityHeaders = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "Server",
		value: "Apache", // phony server value
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-Frame-Options",
		value: "sameorigin",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "Referrer-Policy",
		value: "same-origin",
	},
]

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
		})
		config.plugins.push(
			new CircularDependencyPlugin({
				// Exclude detection of files based on a RegExp
				exclude: /a\.js|node_modules/,
				// Add errors to webpack instead of warnings
				failOnError: false,
				// Allow import cycles that include an asynchronous import,
				// E.g. via import(/* webpackMode: "weak" */ './file.js')
				allowAsyncCycles: false,
				// Set the current working directory for displaying module paths
				cwd: process.cwd(),
			}),
			new CaseSensitivePathsPlugin(),
		)
		if (!options.isServer) config.resolve.fallback.fs = false
		return config
	},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/(.*)",
				headers: securityHeaders,
			},
		]
	},
}
