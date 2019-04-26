const { compilerOptions } = require('./jsconfig.json')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: dev }],
    [
      'module-resolver',
      {
        root: '.',
        alias: compilerOptions.paths
      }
    ]
  ]
}
