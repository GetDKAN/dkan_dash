/* eslint-disable no-var */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const colors = require('colors');
const { exec } = require('child_process');
const MODE = process.env.MODE;
const isProduction = MODE === 'production';
const devtool = isProduction ? 'source-map' : 'eval';
let plugins = [new ExtractTextPlugin('dkan_dash.min.css')];

if(MODE === 'production') {
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {comments: false},
      mangle: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]);
}

/*========================================
=            REACT DASH BUILD            =
========================================*/
if(process.env.REACT_DASH_PATH) {
  const originRD = path.resolve(process.env.REACT_DASH_PATH);
  const destinationRD = path.join(__dirname, 'node_modules', 'react-dash');
  const originRDSrc = path.join(originRD, 'src');
  const originRDDistFiles = path.join(originRD, 'dist');
  const destinationRDDistFiles = path.join(destinationRD, 'dist');

  const build = () => {
    console.log('---- BUILDING REACT DASH -----'.cyan);
    exec('npm run build', {cwd: process.env.REACT_DASH_PATH }, (error, stdout, stderr) => {
      if(error || stderr) throw new Error(error || stderr);
      console.log(stdout);
      fs.copySync(originRDDistFiles, destinationRDDistFiles);
      console.log('------ REACT DASH BUILT ------'.green);
    });
  };

  const watcher = chokidar.watch(originRDSrc, {
    persistent: MODE === 'external' ? false : true,
    ignoreInitial: true
  });

  watcher
    .on('change', build)
    .on('add', build)
    .on('unlink', build);
}
/*=====  End of REACT DASH BUILD  ======*/

module.exports = {
  devtool: devtool,
  entry: ['whatwg-fetch','./src/index'],
  output: {
    path: path.join(__dirname, '..' ,'dist'),
    filename: 'dkan_dash.min.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: [
          /whatwg-.*/,
          path.join(__dirname, 'src')
        ]
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader') },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')  }
    ]
  }
};
