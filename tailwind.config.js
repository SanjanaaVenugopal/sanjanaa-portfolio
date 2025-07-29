/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // all your components
  ],
  theme: {
    extend: {
      colors: {
        background: '#1c1b29',
        accent: '#ff8fdf',
        primary: '#c084fc',
        highlight: '#f472b6'
      },
    },
  },
  plugins: [],
}

