/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI Symbol"'],
        verdana: ['"Verdana"'],
      },
      grayscale: {
        75: "75%",
      },
    },
  },
  plugins: [],
};
