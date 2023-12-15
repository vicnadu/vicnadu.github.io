/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}',
  'node_modules/preline/dist/*.js',
  'node_modules/@preline/overlay/*.js',],
  theme: {
    extend: {
      fontFamily: {
        'XXII': ['XXII'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

