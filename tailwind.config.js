/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        "screen-small": "100svh"
      }
    }
  },
  daisyui: {
    themes: [
      {
        'retro' : {
          ...require("daisyui/src/theming/themes")["[data-theme=retro]"],
          "accent": "#3A8265",
          "accent-focus": "#006C5E",
        }
      },     
    ]
  }
};
