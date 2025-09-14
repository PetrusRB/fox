/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./App.tsx', '../../packages/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
