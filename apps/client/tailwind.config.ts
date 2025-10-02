/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 important
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        30: "30px",
        10: "10px", // already exists in default, but for consistency
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      // Enable print variant
      margin: ["print"],
      padding: ["print"],
    },
  },
};
