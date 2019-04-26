import React from 'react'
import App, { Container } from 'next/app'
import AppStyle from 'components/app-style'

class OwnApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <AppStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}

OwnApp.getInitialProps = App.getInitialProps

export default OwnApp
