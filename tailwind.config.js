module.exports = {
  purge: [
  './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      width: {
        '20r5': '5.5rem'
      },
      height: {
        '20r5': '5.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
