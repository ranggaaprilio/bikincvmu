const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const plugins = [new LiveReloadPlugin()];
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@views': path.join(__dirname, '/resources/js/views'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.(js|vue)?$/,
      },
    ],
  },
  plugins: plugins,
};
