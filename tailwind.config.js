/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070D1D',
          darker: '#040812',
          card: '#0D162B',
          red: '#E62B3A',
          redGlow: '#FF3344',
          accent: '#FF7A00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(230, 43, 58, 0.65), 0 0 50px rgba(230, 43, 58, 0.25)',
        'glow-red-lg': '0 0 35px rgba(230, 43, 58, 0.8), 0 0 70px rgba(230, 43, 58, 0.4)',
        'glow-bar': '0 0 15px rgba(230, 43, 58, 0.9), 0 0 30px rgba(230, 43, 58, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
