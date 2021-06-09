const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 500000
          }
        }
      ]
    })
    config.plugins.push(new CircularDependencyPlugin({
      // Exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // Add errors to webpack instead of warnings
      failOnError: false,
      // Allow import cycles that include an asynchronous import,
      // E.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // Set the current working directory for displaying module paths
      cwd: process.cwd()
    }))
    if (!options.isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
