import type { ElementType } from 'react';
import styles from './Logo.module.scss';

type LogoProps = {
  as?: ElementType;
  className?: string;
}

export const Logo = ({ as: Tag = 'div', className}: LogoProps) => {

  return (
    <Tag className={`${styles.logo} ${className ?? ''}`}>
      <span className={styles.full}>Otaku Hub</span>
      <span className={styles.compact}>OH</span>
      <span className={styles.dot} aria-hidden="true"></span>
    </Tag>
  )
}
