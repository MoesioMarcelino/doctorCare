import { ReactNode } from 'react'
import { HeaderProvider } from '.'

type AppProviderProps = { children: ReactNode }

export function AppProvider({ children }: AppProviderProps) {
  return <HeaderProvider>{children}</HeaderProvider>
}
