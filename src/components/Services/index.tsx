import { ellipseCheckGreen } from '@/assets'

import styles from './styles.module.scss'

const description =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'

const serviceList = [
  { title: 'Problemas digestivos', description },
  { title: 'Saúde Hormonal', description },
  { title: 'Bem-estar mental', description },
  { title: 'Cuidados Pediátricos', description },
  { title: 'Autoimune e Inflamação', description },
  { title: 'Saúde do Coração', description }
]

function buildUniqueId(text: string) {
  return text.replace(/\s/g, '-').toLowerCase()
}

export function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.category}>SERVIÇOS</span>
        <h3 className={styles.title}>Como podemos ajudá-lo a se sentir melhor?</h3>
        <div className={styles.containerCards}>
          {serviceList.map(({ title, description }) => (
            <div key={buildUniqueId(title)} className={styles.card}>
              <img src={ellipseCheckGreen} alt="Ellipse checked icon" />
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
