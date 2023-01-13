

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        BenPioneer: "'Ben Pioneer', sans-serif",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
