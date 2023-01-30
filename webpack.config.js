// node.js inbuilt libarary
// no need to install
const path = require("path");

// Old Javascript Technique to Export content
module.exports = {
  entry: "./source/index.js",
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
};
