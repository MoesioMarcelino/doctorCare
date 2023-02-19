import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
  return (
    <button {...props} className={styles.buttonContainer}>
      {children}
    </button>
  )
}
