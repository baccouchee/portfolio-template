/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        main : '#00df9a'
      },
      fontFamily : { body : ['Roboto Mono'] }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
