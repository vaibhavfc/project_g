const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    '~' : path.resolve(__dirname, '../src/'),
  };

  // styles

  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  return config;
}