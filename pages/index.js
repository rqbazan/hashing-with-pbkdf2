import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Result from 'components/result'
import CTA from 'components/cta'
import MainLayout from 'layouts/main'
import useDebounce from 'hooks/use-debounce'

const requestApi = text => {
  return fetch(`/api?text=${text}`).then(res => res.json())
}

const HomePage = () => {
  const [text, setText] = useState('')
  const [hashing, setHashing] = useState(null)
  const [loading, setLoading] = useState(false)
  const [debouncedText, setDebouncedText] = useDebounce(text, 600)

  const updateHashing = async term => {
    try {
      setLoading(true)
      setHashing(await requestApi(term))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (debouncedText) {
      updateHashing(debouncedText)
    } else {
      setHashing(null)
    }
  }, [debouncedText])

  return (
    <MainLayout>
      <Head>
        <title>Hashing with pbkdf2</title>
      </Head>
      <CTA
        value={text}
        style={{ marginBottom: 16 }}
        onChange={setText}
        onEnterPress={() => setDebouncedText(text)}
      />
      <Result hashing={hashing} isLoading={loading} />
    </MainLayout>
  )
}

export default HomePage
