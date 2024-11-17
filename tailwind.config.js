/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: { 
      screens: {
        '600px': '600px', 
      },
      colors: {
        primary:"#ffc001",
        secondary : "#ff9c01"
      },
      container: {
        center: true,
        padding :{
          DEFAULT : "2rem",
          sm: "1rem",
        }
      } 
    },
  },
  plugins: [],
}