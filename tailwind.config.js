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
        headerfont: '#8B8B8B'
      },
      fontFamily: {
        roboto: 'Roboto, Helvetica, sans-serif'
      },
      spacing: {
        '128' : '32rem',
        'header' : '12%',
        'subheader' : '10%',
        'main' : '78%'
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
 }