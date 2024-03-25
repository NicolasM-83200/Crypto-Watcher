/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Bhaina 2"', 'cursive'],
        saira: ['Saira Condensed', 'sans-serif'],
      },
      colors: {
        color1: '#00b7b3',
        green2: 'rgb(0, 253, 148)',
        green1: 'rgb(2, 172, 81)',
        red1: 'rgb(255, 111, 86)',
        red2: 'rgb(251, 69, 63)',
        white1: 'rgb(219, 217, 217)',
        white2: 'rgb(172, 172, 172)',
        black1: 'rgb(31, 31, 31)',
        black2: 'rgb(10, 10, 10)',
      },
      animation: {
        animLogo: 'animLogo 1.2s infinite linear',
      },
      keyframes: {
        animLogo: {
          '50%': { transform: 'translateY(3px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
