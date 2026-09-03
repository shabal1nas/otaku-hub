import { NavLink } from 'react-router';
import { Icon } from '@/shared/ui/Icon';
import type { NavigationItem } from '@/widgets/navigation/model/navigationItems';
import styles from './NavList.module.scss'


type NavListProps = {
  label: string;
  items: NavigationItem[];
  variant?: 'sidebar' | 'mobile';
}

export const NavList = ({ label, items, variant }: NavListProps) => {
  return (
    <nav aria-label={label}>
      <ul className={`${styles.list} ${variant === 'mobile' ? styles.mobile : styles.sidebar}`}>
        {items.map((item) => (
          <li key={item.to} className={styles.item}>
            <NavLink
              to={item.to}
              aria-label={item.label}
              className={({ isActive }) =>
                `${styles.link} ${item.tone === 'prime' ? styles.linkPrime : ''} ${isActive ? styles.linkActive : ''}`
              }
            >
              <Icon
                name={item.icon}
                className={styles.icon}/>
              <span className={styles.label}>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
