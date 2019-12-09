const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjector = require('html-webpack-injector');

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
    loader_head: "./src/css/loader.css"
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
        chunks: ['loader_head','home','view'],
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/rainie.html',
        inject: true,
        chunks: ['loader_head','aboutpangolin','view'],
        filename: 'rainie.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/about.html',
        inject: true,
        chunks: ['loader_head','aboutproject','view'],
        filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/middleman.html',
        inject: true,
        chunks: ['loader_head','chapter1','view','chapter'],
        filename: 'middleman.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/boatman.html',
        inject: true,
        chunks: ['loader_head','chapter2','view','chapter'],
        filename: 'boatman.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/smuggler.html',
        inject: true,
        chunks: ['loader_head','chapter3','view','chapter'],
        filename: 'smuggler.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/policeman.html',
        inject: true,
        chunks: ['loader_head','chapter4','view','chapter'],
        filename: 'policeman.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/trail-malaysia.html',
        inject: true,
        chunks: ['loader_head','chapter5','view'],
        filename: 'trail-malaysia.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/waitingwife.html',
        inject: true,
        chunks: ['loader_head','chapter6','view','chapter'],
        filename: 'waitingwife.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/routes.html',
        inject: true,
        chunks: ['loader_head','chapter8','view'],
        filename: 'routes.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/socialmedia-star.html',
        inject: true,
        chunks: ['loader_head','chapter9','view','chapter'],
        filename: 'socialmedia-star.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/authorities.html',
        inject: true,
        chunks: ['loader_head','chapter10','view','chapter'],
        filename: 'authorities.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/doctors.html',
        inject: true,
        chunks: ['loader_head','chapter11','view','chapter'],
        filename: 'doctors.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/recipes.html',
        inject: true,
        chunks: ['loader_head','chapter12','view'],
        filename: 'recipes.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/hunters.html',
        inject: true,
        chunks: ['loader_head','chapter13','view','chapter'],
        filename: 'hunters.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/rainies-song.html',
        inject: true,
        chunks: ['loader_head','chapter14','view'],
        filename: 'rainies-song.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/forest.html',
        inject: true,
        chunks: ['loader_head','chapter15','view','chapter'],
        filename: 'forest.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/quiz.html',
        inject: true,
        chunks: ['loader_head','quiz','view'],
        filename: 'quiz.html'
    }),
    new HtmlWebpackInjector()
],

};
