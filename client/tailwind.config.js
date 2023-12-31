/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#fdf900",
        "color": {
          50: "#ffff",
          100: "#000000"
        },
        "hd-gradient": "rgba(0, 0, 0, 0.5)"
      },
      height: {
        "header-md": "56px"
      },
    },
  },
  plugins: [],
}

