import { useWindow } from '@/hooks'
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
  const { isMobile, isScrollDown } = useWindow()

  const containerClassName = `${styles.container} ${isScrollDown && styles.shaddowContainer}`

  if (isMobile) {
    return (
      <div className={containerClassName}>
        <HeaderMobile menuList={menuList} />
      </div>
    )
  }

  return (
    <div className={containerClassName}>
      <HeaderDesktop menuList={menuList} />
    </div>
  )
}
