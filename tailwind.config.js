/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "code": ["Code"]
      },
    },
  },
  plugins: [],
  darkMode: "class",
}