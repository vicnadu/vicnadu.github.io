/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'XXII': ['XXII']
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

