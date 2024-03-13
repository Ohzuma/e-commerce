/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "650px",
        xs: "450px",
        md: "870px",
        "2xl": "1536px",
        "2xxl": "1177px",
        "3xl": "1920px", // Example of another new breakpoint
      },
    },
    fontFamily: {
      poppins: "'Popins',sans-serif",
    },
  },

  plugins: [],
};
