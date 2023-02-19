import { personaBanner, whatsappWhite } from '@/assets'
import { PrimaryButton } from '@/components'

import styles from './styles.module.scss'

export function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <small>Boas-vindas a doctorcare 👋️</small>
          <h2>Assistência médica simplificada para todos</h2>
          <span>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e
            proporcionar uma cura a longo prazo.
          </span>
          <PrimaryButton>
            <img src={whatsappWhite} alt="Whatsapp white icon" />
            Agende sua consulta
          </PrimaryButton>
        </div>
        <div className={styles.rightSide}>
          <img src={personaBanner} alt="Persona banner" />
        </div>
      </div>
    </div>
  )
}
