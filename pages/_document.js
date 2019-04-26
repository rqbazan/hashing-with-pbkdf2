import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class OwnDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      const enhanceApp = App => {
        return props => sheet.collectStyles(<App {...props} />)
      }

      ctx.renderPage = () => {
        return originalRenderPage({ enhanceApp })
      }

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/images/hash.png"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default OwnDocument
