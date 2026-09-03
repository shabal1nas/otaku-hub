import classNames from 'classnames';
import { Icon } from '@/shared/ui/Icon';
import styles from './Rating.module.scss';
import { CSSProperties } from 'react';

type RatingTone = 'masterpiece' | 'excellent' | 'veryGood';
type RatingVariant = 'badge' | 'progress';
type RatingPreset = 'hero' | 'card' | 'compact';

type RatingProps = {
  className?: string;
  rating: number;
  showMaxRating?: boolean;
  tone?: RatingTone;
  variant?: RatingVariant;
  preset?: RatingPreset;
  withFrame?: boolean;
};

const getRatingTone = (rating: number): RatingTone => {
  if (rating >= 9) return 'masterpiece';
  if (rating >= 8.5) return 'excellent';
  return 'veryGood';
}

export const Rating = (props: RatingProps) => {
  const {
    className,
    rating,
    showMaxRating = false,
    tone,
    variant = 'badge',
    preset = 'card',
    withFrame = true,
  } = props

  const resolvedTone = tone ?? getRatingTone(rating);
  const displayRating = rating.toFixed(1);
  const min = 5;
  const max = 10;
  const normalized = ((rating - min) / (max - min)) * 100;
  const progressWidth = Math.min(100, Math.max(0, normalized))
  const isFramed = withFrame ?? (preset !== 'compact')


  return (
    <div
      className={classNames(
        styles.root,
        styles[resolvedTone],
        styles[variant],
        styles[preset],
        isFramed && styles.withFrame,
        className,
      )}
    >
      {variant === 'badge' && (
        <>
          <Icon className={styles.icon} name="star" />
          <div className={styles.value}>
            <span className={styles.rating}>{displayRating}</span>
            {showMaxRating && <span className={styles.maxRating}>/10</span>}
          </div>
        </>
      )}
      {variant === 'progress' && (
        <>
          <div className={styles.progressTrack}>
          <span
            className={styles.progressFill}
            style={
              {
                '--progress-width': `${progressWidth}%`,
              } as CSSProperties
            }
          />
          </div>
          <span className={styles.rating}>{displayRating}</span>
        </>
      )}
    </div>
  );
}
