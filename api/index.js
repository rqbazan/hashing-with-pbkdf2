import crypto from 'crypto'

export default (req, res) => {
  const salt = crypto.randomBytes(16).toString('base64')

  const buffer = Buffer.from(salt, 'base64')

  const { text } = req.query

  const hash = crypto
    .pbkdf2Sync(text, buffer, 10000, 64, 'sha1')
    .toString('base64')

  res.json({ salt, hash, text })
}
