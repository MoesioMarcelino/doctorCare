import { createContext, ReactNode, useEffect, useState } from 'react'
import { Menu } from '@/components'
import { useWindow } from '@/hooks'

export type Menu = {
  label: string
  id: string
  active: boolean
  positionTop?: number
  positionBottom?: number
}

export type MenuContextProps = {
  isMenuOpened: boolean
  menuList: Menu[]
  toggleIsMenuOpened(): void
  onClickMenuItem(item: string): void
}

export const MenuContext = createContext<MenuContextProps>({} as MenuContextProps)

const menu: Menu[] = [
  { label: 'Início', id: 'banner-section', active: true },
  { label: 'Serviços', id: 'services-section', active: false },
  { label: 'Sobre', id: 'about-section', active: false },
  { label: 'Contato', id: 'contact-section', active: false }
]

export function MenuProvider({ children }: { children: ReactNode }) {
  const { scrollY } = useWindow()

  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [menuList, setMenuList] = useState(menu)

  function toggleIsMenuOpened() {
    setIsMenuOpened(oldState => !oldState)
  }

  function onClickMenuItem(item: string) {
    const section = document.getElementById(item)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setIsMenuOpened(false)
  }

  useEffect(() => {
    setMenuList(oldState =>
      oldState.map(({ id, ...rest }) => {
        const section = document.getElementById(id)!
        const { top, bottom } = section.getBoundingClientRect()

        const positionTop = Math.round(top + scrollY) - 100
        const positionBottom = Math.round(bottom + scrollY) - 100

        return {
          ...rest,
          id,
          positionTop,
          positionBottom,
          active: scrollY >= positionTop && scrollY < positionBottom
        }
      })
    )
  }, [scrollY])

  return (
    <MenuContext.Provider value={{ isMenuOpened, toggleIsMenuOpened, menuList, onClickMenuItem }}>
      <Menu />
      {children}
    </MenuContext.Provider>
  )
}
