import { useEffect, useState } from 'react'

export function getWindowDimensions() {
  const { innerWidth, innerHeight, scrollY } = window
  return {
    width: innerWidth,
    height: innerHeight,
    isMobile: innerWidth <= 1021,
    scrollY,
    isScrollDown: scrollY >= 25
  }
}

export function useWindow() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return windowDimensions
}
