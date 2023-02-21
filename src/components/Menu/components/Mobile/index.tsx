import { useEffect } from 'react'

import { Logo, SecondaryButton, SocialMedia } from '@/components'
import { hamburguerGreen, hamburguerWhite, close } from '@/assets'
import { useMenu, useOverflow, useWindow } from '@/hooks'
import { site } from '@/consts'

import styles from './styles.module.scss'
import { openSite } from '@/utils'

export function MenuMobile() {
  const { isScrollDown } = useWindow()
  const { disableOverflowY, enableOverflowY } = useOverflow()
  const { isMenuOpened, toggleIsMenuOpened, menuList, onClickMenuItem } = useMenu()

  const alt = isMenuOpened ? 'Close icon' : 'Hamburguer icon'
  const src = isScrollDown ? hamburguerWhite : isMenuOpened ? close : hamburguerGreen
  const containerClassName = `${styles.containerMenu} ${
    isScrollDown ? styles.menuGreen : isMenuOpened ? styles.menuGreen : styles.menuTransparent
  }`
  const logoTheme = isScrollDown ? 'white' : isMenuOpened ? 'white' : 'green'

  useEffect(() => {
    isMenuOpened ? disableOverflowY() : enableOverflowY()
  }, [isMenuOpened])

  return (
    <div className={styles.container}>
      <div className={containerClassName}>
        <Logo theme={logoTheme} />
        <img src={src} alt={alt} className={styles.hamburguerIcon} onClick={toggleIsMenuOpened} />
      </div>
      {isMenuOpened && (
        <div className={styles.menuContainer}>
          {menuList.map(({ label, id, active }) => (
            <span
              key={id}
              title={label}
              onClick={() => onClickMenuItem(id)}
              className={active ? styles.menuItemActive : ''}
            >
              {label}
            </span>
          ))}

          <div className={styles.buttonContainer}>
            <SecondaryButton onClick={openSite}>Agendar consulta</SecondaryButton>
          </div>

          <SocialMedia />
        </div>
      )}
    </div>
  )
}
