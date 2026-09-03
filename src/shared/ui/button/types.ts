import type { IconName } from '@/shared/ui/Icon';
import type { MouseEventHandler } from 'react';


export type BaseButtonProps = {
  label?: string;
  variant?: 'filled' | 'outlined' | 'ghosted';
  icon?: IconName;
  iconPosition?: 'before' | 'after';
  isIconOnly?: boolean;
  ariaLabel?: string;
  className?: string;
}

export type ButtonProps = BaseButtonProps & {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export type ButtonLinkProps = BaseButtonProps & {
  to: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
