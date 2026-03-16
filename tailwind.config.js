/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#202724',
          light: '#F6F6F5',
        },
        accent: {
          gold: '#D4A15A',
          'gold-light': '#D4A15A',
          'gold-dark': '#C9973E',
        },
        gray: {
          50: '#F6F6F5',
          100: '#F6F6F5',
          200: '#C6C4BC',
          300: '#C6C4BC',
          400: '#9FA6A0',
          500: '#787C77',
          600: '#4E5859',
          700: '#4E5859',
          800: '#202724',
          900: '#202724',
        },
        brand: {
          dark: '#202724',
          'dark-soft': '#4E5859',
          stone: '#787C77',
          'stone-light': '#9FA6A0',
          beige: '#C6C4BC',
          'white-soft': '#F6F6F5',
          gold: '#D4A15A',
          'gold-strong': '#C9973E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

