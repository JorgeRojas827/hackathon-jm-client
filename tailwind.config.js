module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3AB8FF',
        grayprim: '#F5F5F5',
        graysec: '#D9D9D9',
        grayterc: '#ECECEC',
        graycuart: '#FCFCFC',
      },
      fontFamily: {
        roboto: 'Roboto, Helvetica, sans-serif'
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
 }