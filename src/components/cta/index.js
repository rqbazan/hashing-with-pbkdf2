import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../anchor'
import { Input, Title } from './elements'

const CTA = props => {
  const { value, onChange, onEnterPress, style } = props

  return (
    <>
      <Title>
        Hashing with{' '}
        <Anchor href="https://en.wikipedia.org/wiki/PBKDF2" target="_blank">
          pbkdf2
        </Anchor>
      </Title>
      <Input
        style={style}
        value={value}
        placeholder="Enter a text to hash"
        onChange={e => onChange(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            onEnterPress()
          }
        }}
      />
    </>
  )
}

CTA.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterPress: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
}

export default CTA
