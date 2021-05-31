module.exports = {
  mode: 'jit',
  purge: {
    content: ['./_site/**/*.{html,js}',
              './_tmp/**/*.{html,njk,js,jsx,ts,tsx,md,mdx,css}',
              './_includes/**/*.{html,njk,js,jsx,ts,tsx,md,mdx,css}',
              './*.{html,njk,js,jsx,ts,tsx,md,mdx,css}'],
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
