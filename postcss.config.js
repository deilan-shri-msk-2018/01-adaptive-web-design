const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const inlineComment = require('postcss-inline-comment');

module.exports = ctx => ({
  plugins: [
    nested(),
    autoprefixer()
  ]
});