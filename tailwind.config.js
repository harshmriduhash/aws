const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    '*.html',
    'public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
      },
      transitionDelay: {
        '400': '400ms',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}