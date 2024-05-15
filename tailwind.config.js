/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50a1ff",
        secondary: "#3ad458",
        pink: "#ed317f"
      }
    },
  },
  plugins: [],
}

