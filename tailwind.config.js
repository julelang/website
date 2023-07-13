/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'code': ['Code']
      },
    },
  },
  plugins: [],
}