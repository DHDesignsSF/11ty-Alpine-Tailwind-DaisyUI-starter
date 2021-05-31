module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  darkmode: false,
  theme: {
    extend: {
      colors: {
        change: 'black',
      },
    },
  },
  variants: {},
  plugins: [],
}
