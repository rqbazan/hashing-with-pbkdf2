import React from 'react'
import { Container, Bounce } from './elements'

const Loader = props => {
  return (
    <Container {...props}>
      <Bounce />
      <Bounce />
      <Bounce />
    </Container>
  )
}

export default Loader
