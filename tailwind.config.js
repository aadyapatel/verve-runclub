/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#C8181C',
        'red-light': '#FF2A2F',
        black: '#0A0A0A',
        charcoal: '#1A1A1A',
        mid: '#2E2E2E',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
        'barlow-condensed': ['var(--font-barlow-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
