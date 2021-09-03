module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)',
      }),
      height: {
        '500': '31.25rem',
      }, 
      spacing: {
        '0.1': '0.063rem',
      },
      colors: {
        'brand-color': '#4C3398',
        'primary-brand-color': '#5D3EBC',
        'secondary-brand-color': '#7849f7',
        'register-color': '#FAFAFA',
        'header': '#D7D6FC',
        'brand-yellow': '#FFD300',
        'facebook': '#3c5a99',
        'facebook-button': '#E7EAF1',
        'cards-txt': '#697488',
        'color-black': '#191919',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
