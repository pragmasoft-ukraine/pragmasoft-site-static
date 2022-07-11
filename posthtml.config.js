module.exports = {
  cwd: './docs',
  plugins: [
    require('posthtml-hash').hash({ path: 'build' }),
    require('htmlnano')({}),
  ],
};
