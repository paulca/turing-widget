const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    modular: "./src/modular.js",
    app: "./src/index.js"
  },
  output: {
    library: "turingWidget",
    libraryTarget: "umd",
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    axios: {
      commonjs: "axios",
      commonjs2: "axios",
      amd: "axios",
      root: "axios"
    }
  },
  serve: {
    port: 53473
  },
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
