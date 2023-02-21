import { useContext } from 'react'
import { MenuContext, MenuContextProps } from '@/contexts'

export function useMenu(): MenuContextProps {
  const context = useContext(MenuContext)

  if (!context) {
    const message = 'useMenu must be used within an MenuProvider'
    console.error(message)
    throw new Error(message)
  }

  return context
}
