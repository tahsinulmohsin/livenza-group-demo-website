/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        livenza: {
          primary: '#003366', // Deep corporate blue based on logo text
          dark: '#1B263B',
          sub: '#5D666F',
          light: '#E5E7EB', // Reference style light gray box
          green: '#22C55E', // Vibrant leaf green
          blue: '#1D4ED8',  // Solid blue
        },
        brand: {
          dark: '#2A3B39', // Dark gray/green reference box
          light: '#EAEBEA', // Light gray reference box
        }
      },
      fontFamily: {
        sans: ['"Myriad Variable Concept"', 'sans-serif'],
        heading: ['"Acumin Variable Concept"', 'sans-serif'],
        body: ['"Myriad Variable Concept"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #22C55E 0%, #1D4ED8 100%)',
      }
    },
  },
  plugins: [],
}
