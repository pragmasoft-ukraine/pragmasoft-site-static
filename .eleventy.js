const UserConfig = require('@11ty/eleventy/src/UserConfig');
const postCSSPlugin = require('eleventy-plugin-postcss');
const img = require('./shortcodes/img');
const posthtml = require('./transforms/posthtml');

/**
 * @param {UserConfig} config
 * @returns {Object}
 */
module.exports = function (config) {
  config.addPlugin(postCSSPlugin);

  config.addShortcode('img', img);

  config.addPassthroughCopy({ static: '/' });

  config.addTransform('async-posthtml', posthtml);

  return {
    templateFormats: ['md', 'html', 'js', 'njk', 'liquid'],
    dir: {
      input: 'src',
      output: 'docs',
    },
  };
};
