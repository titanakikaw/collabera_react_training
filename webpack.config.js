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
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        // sequance should be right to left
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
