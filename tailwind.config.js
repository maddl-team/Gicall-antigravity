/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fff0f0',
          100: '#ffe5e5',
          200: '#ffc0c0',
          300: '#ffa0a0',
          400: '#ff6060',
          500: '#ff0000',
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        slate: {
          900: '#191c25',
        },
      },
    },
  },
  plugins: [],
}
