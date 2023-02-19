import { useEffect, useState } from 'react'

export function getWindowDimensions() {
  const { innerWidth, innerHeight } = window
  return {
    width: innerWidth,
    height: innerHeight,
    isMobile: innerWidth <= 1021
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
