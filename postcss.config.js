const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = ctx => ({
    plugins: [
        nested(),
        autoprefixer()
    ]
});