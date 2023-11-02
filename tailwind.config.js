/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        'unite-orange': '#F24333',
      },
      backgroundImage: {
        'unite-blob': "url('/public/assets/images/bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
