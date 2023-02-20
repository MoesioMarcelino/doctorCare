import { Banner, AdditionalInfo } from '@/components'

import styles from './styles.module.scss'

export function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.additionalInfo}>
        <AdditionalInfo />
      </div>
    </div>
  )
}
