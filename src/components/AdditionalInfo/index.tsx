import styles from './styles.module.scss'

export function AdditionalInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>+3.500</h2>
        <span>Pacientes atendidos</span>
      </div>
      <div className={styles.info}>
        <h2>+15</h2>
        <span>Especialistas disponíveis</span>
      </div>
      <div className={styles.info}>
        <h2>+10</h2>
        <span>Anos no mercado</span>
      </div>
    </div>
  )
}
