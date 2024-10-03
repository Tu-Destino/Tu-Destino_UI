/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomImg: {
          '0%': {transform:'scale(1)' },
          '100%': {transform:'scale(1.1)' },
        },
        deszommImg: {
          '0%': {transform:'scale(1.1)' },
          '100%': { transform:'scale(1)'},
        },
      },
      animation: {
        zoomImg: 'zoomImg 0.3s ease-out forwards',
        deszommImg: 'deszommImg 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}

