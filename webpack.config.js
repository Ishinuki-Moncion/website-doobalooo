var webpack = require('webpack');
var debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-source-map" : null,
  entry: "./src/app.jsx",
  resolve:
  {
    // allows webpack to support .jsx extensions
    // particularily useful when attempting to import .jsx components
    extensions: ['.js', '.jsx']
  },
  module:
  {
    loaders:
    [{
      test: /\.jsx?$/, // Match both .js and .jsx
      exclude: /(node_modules)/,
      loader: [ "babel-loader", "class-to-classname" ]
    }]
  },
  output:
  {
    path: __dirname + "/build",
    // it is important, here, to specify a publicPath
    // app.bundle.js will be stored in temp memory, not the actual build folder
    // localhost:8080 is the /doobalooo-website/ folder
    // specifying a publicPath as /build tells webpack-dev-server where in
    // temp memory to serve the files
    publicPath: "/build",
    filename: "app.bundle.js"
  },
  plugins: debug ? [] :
  [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(
      {
        mangle: false,
        sourcemape: false
      }
    ),
    // prints more readable module names in the browser console on
    // Hot Module Replacements updates
    new webpack.NamedModulesPlugin()
  ]
}
