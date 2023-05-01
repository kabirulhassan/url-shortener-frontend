/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '49': '49vw',
        '75': '75vw'
      }
    },
  },
  plugins: [],
}

