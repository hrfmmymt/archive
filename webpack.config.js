const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    common: [
      'babel-polyfill',
      './public/src/ui/blog/GlobalHeader.js',
      './public/src/ui/blog/GlobalFooter.js'
    ],
    top: ['./public/src/ui/blog/PostListContainer.js'],
    post: ['./public/src/ui/blog/Post.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/src/ui/blog/bundle')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-custom-element-classes']
          }
        }
      }
    ]
  },
  plugins: [new UglifyJsPlugin()]
}
