const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const externals = [
  {
    module: 'react',
    global: 'React',
    entry: 'umd/react.development.js',
  },
  {
    module: 'react-dom',
    global: 'ReactDOM',
    entry: 'umd/react-dom.development.js',
  },
];

module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};

module.exports.serve = {
  content: [path.resolve(__dirname, 'dist')],
  port: 3000,
  config: {
  },
  hot: {
    host: 'localhost',
    port: 3001,
  },
  open: true,
}