const path = require('path');


module.exports = {
  context: __dirname,
  entry: "./frontend/ticket_bits.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'eval-source-map', //if any problems change to ‘source-map’
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
