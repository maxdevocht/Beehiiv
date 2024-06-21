/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: '#51555e',
        black: '#050519',
        pink: '#f092dd',
        lightPink: '#ffc8eb',
        lighterPink: '#ffe3f4',
        purple: '#9399f4',
        blue: '#0A65FC',
        darkBlue: '#3843d0',
        lightBlue: '#f7f5ff',
        yellow: '#facc17',
      },
      fontFamily: {
        sans: "var(--font-manrope)",
        josefin: "var(--font-josefin)",
      },
    },
  },
  plugins: [],
}