/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        midnight: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#364fc7',
          800: '#1e3a8a',
          900: '#0f1f4d',
          950: '#060d21',
        },
        ocean: {
          50: '#edfafa',
          100: '#d5f5f6',
          200: '#afebed',
          300: '#7edce2',
          400: '#16bdca',
          500: '#0694a2',
          600: '#047481',
          700: '#036672',
          800: '#023b42',
          900: '#012429',
          950: '#001214',
        },
      },
    },
  },
  plugins: [],
};