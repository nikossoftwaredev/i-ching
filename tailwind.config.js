/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        textPrimary: '#F7F7F7',
        textSecondary: '#3b82f6',
        textHover: '#6D9886',
        bgPrimary: '#393E46',
        bgSecondary: '#F2E7D5',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  }
};
