/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#071C18',
        'forest-dark': '#0D2923',
        'emerald-deep': '#123C32',
        'gold-champagne': '#D8B56A',
        'gold-light': '#E8CF91',
        'ivory-warm': '#F8F3E7',
        'text-muted': '#C9C4B6',
        'text-dark': '#16231F'
      },
      fontFamily: {
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        royal: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
