import { facebook, instagram, youtube } from '@/assets'
import styles from './styles.module.scss'

const socialMediaList = [
  { icon: instagram, alt: 'Instagram icon' },
  { icon: facebook, alt: 'Facebook icon' },
  { icon: youtube, alt: 'Youtube icon' }
]

export function SocialMedia() {
  return (
    <div className={styles.container}>
      {socialMediaList.map(({ alt, icon }, index) => (
        <img src={icon} alt={alt} title={alt} key={alt + '-' + index} />
      ))}
    </div>
  )
}
