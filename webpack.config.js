module.exports = {
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
  entry: ['./src/pyptron.js'],
  target: 'node',
  output: {
    path: `${process.cwd()}/dist`,
    filename: 'pyptron.js',
    libraryTarget: 'commonjs2',
  },
}
