const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules\/(?!react-router-dom)/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMap: false,
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
    ]
  },
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'client/components/public'),
      publicPath: 'bundle.js',
    },
    proxy: {
      '/api/**': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
}
