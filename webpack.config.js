const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: './src/js/index.js',
    aboutpangolin: './src/js/aboutpangolin.js',
    aboutproject: './src/js/aboutproject.js',
    chapter: './src/js/chapter.js',
    quiz: './src/js/quiz.js',
    chapter1: './src/js/chapter1.js',
    chapter2: './src/js/chapter2.js',
    view: './src/js/view.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      "TweenLite": path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/minified/TimelineLite.min.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js')
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true}
        }
      },
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['home','view'],
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-1.html',
        inject: true,
        chunks: ['chapter1','view'],
        filename: 'chapter-1.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-2.html',
        inject: true,
        chunks: ['chapter2','view'],
        filename: 'chapter-2.html'
    })
],

};
