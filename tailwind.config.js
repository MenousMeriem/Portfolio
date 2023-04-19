/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["synthwave", "dark"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Recursive", "sans-serif"],
      },
    },
  },
  plugins:[require("daisyui")],
}