const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set to 'production' for minified builds
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve static files from here
    compress: true, // Enable gzip compression for better performance
    port: 3000, // Port to run the development server on
  },
};
