/** @type {import('tailwindcss').Config} */
export default {
  ccontent: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui:{
    theme : ["forest"],
  }
}

