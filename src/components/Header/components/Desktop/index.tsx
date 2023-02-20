import { SecondaryButton, Logo } from '@/components'
import { MenuListProps } from '@/components/Header'

import styles from './styles.module.scss'

type HeaderDesktopProps = {
  menuList: MenuListProps[]
}

export function HeaderDesktop({ menuList }: HeaderDesktopProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.menu}>
          {menuList.map(({ label }, index) => (
            <span key={label + '-' + index}>{label}</span>
          ))}
        </div>
        <SecondaryButton>Agendar consulta</SecondaryButton>
      </div>
    </div>
  )
}
