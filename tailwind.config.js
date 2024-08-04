/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        secondary:'#008d8a',

      },
      fontFamily:{
        body:['Tajawal']
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

