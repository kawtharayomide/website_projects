/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["Montserrat"],
        inter: ["Inter"],
        poppins: ["Poppins"],
        quicksand: ["Quicksand"],
      }
    },
  },
  plugins: [],
}