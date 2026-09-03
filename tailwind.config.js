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
          orange: '#F18604',
          gold: '#F1AB29',
          amber: '#FF9E1B',
          dark: '#080B12',
          darker: '#05070D',
          card: '#0F1523',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(241, 134, 4, 0.65), 0 0 50px rgba(241, 134, 4, 0.25)',
        'glow-orange-lg': '0 0 35px rgba(241, 134, 4, 0.8), 0 0 70px rgba(241, 171, 41, 0.4)',
        'glow-bar': '0 0 16px #F18604, 0 0 30px rgba(241, 171, 41, 0.5)',
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
