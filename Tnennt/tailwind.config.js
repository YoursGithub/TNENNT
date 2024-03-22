/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/Auth/*.html", "./dist/main/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'gotham-black': ['Gotham-Black', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [],
}
