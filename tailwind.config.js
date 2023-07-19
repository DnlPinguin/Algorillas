/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        colors: {
          'primary': '#ff8800',
          'neutral-dark': '#010A0F',
        },
      },
      
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
}
