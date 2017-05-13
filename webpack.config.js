// Reference: https://webpack.github.io/docs/configuration.html

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
    },
    {
      // Format for this loader was taken from:
      // Handles images, video, animation, etc. assets
      // https://github.com/michael-ciniawsky/css-loader#assets
      test: /\.(png|jpg|mp4|ttf)$/,
      use:
      [{
          loader: 'url-loader',
          options: { limit: 10000 }
      }] // gets image files and assets
    }]
  },
  output:
  {
    path: __dirname + "/build/",
    // it is important, here, to specify a publicPath
    // app.bundle.js will be stored in temp memory, not the actual build folder
    // localhost:8080 is the /doobalooo-website/ folder
    // specifying a publicPath as /build tells webpack-dev-server where in
    // temp memory to serve the files
    publicPath: "/build/",
    filename: "app.bundle.js"
  },
  // to resolve IRC library errors:
  // Module not found: Error: Can't resolve 'net'
  // https://github.com/request/request/issues/1529
  node: {
    console: false,
    net: 'empty'
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
