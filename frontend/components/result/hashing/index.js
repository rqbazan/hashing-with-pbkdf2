import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Container, Header, Content } from './elements'

const Hashing = props => {
  const { header, content } = props
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Container>
      <Header>{header}</Header>
      <CopyToClipboard text={content} onCopy={() => console.log('copied!')}>
        <Content
          isPressed={isPressed}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
        >
          {content}
        </Content>
      </CopyToClipboard>
    </Container>
  )
}

Hashing.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Hashing
