/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        palegreen: '#D2E2CA',
        accentOrange: '#E89924',
        buttonGray: '#E9E9E9',
        buttonSelected: '#A9C6BF',
      },
    },
  },
  plugins: [],
};
