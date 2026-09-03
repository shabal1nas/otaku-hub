import styles from './PageState.module.scss'
import { ReactNode } from "react";
import frirenOnPageState from '@/shared/assets/images/optional/sad-friren.webp'
import classNames from "classnames";

type PageStateVariant = 'loading' | 'empty' | 'error';

type PageStateSize = 'default' | 'compact';

type PageStateProps = {
  variant: PageStateVariant;
  size?: PageStateSize;
  title?: string;
  description?: string | null;
  action?: ReactNode;
}

type PageStateContent = {
  title?: string;
  description?: string;
  image?: string | null;
}

const PAGE_STATE_CONTENT: Record<PageStateVariant, PageStateContent> = {
  loading: {
    title: 'Loading anime...',
    description: 'Please wait.',
    image: null,
  },
  empty: {
    title: 'Anime not found',
    description: 'Try changing filters.',
    image: frirenOnPageState,
  },
  error: {
    title: 'Something went wrong',
    description: 'Please try again.',
    image: frirenOnPageState,
  },
}


export const PageState = ({
  variant, size = 'default',title, description, action,
}: PageStateProps) => {

  const content = PAGE_STATE_CONTENT[variant];
  const resolvedTitle = title ?? content.title;
  const resolvedDescription = description ?? content.description


  return (
    <div className={classNames(styles.pageState, {
      [styles.compact]: size === 'compact',
    })}
    >
      <h3 className={styles.title}>{resolvedTitle}</h3>
      {variant === 'loading' && <div className={styles.spinner} />}
      {content.image &&
        <img
          className={styles.image}
          src={content.image}
          alt=""
        />}
      <p className={styles.description}>{resolvedDescription}</p>
      {action && (
        <div className={styles.action}>
          {action}
        </div>
        )}
    </div>
  )
}