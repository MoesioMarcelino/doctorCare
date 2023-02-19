import { HtmlHTMLAttributes, useState } from 'react'
import { Logo, PrimaryButton } from '@/components'
import { MenuListProps } from '@/components/Header'

import { hamburguerWhite, hamburguerGreen, instagram, facebook, youtube, close } from '@/assets'

import styles from './styles.module.scss'

type HeaderMobileProps = {
  menuList: MenuListProps[]
} & HtmlHTMLAttributes<HTMLDivElement>

const socialMediaList = [
  { icon: instagram, alt: 'Instagram icon' },
  { icon: facebook, alt: 'Facebook icon' },
  { icon: youtube, alt: 'Youtube icon' }
]

export function HeaderMobile({ menuList, ...props }: HeaderMobileProps) {
  const [menuActivated, setMenuActivated] = useState(false)

  const alt = menuActivated ? 'Close icon' : 'Hamburguer icon'
  const src = menuActivated ? close : hamburguerGreen
  const containerClassName = `${styles.containerHeader} ${
    menuActivated ? styles.menuGreen : styles.menuTransparent
  }`

  return (
    <div className={styles.container} {...props}>
      <div className={containerClassName}>
        <Logo theme={menuActivated ? 'white' : 'green'} />
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

          <PrimaryButton>Agendar consulta</PrimaryButton>

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
