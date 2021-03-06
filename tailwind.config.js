module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark: '#271847',
        pinky: '#FFB7D5',
        meow: '#FFF9E2'
      },
      minHeight: theme => theme('spacing')
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
