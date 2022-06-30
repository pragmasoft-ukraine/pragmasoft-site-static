const posthtml = require('posthtml');
const posthtmlrc = require('posthtml-load-config');

let posthtmlConfiguration = undefined;

/**
 * PostHtml async transform function
 *
 * @param {String} content
 * @param {String} outputPath
 * @returns {String | undefined}
 */
module.exports = async function (content, outputPath) {
  if (outputPath.endsWith('.html')) {
    if (!posthtmlConfiguration) {
      posthtmlConfiguration = await posthtmlrc();
    }
    const { plugins, options } = posthtmlConfiguration;

    const result = await posthtml(plugins, options).process(content);

    return result.html;
  }
  return content;
};
