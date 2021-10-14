const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist", // the url to the output directory resolved relative to the HTML page
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
    ],
  },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js"],
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
