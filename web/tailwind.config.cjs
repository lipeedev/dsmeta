/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
    },

    screens: {
      'md': '576px',
      'lg': '992px'
    }
  },


  plugins: [],
}
