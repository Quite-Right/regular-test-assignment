/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

const BASE_CONFIG = {
  target: 'web',
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          // {
          //   loader: 'ts-loader'
          // }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }]
              },
              titleProp: true,
              ref: true
            }
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash].[ext]'
            }
          }
        ],
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.m?js/,
        type: 'javascript/auto',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin({
      output: {
        path: path.resolve(__dirname, 'dist')
      }
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ]
};

const DEV_CONFIG = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    preset: 'errors-warnings'
  },
  devServer: {
    magicHtml: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
    onListening: () => openBrowser(`http://${host}:${port}`),
    liveReload: true,
    hot: true,
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new DefinePlugin({
      BASE_ROUTING_URL: JSON.stringify('/')
    })
  ]
};

const PROD_CONFIG = {
  mode: 'production',
  output: {
    publicPath: '/regular-test-assignment/',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new DefinePlugin({
      BASE_ROUTING_URL: JSON.stringify('/regular-test-assignment/')
    })
  ]
};

module.exports = () => merge(
  BASE_CONFIG,
  process.env.MODE === 'production' ? PROD_CONFIG : DEV_CONFIG,
);