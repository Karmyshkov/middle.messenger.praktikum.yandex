const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [autoprefixer, postcssNested, cssnano({ preset: 'default' })],
};
