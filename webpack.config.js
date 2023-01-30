// node.js inbuilt libarary
// no need to install
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Old Javascript Technique to Export content
module.exports = {
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: "main.js" },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    compress: true,
    port: 8080,
    open: true,
  },
};
