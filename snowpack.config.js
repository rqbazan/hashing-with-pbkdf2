const httpProxy = require('http-proxy')
const sveltePreprocess = require('svelte-preprocess')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const proxy = httpProxy.createServer({
  target: 'http://localhost:3000' // vercel default port on dev
})

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  },
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => proxy.web(req, res)
    }
  ],
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
