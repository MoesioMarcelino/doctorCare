import { Logo, SocialMedia } from '@/components'

import styles from './styles.module.scss'

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.logoContainer}>
            <Logo theme="white" />
          </div>
          <small>©2022 - DoctorCare.</small>
          <small>Todos os direitos reservados.</small>
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}
