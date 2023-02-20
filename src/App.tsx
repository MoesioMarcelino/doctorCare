import { Banner, Services, About } from '@/components'

import styles from './styles.module.scss'

export function App() {
  return (
    <div className={styles.container}>
      <Banner />
      <Services />
      <About />
    </div>
  )
}
