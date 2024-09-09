/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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