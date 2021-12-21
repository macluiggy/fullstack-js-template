const webpack = require("webpack");
const path = require("path");
const CURRENT_WORKING_DIR = process.cwd() || __dirname;
console.log(CURRENT_WORKING_DIR);

const rulesForJavaScript = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};
const rulesForTypescript = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};
const rulesForSass = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
};

module.exports = {
  entry: path.resolve(CURRENT_WORKING_DIR, "src/index.tsx"),
  module: {
    rules: [rulesForJavaScript, rulesForTypescript, rulesForSass],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(CURRENT_WORKING_DIR, "./dist"),
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(CURRENT_WORKING_DIR, "./dist"),
    hot: true,
  },
};