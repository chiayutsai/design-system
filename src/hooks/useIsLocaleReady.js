import { useState, useEffect } from 'react'
import Locale from 'locales'

const useIsLocaleReady = () => {
  const [isLocaleReady, setIsLocaleReady] = useState(false)
  useEffect(() => {
    const onReady = () => {
      setIsLocaleReady(true)
    }

    const isReady = Locale.initialized
    if (isReady) {
      onReady()
    } else {
      Locale.onInitialized(onReady)
    }

    return () => {
      Locale.offInitialized(onReady)
    }
  }, [])

  return isLocaleReady
}

export default useIsLocaleReady
