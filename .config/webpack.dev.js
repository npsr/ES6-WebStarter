const HtmlWebpack = require('html-webpack-plugin');
const path =        require('path');
const webpack =     require('webpack');
const pack =        require('../package.json');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

const srcDir = path.resolve(__dirname, '..', 'src');

module.exports = function () {
  return {

    context: srcDir,

    devtool: 'source-map',

    entry: ['./init.js'],

    devServer: {
      contentBase: srcDir,
      publicPath: '/',
      historyApiFallback: true,
      port: 3000,
    },

    output: {
      publicPath: '/',
      path: __dirname + "/dist",
      filename: '[hash]__' + pack.name + '-v.' + pack.version + '.bundle.js',
      chunkFilename: "[id].[chunkhash].bundle.js"
    },

    resolve: {
      alias: {
        components:   path.resolve('./src/components'),
        template:     path.resolve('./src/components/shared/template'),
        shared:       path.resolve('./src/components/shared'),
        images:       path.resolve('./public/img'),
        vendor:       path.resolve('./src/vendor'),
        connectors:   path.resolve('./src/components/connectors'),
        config:       path.resolve('./.config/env.dev')
      }
    },

    module: {
      rules: [
        // ---------------------------------------------------------------------
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
				// ---------------------------------------------------------------------
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['eslint-loader']
				},
        // ---------------------------------------------------------------------
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader']
        },
        // ---------------------------------------------------------------------
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader']
        },
        // ---------------------------------------------------------------------
        {
          test: /\.(pug|jade)$/,
          loaders: [
            'raw-loader', {
              loader: 'pug-html-loader',
              options: {
                doctype: 'html'
              }
            }
          ]
        },
        // ---------------------------------------------------------------------
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader?name=[name].[hash].[ext]?'

        }
      ]
    },
    plugins: [
      new HtmlWebpack({
        template: 'index.pug'
      }),
      new FlowBabelWebpackPlugin({
        warn: true
      })
   ]
  }
};
