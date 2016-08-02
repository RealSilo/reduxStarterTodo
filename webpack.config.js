var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    '!!script!jquery/dist/jquery.min.js',
    '!!script!foundation-sites/dist/foundation.min.js',
    './app/app.js' 
  ],
  externals: {
    jquery: "jQuery",
    foundation: 'Foundation'
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.js',
      Nav: 'app/components/nav.js',
      ErrorModal: 'app/components/error_modal.js',
      applicationStyles: 'app/styles/app.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public/'
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
