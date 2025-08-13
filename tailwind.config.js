/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // all your components
  ],
  theme: {
    extend: {
      colors: {
        background: "#1c1b29",
        accent: "#fff5fcff",
        primary: "#c084fc",
        highlight: "#f472b6",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
