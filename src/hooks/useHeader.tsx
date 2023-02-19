import { useContext } from 'react'
import { HeaderContext, HeaderContextProps } from '@/contexts'

export function useHeader(): HeaderContextProps {
  const context = useContext(HeaderContext)

  if (!context) {
    throw new Error('useHeader must be used within an HeaderProvider')
  }

  return context
}
