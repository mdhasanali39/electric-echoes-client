const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
  module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "'Roboto', sans-serif"
      },
      backgroundColor: {
        'custom-yellow' : 'rgb(254,215,0)'
      },
      colors: {
        'custom-blue-text': 'rgb(106,163,225)'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
});

