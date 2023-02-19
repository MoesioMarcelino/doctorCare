import styles from './styles.module.scss'

type LogoProps = {
  theme?: 'green' | 'white'
}

export function Logo({ theme = 'green' }: LogoProps) {
  return (
    <div className={theme === 'green' ? styles.logoGreen : styles.logoWhite}>
      Doctor<span>Care</span>
    </div>
  )
}
