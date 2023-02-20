import { logoGreen, logoWhite } from '@/assets'

type LogoProps = {
  theme?: 'green' | 'white'
}

export function Logo({ theme = 'green' }: LogoProps) {
  if (theme === 'white') {
    return <img src={logoWhite} alt="DoctorCare logo white" />
  }

  return <img src={logoGreen} alt="DoctorCare logo white" />
}
