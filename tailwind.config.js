/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #f0f',
        'glow-xl': ' 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #f0f, 0 0 80px #f0f',
        'glow-sm': ' 0 0 3px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 18px #f0f, 0 0 25px #f0f',
      },
      colors: {
        dark:'#000',
        light:'#fff',
      }
    },
  },
  plugins: [],
}

