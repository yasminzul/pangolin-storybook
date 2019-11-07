const path = require('path');

module.exports = {
  entry: {
    home: './public/src/index.js',
    aboutpangolin: './public/src/aboutpangolin.js',
    aboutproject: './public/src/aboutproject.js',
    chapter: './public/src/chapter.js',
    quiz: './public/src/quiz.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
