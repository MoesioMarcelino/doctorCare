import { Header } from '@/components'
import { createContext, ReactNode } from 'react'

export type HeaderContextProps = {}

export const HeaderContext = createContext<HeaderContextProps>({} as HeaderContextProps)

export function HeaderProvider({ children }: { children: ReactNode }) {
  return (
    <HeaderContext.Provider value={{}}>
      <Header />
      {children}
    </HeaderContext.Provider>
  )
}
