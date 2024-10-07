/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = { extend: {}, };
export const plugins = [];

module.exports = {
    theme: {
      extend: {
        animation: {
          'wave': 'gradientWave 15s ease infinite',
        },
        keyframes: {
          gradientWave: {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          },
        },
        backgroundSize: {
          'wave': '400% 400%',
        }
      },
    },
    plugins: [],
  }
  