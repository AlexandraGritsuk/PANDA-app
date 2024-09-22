const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => ({
  entry: './src/script.ts', // путь к вашему исходному файлу
  module: {
    rules: [
        {
            test: /\.scss$/i,
            use: [MiniCssPlugin.loader, {
              loader: 'css-loader',
              options: {
                url: false
              }
            }, 'sass-loader'],
        },
        {
            test: /\.tsx?$/, // правило для обработки TypeScript файлов
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // разрешенные расширения
  },
  output: {
    filename: 'script.js', // выходной файл
    path: path.resolve(__dirname, 'dest'), // папка назначения
    clean: true,
  },
  plugins: [
    new MiniCssPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к HTML-шаблону
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' }, // копирование ассетов
        { from: 'src/404.html', to: '404.html' }, 
      ],
    }),
  ],
  mode: argv.mode === 'development' ? 'development' : 'production',
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  ...devServer(argv.mode === 'development'),
});

const devServer = isDev =>
    isDev
      ? {
          devServer: {
            open: true,
            hot: true,
            port: 8080,
            static: path.join(__dirname, 'dest'),
          },
        }
      : {};