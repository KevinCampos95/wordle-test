/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
theme: {
  extend: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      'paper01': '#F9F9F9',
      'paper02': 'rgba(218, 220, 224, 0.3)',
      'paper03': '#F3F3F3',
      'letter-default': 'background: rgba(147, 155, 159, 1)',
      'letter-warning': 'rgba(206, 176, 44, 1)',
      'letter-success': 'background: rgba(255, 255, 255, 1)',
    },
    height: {
      '84': '84px',
    },
    width: {
      '546': '546px',
    },
    maxWidth: {
      '546': '546px',
      '638': '638px',
    },
    lineHeight: {
      '48': '48px',
    },
  }
},
  plugins: [],
})

