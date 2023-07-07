/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
important: true,
theme: {
  extend: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    fontSize: {
      'xl': '19px',
      '3xl': '28px',
    },
    colors: {
      'paper01': '#F9F9F9',
      'paper02': 'rgba(218, 220, 224, 0.3)',
      'paper03': '#F3F3F3',
      'letterCard-bg-default': '#FFFFFF',
      'letterCard-bg-warning': '#CEB02C',
      'letterCard-bg-success': '#66A060',
      'letterCard-bg-error': '#939B9F',
    },
    height: {
      '76': '76px',
      '84': '84px',
    },
    width: {
      '75': '75px',
      '256': '256px',
      '546': '546px',
    },
    maxWidth: {
      '546': '546px',
      '638': '638px',
    },
    lineHeight: {
      '22': '22px',
      '32': '32px',
      '48': '48px',
    },
  }
},
  plugins: [],
})

