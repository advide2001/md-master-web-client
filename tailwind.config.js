/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-color': '#E46643',
        'primary-1': '#343a40',
        'primary-2': '#212529',
        'primary-3': '#151619',
      },
    },
  },
  plugins: [],
}
