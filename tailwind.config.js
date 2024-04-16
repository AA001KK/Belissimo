/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowCard: "5px 2px 30px hsla(257, 8%, 83%, .3)",
        shadowKombo:"-5px 0 15px rgba(0,0,0,.2)",
        shadowUlButton: "-5px 0 15px rgba(0,0,0,.2)",
      shadowCancelBtn:"2px 2px 10px rgba(0,0,0,.1)"

      },
      backgroundColor : {
        bgBoxMenu: "rgba(0, 0, 0, .7)",
        backgroundModal:"rgba(0, 0, 0, .16)"

        
      },
      scale: {
        scaleCard: "1.04"
      }
    },
    textColor: {
      "footerColor":"hsla(0, 0%, 100%, .5)" 
    }
  },
  plugins: [],
}