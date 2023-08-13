/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        main : '#00df9a'
      },
      fontFamily : { body : ['Roboto Mono'] },
      boxShadow: {
        glow: '0 0 20px 0 rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
