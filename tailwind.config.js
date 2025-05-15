/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./products.html'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Poppins']
      },
      colors: {
        'base' : '#111111',
       'active': '#0067FF',
       'text': '#5A5A5A '
       
      },
      backgroundColor: {
      'top': '#F4F9FF',
      'grey': '#fcfcfd',
      'input': '#eaecf0',
      'card': '#F7F7FD',
      'category': '#B7D4FF'
      },
      fontSize: {
        'h1': '64px'
      }
    },
  },
  plugins: [],
}

