const postCSSPlugin = require('eleventy-plugin-postcss');
const img = require('./shortcodes/img');
const posthtml = require('./transforms/posthtml');

module.exports = function (config) {
  config.addPlugin(postCSSPlugin);

  config.addShortcode('img', img);

  config.addPassthroughCopy({ 'static/images': 'images' });

  config.addTransform('async-posthtml', posthtml);

  return {
    templateFormats: ['md', 'html', 'js', 'njk', 'liquid'],
    dir: {
      input: 'src',
      output: 'build',
    },
  };
};
