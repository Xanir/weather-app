const webpack = require('webpack');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    "app": [PATHS.src + '/Weather.js']
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  module: {
	loaders: [
	]
  }
};