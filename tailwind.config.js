import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Comfortaa']
    },
    extend: {
      screens: {
        'fhd': { 'raw': '(min-height: 1080px)' },
        'tb':{'raw': '(min-height: 700px)'},
        'wqhd':{'raw': '(min-height: 1440px)'},
      },
      colors: {
        'primary': '#74a3cf',
        'primary-dark': '#54738f',
        'secondary': '#394959',
        'secondary-dark': '#191919',
        'accent': '#ffa726',
        'accent-dark': '#c77800',
        'back': '#fffaed',
        'back-dark': '#1e293b',
        'back-card': '#ffffff',
        'back-card-dark': '#334155',
        'title-card': '#000000',
        'title-card-dark': '#ffffff',
      }
    }
  }
}

// const colors = require('tailwindcss/colors')

// module.exports = {
//   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   darkMode: 'media', // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         'text-primary': '#ffffff',
//         'primary': '#5c6bc0',
//         'primary-light': '#8e99f3',
//         'primary-dark': '#26418f',
//         'text-secondary': '#000000',
//         'secondary': '#ffc107',
//         'secondary-light': '#fff350',
//         'secondary-dark': '#c79100'
//       },
//     },

//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }