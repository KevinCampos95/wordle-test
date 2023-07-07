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
      'letterCard-bg-default': '#D3D6DA',
      'letterCard-bg-warning': '#CEB02C',
      'letterCard-bg-success': '#66A060',
    },
    height: {
      '76': '76px',
      '84': '84px',
    },
    width: {
      '75': '75px',
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

