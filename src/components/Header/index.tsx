import { useWindowDimensions } from '@/hooks/useWindowDimentions'
import { HeaderDesktop, HeaderMobile } from './components'

export type MenuListProps = { label: string; route: string }

const menuList: MenuListProps[] = [
  { label: 'Início', route: '/' },
  { label: 'Sobre', route: '/about' },
  { label: 'Serviços', route: '/services' },
  { label: 'Depoimentos', route: '/testimonials' }
]

export function Header() {
  const { isMobile } = useWindowDimensions()

  if (isMobile) {
    return <HeaderMobile menuList={menuList} />
  }

  return <HeaderDesktop menuList={menuList} />
}
