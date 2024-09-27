/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E2832', 
        'secondary': '#F4F4F5', 
        'tertiary': '#a3a3a3', 
        'danger': '#FF6F61', 
      },
      animation: {
        "flip-left": 'flip-left 3s forwards 2s',
        "flip-right": 'flip-right 3s forwards 2s',
        "d-none": 'd-none 0.2s forwards 3s',
        "opacity-0": 'opacity 2s forwards',
      },
      keyframes: {
        "flip-left": {
          '0%': { transform: 'perspective(1200px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1200px) rotateY(180deg)' },
        },
        "flip-right": {
          '0%': { transform: 'perspective(1200px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1200px) rotateY(-180deg)' },
        },
        "d-none": {
          to: { display: 'none' },
        },
        "opacity": {
          to: { opacity: '0' },
        },
      },
    },
    fontFamily: {
      'openSans-semibold': ['openSans-semibold'],
      'openSans-medium': ['openSans-medium'],
      'openSans-regular': ['openSans-regular'],
      'roboto-regular': ['roboto-regular'],
      'roboto-light': ['roboto-light'],
      'roboto-bold': ['roboto-bold'],
    },
  },
  plugins: [require('flowbite/plugin')],
}

