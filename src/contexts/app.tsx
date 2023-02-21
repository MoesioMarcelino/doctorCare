import { ReactNode } from 'react'
import { MenuProvider } from '.'

type AppProviderProps = { children: ReactNode }

export function AppProvider({ children }: AppProviderProps) {
  return <MenuProvider>{children}</MenuProvider>
}
