/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#CFB997",
        secondary: "#9BA17B",
        accent: "#61764B"
      }
    },
  },
  plugins: [],
}