module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-color': '#4C3398',
        'primary-brand-color': '#5D3EBC',
        'secondary-brand-color': '#7849f7',
        'register-color': '#FAFAFA',
        'header': '#D7D6FC',
        'brand-yellow': '#FFD300',
        'facebook': '#3c5a99',
        'facebook-button': '#E7EAF1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
