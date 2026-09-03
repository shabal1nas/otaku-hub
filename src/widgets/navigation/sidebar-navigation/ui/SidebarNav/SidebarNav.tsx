import { mainNavigation, secondaryNavigation } from '@/widgets/navigation/model/navigationItems';
import { Logo } from '@/shared/ui/Logo';
import { NavList } from '@/widgets/navigation/sidebar-navigation/ui/NavList';
import styles from './SidebarNav.module.scss';

export const SidebarNav = () => {

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoNav}>
        <Logo />
      </div>
      <div className={styles.mainNav}>
        <NavList label="Main navigation" items={mainNavigation} variant="sidebar" />
      </div>
      <div className={styles.secondaryNav}>
        <NavList label="Secondary navigation" items={secondaryNavigation} variant="sidebar" />
      </div>
    </aside>
  )
}
