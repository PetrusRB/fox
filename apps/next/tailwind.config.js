/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('nativewind/preset')],
  important: 'html',
  theme: {
    extend: {},
  },
}
