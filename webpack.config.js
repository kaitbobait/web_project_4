const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: ""
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"), // tells the server where to serve content from in dev mode
    compress: true, // speeds up file loading in development mode
    port: 8080, 
    open: true // stie will automatically open in the browser after executing npm run dev
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
            loader: "babel-loader",
            options: {
                plugins: ["@babel/plugin-proposal-class-properties"]
            } 
        },
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      }
    ]
  },
  stats: { children: true }, // Print child process errors instead of hiding them
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html" // path to our index.html file
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
], 
}