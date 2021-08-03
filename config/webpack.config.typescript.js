module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript']
        }
      }
    ]
  }
}
