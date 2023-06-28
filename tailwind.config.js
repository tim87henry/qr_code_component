/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'hsl(212, 45%, 89%)'
      }
    },
  },
  plugins: [],
}

