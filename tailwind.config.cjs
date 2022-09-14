/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-gradient': 'linear-gradient(135deg, rgba(247, 202, 201, 1) 0%, rgba(146, 168, 209, 1) 100%)'
      }
    },
  },
  plugins: [],
}
