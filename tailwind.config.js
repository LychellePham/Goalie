/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {


    extend: {

      boxShadow: {
        'custom': '10px 10px 0px 0px rgba(62, 63, 91, 1)',
      },

      fontFamily: {
        sans: ['var(--font-jersey-20)', 'cursive'],
      },

      
    },
  },
  plugins: [],
}



