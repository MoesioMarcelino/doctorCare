import { useEffect, useState } from 'react'
import { Logo, SecondaryButton } from '@/components'
import { MenuListProps } from '@/components/Header'

import { hamburguerGreen, hamburguerWhite, instagram, facebook, youtube, close } from '@/assets'

import styles from './styles.module.scss'
import { useOverflow, useWindow } from '@/hooks'

type HeaderMobileProps = {
  menuList: MenuListProps[]
}

const socialMediaList = [
  { icon: instagram, alt: 'Instagram icon' },
  { icon: facebook, alt: 'Facebook icon' },
  { icon: youtube, alt: 'Youtube icon' }
]

export function HeaderMobile({ menuList }: HeaderMobileProps) {
  const { isScrollDown } = useWindow()
  const { disableOverflowY, enableOverflowY } = useOverflow()

  const [menuActivated, setMenuActivated] = useState(false)

  const alt = menuActivated ? 'Close icon' : 'Hamburguer icon'
  const src = isScrollDown ? hamburguerWhite : menuActivated ? close : hamburguerGreen
  const containerClassName = `${styles.containerHeader} ${
    isScrollDown ? styles.menuGreen : menuActivated ? styles.menuGreen : styles.menuTransparent
  }`
  const logoTheme = isScrollDown ? 'white' : menuActivated ? 'white' : 'green'

  useEffect(() => {
    menuActivated ? disableOverflowY() : enableOverflowY()
  }, [menuActivated])

  return (
    <div className={styles.container}>
      <div className={containerClassName}>
        <Logo theme={logoTheme} />
        <img
          src={src}
          alt={alt}
          className={styles.hamburguerIcon}
          onClick={() => setMenuActivated((oldState) => !oldState)}
        />
      </div>
      {menuActivated && (
        <div className={styles.menuContainer}>
          {menuList.map(({ label }, index) => (
            <span key={label + '-' + index} title={label}>
              {label}
            </span>
          ))}

          <div className={styles.buttonContainer}>
            <SecondaryButton>Agendar consulta</SecondaryButton>
          </div>

          <div className={styles.socialMedia}>
            {socialMediaList.map(({ alt, icon }, index) => (
              <img src={icon} alt={alt} title={alt} key={alt + '-' + index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
