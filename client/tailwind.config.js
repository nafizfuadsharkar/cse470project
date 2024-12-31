/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      Poppins : "Poppins"
    },
    extend: {
      animation : {
        slide : "slide 25s linear infinite"
      },
      keyframes : {
        slide : {
          "0%, 100%" : {transform : "translateX(5%)"},
          "50%" : {transform : "translateX(-120%)"}
        }
      }
    },
  },
  plugins: [require("daisyui")],
}