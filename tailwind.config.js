/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgColor: "#ffffff",
        textBg: "#003566",
        touch: "#004274"
      },
      borderWidth: {
        'none': '0'
      },
      skew: {
        '17': '17deg',
      }
    },
    fontFamily:{
      jost:["Jost","open sans"]
    }
  },
  plugins: [],
}

