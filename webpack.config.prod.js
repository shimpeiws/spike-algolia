const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BomPlugin = require('webpack-utf8-bom');

module.exports = {
  mode: 'production',
  entry: './src/Index.tsx',
  output: {
    filename: './js/bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },

  plugins: [
    new BomPlugin(true)
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: { compress: { drop_console: true } },
      }),
    ],
  }
};
