import { useWindowDimensions } from '@/hooks/useWindowDimentions'
import { HeaderDesktop, HeaderMobile } from './components'

import styles from './styles.module.scss'

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
    return (
      <div className={styles.container}>
        <HeaderMobile menuList={menuList} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <HeaderDesktop menuList={menuList} />
    </div>
  )
}
