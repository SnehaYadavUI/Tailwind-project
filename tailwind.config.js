/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        dark: "#272A30",
        white: "#FFFFFF",
        sky: "#B1DDF1",
      },
    },
  },
  plugins: [],
};
