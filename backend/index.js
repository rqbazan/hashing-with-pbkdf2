const crypto = require('crypto')
const { URL } = require('url')

const baseUrl = 'https://hashing-with-pbkdf2.rqbazan.now.sh'

module.exports = (req, res) => {
  const url = new URL(req.url, baseUrl)

  const text = url.searchParams.get('text')

  const salt = crypto.randomBytes(16).toString('base64')

  const buffer = Buffer.from(salt, 'base64')

  const hash = crypto
    .pbkdf2Sync(text, buffer, 10000, 64, 'sha1')
    .toString('base64')

  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify({ salt, hash, text }))
}
