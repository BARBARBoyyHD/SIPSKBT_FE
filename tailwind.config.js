/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'person': "url('/src/assets/person.png')",
        'form': "url('/src/assets/form.png')",
        "prosedur":"url('/src/assets/InspektoratProvSumsel.png')",
        "sumsel":"url('/src/assets/IMG_7535.JPG')",
        "logo":"url('/src/assets/IMG_7538.PNG')"
      }
    },
  },
  plugins: [],
}