import type { ButtonProps } from '@/shared/ui/button/types';
import styles from './ButtonBase.module.scss'
import classNames from 'classnames';
import { Icon } from '@/shared/ui/Icon';

export const Button = (props: ButtonProps ) => {
  const {
    label,
    variant = 'filled',
    isIconOnly,
    icon,
    iconPosition = 'before',
    type = 'button',
    onClick,
    className,
    ariaLabel,
    disabled,
  } = props

  const iconComponent = icon && (
    <Icon
      className={styles.icon}
      name={icon}
    />
  )

  return (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        className,
        {
          [styles.iconOnly]: isIconOnly,
        }
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
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
    </button>
  )
}
