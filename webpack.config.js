const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    modular: "./src/modular.js",
    framework: "./src/index.js"
  },
  output: {
    library: "turingWidget",
    libraryTarget: "umd",
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist")
  },
  serve: {
    port: 53473
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  }
};
