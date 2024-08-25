const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//consider Terser plugin if we must retain class names

module.exports = {
  mode: "development", //change back to production when ready, to minify the names
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "YOUR NAME HERE - TEMPLATE",
      template: "src/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
