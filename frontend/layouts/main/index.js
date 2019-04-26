import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './elements'
import Anchor from 'components/anchor'

const MainLayout = props => {
  const { children } = props

  return (
    <Container>
      {children}
      <span>
        Made with ❤️ for the people of the internet. By{' '}
        <Anchor href="https://github.com/rqbazan" target="_black">
          @rqbazan
        </Anchor>
      </span>
    </Container>
  )
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default MainLayout
