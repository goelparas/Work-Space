/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx,ts,tsx}"],
  theme: {
    screens:{
      sm:"300px",
      smd:"450px",
      md: "768px",
      lg:"1024px",
      xl:"1256px"
    },

backgroundColor:{
  primarypurple: "#48016C",
  hovergrey : "#808080"
},
    extend: {},
    
  },
  plugins: [],
}