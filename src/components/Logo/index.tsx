import { logoGreen, logoWhite } from '@/assets'
import { site } from '@/consts'
import { scrollToTop } from '@/utils'

import styles from './styles.module.scss'

export type LogoProps = {
  theme?: 'green' | 'white'
}

export function Logo({ theme = 'green' }: LogoProps) {
  function onClickLogo() {
    scrollToTop()
    window.open(site, '_blank')
  }

  if (theme === 'white') {
    return (
      <div className={styles.container}>
        <img src={logoWhite} alt="DoctorCare logo white" onClick={onClickLogo} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <img src={logoGreen} alt="DoctorCare logo white" onClick={onClickLogo} />
    </div>
  )
}
