/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f6f2f0',
          100: '#e2d7d1',
          200: '#d4c4bb',
          300: '#c1a99c',
          400: '#b59989',
          500: '#a27f6b',
          600: '#937461',
          700: '#735a4c',
          800: '#59463b',
          900: '#44352d',
        },
        orange: {
          50: '#fff4ed',
          100: '#ffddc8',
          200: '#ffccad',
          300: '#ffb588',
          400: '#ffa771',
          500: '#ff914d',
          600: '#e88446',
          700: '#b56737',
          800: '#8c502a',
          900: '#6b3d20',
        },
      },
    },
  },
  plugins: [],
}
