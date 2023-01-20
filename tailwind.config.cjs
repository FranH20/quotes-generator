/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'color': {
        primary: '#472183',
        secondary: '#4B56D2',
        third: '#82C3EC',
        fourth: '#F1F6F5'
      },
      'white': '#FFFFFF',
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      gray: colors.gray,
      amber: colors.amber,
      green: colors.green,
      fuchsia: colors.fuchsia
    },
    extend: {
      backgroundImage: {
        'background-image-generator': "url('src/assets/background-example.jpg')",
        'vector-background': "url('src/assets/repeating-chevrons.svg')"
      }
    },
  },
  plugins: [],
}