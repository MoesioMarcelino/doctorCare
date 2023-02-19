import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button {...props} className={styles.buttonContainer}>
      {children}
    </button>
  )
}
