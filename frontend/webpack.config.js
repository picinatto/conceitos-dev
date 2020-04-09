// Require the path to resolve with diferent OS folder structures // \\
const path = require('path');

module.exports = {
  // Set the entry point for the application, that is index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Output the bundle that is going to be used by the browsers on the public folder
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // Create the resolve for using the dev server
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    // Add the rules for the loaders
    rules: [
      {
        // Configure the loader for JavaScript and React files
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        // Configure the loader for css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        // Configure the loader for img files
        test: /.*\.(gif|png|jpe?g)$/i,
        use: { 
          loader: 'file-loader' 
        },
      },
    ]
  }
};