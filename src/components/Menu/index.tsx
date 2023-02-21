import { useWindow } from '@/hooks'
import { MenuDesktop, MenuMobile } from './components'

import styles from './styles.module.scss'

export function Menu() {
  const { isMobile, isScrollDown } = useWindow()

  const containerClassName = `${styles.container} ${isScrollDown && styles.shaddowContainer}`

  if (isMobile) {
    return (
      <div className={containerClassName}>
        <MenuMobile />
      </div>
    )
  }

  return (
    <div className={containerClassName}>
      <MenuDesktop />
    </div>
  )
}
