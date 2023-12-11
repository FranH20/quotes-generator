/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      color: {
        primary: "#BEE3AE",
        secondary: "#F8F7F0",
        third: "#F2F0E4",
        fourth: "#96DED1",
        lightGreen: "#112707",
        hardGreen: "#6DA655",
        blackSpace: "#0D100B"
      },
      white: "#FFFFFF",
      black: "#000000",
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      gray: colors.gray,
      amber: colors.amber,
      green: colors.green,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
    },
    extend: {
      backgroundImage: {
        "background-image-generator": "url('img/background-example.jpg')",
        "vector-background": "url('img/repeating-chevrons.svg')",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [],
};
