module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'back-blue':'#1F2833',
       'cont-green' : '#3c7d7a',
       'cont-light' : '#66FCF1',
       'btn-blue' : '#304c6e',
       'nav' : '#1e2329',
      }),
    textColor: theme => ({
    ...theme('colors'),
    'primary': '#3490dc',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
    'back-blue':'#1F2833',
    'cont-green' : '#3c7d7a',
    'light-gray': '#a6a6a6',
  }),
  borderColor: theme => ({
    ...theme('colors'),
    'primary': '#3490dc',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
    'back-blue':'#1F2833',
    'cont-green' : '#3c7d7a',
    'light-gray': '#a6a6a6',
  }),
      

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}