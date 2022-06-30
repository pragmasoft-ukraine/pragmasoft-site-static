const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,njk}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        'roboto-condensed': [
          '"Roboto Condensed"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.5xl'),
          fontWeight: 900,
          fontFamily: theme('fontFamily[roboto-condensed]'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: 600,
          fontFamily: theme('fontFamily[roboto-condensed]'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          fontWeight: 400,
          fontFamily: theme('fontFamily[roboto-condensed]'),
        },
      });
    }),
  ],
};
