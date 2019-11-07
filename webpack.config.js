const path = require('path');

module.exports = {
  entry: {
    home: './src/index.js',
    aboutpangolin: './src/aboutpangolin.js',
    aboutproject: './src/aboutproject.js',
    chapter: './src/chapter.js',
    quiz: './src/quiz.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
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
