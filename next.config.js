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
		return config;
	},
};
