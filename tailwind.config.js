/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-rgba': 'rgba(237, 216, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

