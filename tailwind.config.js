/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        'protomo': ['Protomo', 'sans-serif'],
        'Excelorate-Font': ['Excelorate-font', 'sans-serif'],
      }
    },
    colors: {
      'cotton-candy': '#f9a8d4',
      'periwinkle': '#818cf8',
      'fuchsia': '#e879f9',
      'aquamarine': '#00d1dc',
      'aqua': '#a1ffff',
      'soft-aqua': '#9efffd',
      'lavender': '#d8b4fe',
      'mid-puple': '#a5b4fc',
      'white': '#ffffff',
      'neutral-white': '#fafafa',
      'hot-pink': '#ff1e7a',
      'soft-pink': '#fecce6',
      'purple-pink': '#fca3ff',
      'clueless': '#fb6bbd',
      'flamingo': '#f53f81',
    },
  },
  plugins: [],
}