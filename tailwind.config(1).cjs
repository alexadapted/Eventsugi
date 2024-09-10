/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-cinzel)'],
        common: ['var(--font-glacial-indifference)']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

module.exports = config
