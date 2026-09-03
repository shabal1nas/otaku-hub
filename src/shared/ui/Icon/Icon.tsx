import { iconMap, type IconName } from '@/shared/ui/Icon/iconConfig';
import styles from './Icon.module.scss'

type IconProps = {
  name: IconName;
  className?: string
}

export const Icon = ({ name, className } : IconProps) => {
  const IconComponent = iconMap[name]
  return <IconComponent className={`${styles.icon} ${className ?? ''}`} />
}
