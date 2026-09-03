import styles from './MobileNav.module.scss'
import { NavList } from '@/widgets/navigation/sidebar-navigation/ui/NavList';
import {mobileNavigation} from "@/widgets/navigation/model/navigationItems";


export const MobileNav = () => {
  return (
    <footer className={styles.footer}>
      <NavList label="Mobile Navigation" items={mobileNavigation} variant="mobile" />
    </footer>
  )
}
