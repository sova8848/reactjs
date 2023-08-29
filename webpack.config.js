// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use these loaders
      },
    ],
  },
};
