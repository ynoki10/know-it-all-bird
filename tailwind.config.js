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
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '0' },
          '50%, 100%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 2s infinite',
      },
    },
  },
  plugins: [],
};
