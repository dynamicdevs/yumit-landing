const themeHorizon = require('./settings/tailwind/horizon/amethyst');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: themeHorizon,
  plugins: [],
}
