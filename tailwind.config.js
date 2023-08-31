/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        platinum: "#CFDBD5",
        alabaster: "#E8EDDF",
        saffron: "#F5CB5C",
        eerie: "#242423",
        jet: "#333533",
        vanilla: "#EFDC9E",
        jasmine: "#F2D47D",
        dark: "#0D1821",
        night: "#0C0F0A"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ['Source Code Pro', "monospace"],
        cru: ['Coiny', 'cursive']
      }
    },
  },
  plugins: [],
}

