/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0D1821",
        night: "#0C0F0A",
        "white-100": "#FFFDF7",
        "blue-10": "#0A2342",
        "white-200": "#F6F7EB",
      },
      fontFamily: {
        vibe: ["Great Vibes", "cursive"],
        pop: ["Poppins", "sans-serif"],
        sat: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
