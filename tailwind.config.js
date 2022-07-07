/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkGray: '#2B2B2B',
        darkGray: '#969696',
        lightDark: '#3F3F3F'
      }
    },
    fontFamily: {
      'rubik': 'Rubik',
    }
  },
  plugins: [],
}
