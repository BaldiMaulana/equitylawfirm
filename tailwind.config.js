/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors:{
          pri:'#312800',
          primary:'#635000',
          yellow: '#d3bb51',
          flow:'#f2ecbe',
          clas:'#ccc693 '
        
      },
    },
  },
  plugins: [],
}

