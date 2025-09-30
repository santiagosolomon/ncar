/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 important
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      // Enable print variant
      margin: ['print'],
      padding: ['print'],
    },
  },
};
