import { createGlobalStyle, css } from 'styled-components'

const sharedStyle = css`
  box-sizing: border-box;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
`

const AppStyle = createGlobalStyle`
  *, *:before, *:after {
    ${sharedStyle}
  }

  html, body {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: antialiased;
    background-color: #1a8a70;
    font-family: 'Roboto', sans-serif;
    font-smoothing: antialiased;
    height: auto;
    width: 100%;
    ${sharedStyle}
  }

  :not(input) {
    user-select: none;
  }
`

export default AppStyle
