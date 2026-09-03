import type { ButtonLinkProps } from '@/shared/ui/button/types';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Icon } from '@/shared/ui/Icon';
import styles from './ButtonBase.module.scss';

export const ButtonLink = (props: ButtonLinkProps) => {
  const {
    to,
    label,
    variant = 'filled',
    icon,
    iconPosition = 'before',
    onClick,
    className,
    isIconOnly,
    ariaLabel,
  } = props

  const iconComponent = icon && (
    <Icon
      className={styles.icon}
      name={icon}
    />
  )

  return (
    <Link
      to={to}
      className={classNames(
        styles.button,
        styles[variant],
        className,
        {
          [styles.iconOnly]: isIconOnly,
        },
        )}
      onClick={onClick}
      aria-label={isIconOnly ? ariaLabel ?? label : undefined}
    >
      {isIconOnly ? (
        iconComponent
      ) : (
        <>
          {iconPosition === 'before' && iconComponent}
          {!isIconOnly && label && <span className={styles.label}>{label}</span>}
          {iconPosition === 'after' && iconComponent}
        </>
      )}
    </Link>
  )
}
