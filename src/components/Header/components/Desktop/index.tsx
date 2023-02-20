import { SecondaryButton, Logo } from '@/components'
import { MenuListProps } from '@/components/Header'
import { useWindow } from '@/hooks'

import styles from './styles.module.scss'

type HeaderDesktopProps = {
  menuList: MenuListProps[]
}

export function HeaderDesktop({ menuList }: HeaderDesktopProps) {
  const { isScrollDown } = useWindow()

  const logoTheme = isScrollDown ? 'white' : 'green'
  const containerClassName = `${styles.container} ${isScrollDown && styles.containerGreen}`
  const menuClassName = `${styles.menu} ${isScrollDown && styles.menuGreen}`
  const buttonClassName = isScrollDown ? styles.buttonContainer : ''

  return (
    <div className={containerClassName}>
      <div className={styles.wrapper}>
        <Logo theme={logoTheme} />
        <div className={menuClassName}>
          {menuList.map(({ label }, index) => (
            <span key={label + '-' + index}>{label}</span>
          ))}
        </div>
        <div className={buttonClassName}>
          <SecondaryButton>Agendar consulta</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
