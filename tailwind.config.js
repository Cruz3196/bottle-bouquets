/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'


export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [ daisyui ],
    daisyui: {
      themes: ["light", "dark", "pastel"],
  },
};