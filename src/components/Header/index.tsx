import { useWindowDimensions } from '@/hooks/useWindowDimentions'
import { HtmlHTMLAttributes } from 'react'
import { HeaderDesktop, HeaderMobile } from './components'

import styles from './styles.module.scss'

export type MenuListProps = { label: string; route: string }

const menuList: MenuListProps[] = [
  { label: 'Início', route: '/' },
  { label: 'Sobre', route: '/about' },
  { label: 'Serviços', route: '/services' },
  { label: 'Depoimentos', route: '/testimonials' }
]

export function Header(props: HtmlHTMLAttributes<HTMLDivElement>) {
  const { isMobile } = useWindowDimensions()

  if (isMobile) {
    return (
      <div className={styles.container}>
        <HeaderMobile {...props} menuList={menuList} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <HeaderDesktop {...props} menuList={menuList} />
    </div>
  )
}
