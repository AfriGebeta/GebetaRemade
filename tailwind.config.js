/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '1-important' : '1 !important',
      },
      colors: {
        'GebetaMain': '#F2994A',
        'Dark': '#111',
       
      },  
    },
  },
  plugins: [
    plugin(function({matchUtilities, theme}) {
      matchUtilities(
        {
          textShadow: (value) => ({
            textShadow: "-1px 1px 16px "+value
          })
        }, {
          values: theme('colors')
        }
      )
    })
  ],
}
