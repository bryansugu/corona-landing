/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js}'],
  
  theme: {
    extend: {
      colors: {
        'azul-medio': '#0069B4',
        'azul-profundo': '#003865',
        'neutral-25': '#F5F5F5'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

