const sveltePreprocess = require('svelte-preprocess')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  },
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    [
      '@snowpack/plugin-svelte',
      {
        preprocess: sveltePreprocess({
          postcss: {
            plugins: [tailwindcss, autoprefixer]
          }
        })
      }
    ]
  ]
}
