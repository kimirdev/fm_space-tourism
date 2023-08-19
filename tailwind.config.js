/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lavender: "#D0D6F9",
      white: "#FFFFFF",
      black: "#0B0D17",
    },
    fontFamily: {
      barlow: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair Regular", "serif"],
    },
    // extend: {},
  },
  plugins: [],
};
