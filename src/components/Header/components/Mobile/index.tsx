import { Logo, PrimaryButton } from '@/components'
import { MenuListProps } from '@/components/Header'

import { hamburguer, instagram, facebook, youtube, close } from '@/assets'

import styles from './styles.module.scss'
import { useState } from 'react'

type HeaderMobileProps = {
  menuList: MenuListProps[]
}

const socialMediaList = [
  { icon: instagram, alt: 'Instagram icon' },
  { icon: facebook, alt: 'Facebook icon' },
  { icon: youtube, alt: 'Youtube icon' }
]

export function HeaderMobile({ menuList }: HeaderMobileProps) {
  const [menuActivated, setMenuActivated] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <Logo theme="white" />
        <img
          src={menuActivated ? close : hamburguer}
          alt={menuActivated ? 'Close icon' : 'Hamburguer icon'}
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
