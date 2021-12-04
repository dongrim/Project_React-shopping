const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/dist", // the url to the output directory resolved relative to the HTML page
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
        // options: {
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        // },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js"],
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    hot: true,
    open: false,
    historyApiFallback: true,
  },
};
