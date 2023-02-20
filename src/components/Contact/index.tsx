import { mapPinGreen, mailGreen, personaContact } from '@/assets'
import { PrimaryButton } from '@/components'

import styles from './styles.module.scss'

export function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h3>Entre em contato com a gente!</h3>
          <div className={styles.info}>
            <img src={mapPinGreen} alt="Map pin icon green" />
            <span>Juazeiro do Norte, CE</span>
          </div>
          <div className={styles.info}>
            <img src={mailGreen} alt="Mail icon green" />
            <span>moesiomarcelino.com</span>
          </div>

          <PrimaryButton>Agendae sua consulta</PrimaryButton>
        </div>
        <img className={styles.rightSide} src={personaContact} alt="Personal contact image" />
      </div>
    </div>
  )
}
