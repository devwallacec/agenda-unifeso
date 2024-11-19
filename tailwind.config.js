/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    fontFamily: {
      "sans": ['Poppins', 'sans-serif'],
      "secondary": ['Barlow Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": "#0c326f",
      },
      scale: {
            '-100': '-1',
      }
    },
  },
  plugins: [],
}