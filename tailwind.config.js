/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-reverse': 'spin-reverse 15s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      boxShadow: {
        'custom': '-36px 74px 23px 0px rgba(28, 28, 28, 0.00), -23px 47px 21px 0px rgba(28, 28, 28, 0.01), -13px 27px 18px 0px rgba(28, 28, 28, 0.05), -6px 12px 13px 0px rgba(28, 28, 28, 0.09), -1px 3px 7px 0px rgba(28, 28, 28, 0.10)',
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '1440': '90rem'
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        BLUE: {
          50: '#E7F2FF',
          100: '#B6D8FE',
          300: '#788FE8',
          500: '#3843D0',
        },
        ORANGE: {
          300: '#FA7E5B',
          500: '#F86241',
        },
        CREAM: '#F5F5F5',
        BLACK: '#000E17',
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.title': {
          '@apply font-bebas lg:text-7xl md:text-6xl text-4xl': {},
        },
        '.title-sub': {
          '@apply block font-bebas lg:text-2xl md:text-xl text-lg': {},
        },
        '.max-w-wrapper': {
          '@apply max-w-1440 mx-auto': {},
        },
      })
    }
  ],
}