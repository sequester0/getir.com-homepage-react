module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'brand-color': '#4C3398',
        'primary-brand-color': '#5D3EBC',
        'secondary-brand-color': '#7849f7'
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'brand-color': '#4C3398',
        'primary-brand-color': '#5D3EBC',
        'secondary-brand-color': '#7849f7'
      }),
      textColor: {
        'header': '#D7D6FC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
