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
      },
    //   backgroundImage: theme=> ({
    //     'custom-gradient': 'linear-gradient(130deg, [#0A0D17] 25%, [#19213D] 25%, [#500724] 25%)',
    // }),
    
    },
      
  },
  plugins: [],
}