const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
};
