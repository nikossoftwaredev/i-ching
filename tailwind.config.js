/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-small": "100svh",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          // "base-300": "#d6b9b6",
          // "base-200": "#f0e1df",
          // "base-100": "#f9f2f1",  
          "base-300": "#6ca79a",          
          "base-200": "#a5c9c1",          
          "base-100": "#bbd6d0", 
          "accent": "#6ca79a",
          "primary":"#d6b9b6",

        },
      },
    ],
  },
};
