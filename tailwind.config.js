/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {fontFamily: {
        bit: ["Bit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },},
  },
  plugins: [],
}
