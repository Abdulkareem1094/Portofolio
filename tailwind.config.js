/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Laila:'Laila-Regular',
        LilitaOne: 'LilitaOne-Regular',
        Roboto: 'Roboto-Regular',
        Shrikhand: 'Shrikhand-Regular',
        YanoneKaffeesatz: 'YanoneKaffeesatz-Regular',
      },
      colors:{
        blue:'#00a1bc'
      },
    },
  },
  plugins: [],
}