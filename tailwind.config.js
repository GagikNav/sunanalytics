const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f9c133',
        primaryDark: '#c3992c',
        secondary: '#3b4754',
        secondaryLight: '#676d74',
        footer: '#444444',
        footerText: '#d6d6d6',
        lightblue: colors.lightBlue,
        trueGray: colors.trueGray,
      },
      //
    },
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  variants: {
    extend: {
      //
      opacity: ['disabled'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    //
  ],
};
