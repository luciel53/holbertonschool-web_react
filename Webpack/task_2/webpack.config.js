const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',

            },
          },
        ],
        use: [
          {
            loader: 'image-webpack-loader',
          }
        ],
      },
    ]
  },
  performance: { // to fix warning size
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
