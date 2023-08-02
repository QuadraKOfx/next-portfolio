/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      }
    },
    screens: {
      "2xl": {max: "1535px"},
      // => @media (max-width: 1535px)
      x1: {max: "1279px"},
      // => @media (max-width: 1279px)
      lg: {max: "1023px"},
      // => @media (max-width: 1023px)
      md: {max: "767px"},
      // => @media (max-width: 767px)
      sm: {max: "639px"},
      // => @media (max-width: 639px)
      xs: {max: "479px"},
      // => @media (max-width: 479px)
      min_lg: {min: "1279px"},
      // => @media (min-width: 1023)
      min_md: {min: "1023px"},
      // => @media (min-width: 1023)
    }
  },
  plugins: [],
}
