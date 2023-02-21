import { SecondaryButton, Logo } from '@/components'
import { site } from '@/consts'
import { useMenu, useWindow } from '@/hooks'
import { openSite } from '@/utils'

import styles from './styles.module.scss'

export function MenuDesktop() {
  const { isScrollDown } = useWindow()
  const { menuList, onClickMenuItem } = useMenu()

  const logoTheme = isScrollDown ? 'white' : 'green'
  const containerClassName = `${styles.container} ${isScrollDown && styles.containerGreen}`
  const menuClassName = `${styles.menu} ${isScrollDown ? styles.menuGreen : ''}`
  const buttonClassName = isScrollDown ? styles.buttonContainer : ''
  const menuItemClassName = `${isScrollDown ? styles.menuItemActive : styles.menuGreenItemActive}`

  return (
    <div className={containerClassName}>
      <div className={styles.wrapper}>
        <Logo theme={logoTheme} />
        <div className={menuClassName}>
          {menuList.map(({ label, id, active }) => (
            <span
              key={id}
              className={active ? menuItemClassName : ''}
              onClick={() => onClickMenuItem(id)}
            >
              {label}
            </span>
          ))}
        </div>
        <div className={buttonClassName}>
          <SecondaryButton onClick={openSite}>Agendar consulta</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
