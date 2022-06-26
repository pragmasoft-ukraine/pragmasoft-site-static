module.exports = {
  cwd: './build',
  plugins: [require('posthtml-hash').hash({ path: 'build' }), require('htmlnano')({})],
};
