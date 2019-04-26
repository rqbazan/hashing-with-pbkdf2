import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])

  return [debounced, setDebounced]
}

export default useDebounce
