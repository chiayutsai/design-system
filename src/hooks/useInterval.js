import { useEffect, useRef } from 'react'

const DEFAULT_DELAY = 1000
const useInterval = (callback, delay = DEFAULT_DELAY, pause = false) => {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (!pause) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [pause, delay])
}

export default useInterval
