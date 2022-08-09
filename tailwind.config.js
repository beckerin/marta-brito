/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#CEB28B",
      secondary: "#481324",
      red: "#481324",
      black: "#061118",
      white: "#DAD4C6",
    },
    fontFamily: {
      releway: ["Raleway", "sans-serif"],
      source: ["Source Serif 4", "sans-serif"],
    },
    borderRadius: {
      "6xl": "6rem",
    },
    extend: {
      height: {
        176: "44rem",
      },
    },
  },
  plugins: [],
};
