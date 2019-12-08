const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});

module.exports = {
  entry: {
    home: './src/js/index.js',
    aboutpangolin: './src/js/aboutpangolin.js',
    aboutproject: './src/js/aboutproject.js',
    chapter: './src/js/chapter.js',
    quiz: './src/js/quiz.js',
    chapter1: './src/js/chapter1.js',
    chapter2: './src/js/chapter2.js',
    chapter3: './src/js/chapter3.js',
    chapter4: './src/js/chapter4.js',
    chapter5: './src/js/chapter5.js',
    chapter6: './src/js/chapter6.js',
    chapter8: './src/js/chapter8.js',
    chapter9: './src/js/chapter9.js',
    chapter10: './src/js/chapter10.js',
    chapter11: './src/js/chapter11.js',
    chapter12: './src/js/chapter12.js',
    chapter13: './src/js/chapter13.js',
    chapter14: './src/js/chapter14.js',
    chapter15: './src/js/chapter15.js',
    view: './src/js/view.js',
    loader: './src/js/loader.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
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
      "gsap": path.resolve('node_modules', 'gsap/src/minified/jquery.gsap.min.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js')
    },
  },
  devServer: {
    host: '0.0.0.0',
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
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      }
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
        template: './src/about-pangolin.html',
        inject: true,
        chunks: ['aboutpangolin','view'],
        filename: 'about-pangolin.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/about-project.html',
        inject: true,
        chunks: ['aboutproject','view'],
        filename: 'about-project.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-1.html',
        inject: true,
        chunks: ['chapter1','view','chapter'],
        filename: 'chapter-1.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-2.html',
        inject: true,
        chunks: ['chapter2','view','chapter'],
        filename: 'chapter-2.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-3.html',
        inject: true,
        chunks: ['chapter3','view','chapter'],
        filename: 'chapter-3.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-4.html',
        inject: true,
        chunks: ['chapter4','view','chapter'],
        filename: 'chapter-4.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-5.html',
        inject: true,
        chunks: ['chapter5','view'],
        filename: 'chapter-5.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-6.html',
        inject: true,
        chunks: ['chapter6','view','chapter'],
        filename: 'chapter-6.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-8.html',
        inject: true,
        chunks: ['chapter8','view'],
        filename: 'chapter-8.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-9.html',
        inject: true,
        chunks: ['chapter9','view','chapter'],
        filename: 'chapter-9.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-10.html',
        inject: true,
        chunks: ['chapter10','view','chapter'],
        filename: 'chapter-10.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-11.html',
        inject: true,
        chunks: ['chapter11','view','chapter'],
        filename: 'chapter-11.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-12.html',
        inject: true,
        chunks: ['chapter12','view'],
        filename: 'chapter-12.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-13.html',
        inject: true,
        chunks: ['chapter13','view','chapter'],
        filename: 'chapter-13.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-14.html',
        inject: true,
        chunks: ['chapter14','view'],
        filename: 'chapter-14.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/chapter-15.html',
        inject: true,
        chunks: ['chapter15','view','chapter'],
        filename: 'chapter-15.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/quiz.html',
        inject: true,
        chunks: ['quiz','view'],
        filename: 'quiz.html'
    })
    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   include: ['loader']
    // })
],

};
