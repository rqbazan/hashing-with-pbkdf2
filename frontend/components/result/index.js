import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../loader'
import EmptyState from './empty-state'
import Hashing from './hashing'
import { Container } from './elements'

const Result = props => {
  const { hashing, loading } = props

  if (loading) {
    return <Loader style={{ margin: '0 auto' }} />
  }

  if (!hashing) {
    return <EmptyState style={{ minHeight: 400, marginTop: 32 }} />
  }

  return (
    <Container>
      <Hashing header="Text" content={hashing.text} />
      <Hashing header="Random Salt" content={hashing.salt} />
      <Hashing header="Hash" content={hashing.hash} />
    </Container>
  )
}

Result.defaultProps = {
  hashing: null
}

Result.propTypes = {
  loading: PropTypes.bool.isRequired,
  hashing: PropTypes.object
}

export default Result
