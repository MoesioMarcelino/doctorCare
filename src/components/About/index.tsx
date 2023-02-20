import { personaAbout } from '@/assets'

import styles from './styles.module.scss'

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <img src={personaAbout} alt="Persona doctor about us" />
        </div>
        <div className={styles.rightSide}>
          <small>SOBRE NÓS</small>
          <h3>Entenda quem somos e por que existimos</h3>
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non.
          </span>
        </div>
      </div>
    </div>
  )
}
