/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg : '#170e1c',
      },
      fontFamily: {
        sigmar : ['var(--font-sigmar)'],
        roboto : ['var(--font-roboro)'],
      },
    },
  },
  plugins: [],
}